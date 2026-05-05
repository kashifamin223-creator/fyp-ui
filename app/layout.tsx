 import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Home/Footer";
import { ThemeProvider } from "./components/ThemeContext";
import ChatBot from "./components/ChatBot";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mental Healthcare Therapy",
  description: "Providing comprehensive mental health support for all age groups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >   
        <ThemeProvider>
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
