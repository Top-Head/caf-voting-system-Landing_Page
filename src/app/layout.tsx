import type { Metadata } from "next";
import { Geist, Geist_Mono, Koulen } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const koulen = Koulen({
  subsets: ['latin'], 
  weight: '400', // Koulen só tem 400
  variable: '--font-koulen'
})

export const metadata: Metadata = {
  title: "Sistema de votação",
  description: "Pagina inicial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ '--font-koulen': koulen.style.fontFamily } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
