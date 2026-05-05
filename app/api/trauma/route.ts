import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const backendUrl = "http://localhost:5269/api/TraumaForm";

    console.log("Forwarding request to backend:", backendUrl);
    console.log("Request body:", JSON.stringify(body, null, 2));

    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "accept": "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const responseText = await response.text();
    console.log("Backend response status:", response.status);
    console.log("Backend response:", responseText);

    if (!response.ok) {
      return NextResponse.json(
        {
          error: `Backend returned ${response.status}`,
          details: responseText,
        },
        { status: response.status }
      );
    }

    try {
      const data = JSON.parse(responseText);
      return NextResponse.json(data);
    } catch (e) {
      // If response is not JSON, return as-is
      return NextResponse.json(
        {
          message: "Success",
          response: responseText,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("API route error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Internal server error", details: errorMessage },
      { status: 500 }
    );
  }
}