import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Math Challenge Game",
  description: "Test your math skills with this interactive challenge game! Choose from Easy, Medium, or Hard difficulty levels and compete for the highest score.",
  keywords: ["math game", "math challenge", "education", "quiz", "learning", "math practice"],
  authors: [{ name: "Math Challenge Team" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#667eea",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Math Challenge Game",
    description: "Test your math skills with this interactive challenge game!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
