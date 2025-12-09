import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Math Challenge Game",
  description: "Test your math skills with this interactive challenge game!",
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
