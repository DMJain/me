import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Darshan jain",
  description: "Portfolio of a software engineer. 🚀",
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
