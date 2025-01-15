import type { Metadata } from "next";
import { JetBrains_Mono, Press_Start_2P } from 'next/font/google';
import "./globals.css";

import Nav from '@/components/Nav';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
});

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p'
});

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
      <body className={`${jetbrainsMono.variable} ${pressStart2P.variable} font-mono`}>
        <Nav />
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
