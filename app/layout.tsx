import type { Metadata } from "next";
import "./globals.css";

import Nav from '@/components/Nav';

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
        <Nav />
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
