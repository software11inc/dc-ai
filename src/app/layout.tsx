import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deckcraft — Build the pipeline. Own the data.",
  description: "The only platform that turns expert designers into a continuous AI training pipeline. Capture every operation, every decision, automatically.",
  openGraph: {
    title: "Deckcraft — Build the pipeline. Own the data.",
    description: "The only platform that turns expert designers into a continuous AI training pipeline. Capture every operation, every decision, automatically.",
    siteName: "Deckcraft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deckcraft — Build the pipeline. Own the data.",
    description: "The only platform that turns expert designers into a continuous AI training pipeline. Capture every operation, every decision, automatically.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
