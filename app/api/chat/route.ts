import { NextRequest, NextResponse } from "next/server";

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_MODEL = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

const conversationHistories: Record<
  string,
  Array<{ role: string; content: string }>
> = {};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, sessionId = "default" } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!GROQ_API_KEY) {
      return NextResponse.json(
        {
          error:
            "GROQ_API_KEY is not configured. Please add it to your environment variables.",
        },
        { status: 500 }
      );
    }

    // Initialize conversation history if needed
    if (!conversationHistories[sessionId]) {
      conversationHistories[sessionId] = [
        {
          role: "system",
          content:
            "You are a helpful, empathetic AI assistant for a mental health therapy platform. Be supportive, non-judgmental, and encouraging. If someone mentions self-harm or crisis, gently suggest contacting emergency services or a crisis hotline.",
        },
      ];
    }

    const history = conversationHistories[sessionId];
    history.push({ role: "user", content: message });

    // Limit history to last 20 messages to prevent context overflow
    const trimmedHistory = history.slice(-20);

    let reply = "";

    try {
      const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: trimmedHistory,
          stream: false,
        }),
      });

      if (!groqRes.ok) {
        const errText = await groqRes.text();
        console.error("[Groq] Error:", groqRes.status, errText);
        throw new Error(`Groq API error (${groqRes.status}): ${errText}`);
      }

      const data = await groqRes.json();
      reply = data.choices?.[0]?.message?.content || "No response from model.";
    } catch (apiError) {
      console.error("[Groq] API error:", apiError);
      reply =
        "I'm sorry, the AI assistant is temporarily unavailable. Please check your Groq API key and internet connection.";
    }

    history.push({ role: "assistant", content: reply });

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[Chat API] Error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
