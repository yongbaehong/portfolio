import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YB's Portfolio",
  description:
    "[Yongbae] | Frontend Developer showcasing responsive web design and interactive UIs. View code & live projects that drive results.",
  openGraph: {
    title: "YB's Portfolio",
    description:
      "[Yongbae] | Frontend Developer showcasing responsive web design and interactive UIs. View code & live projects that drive results.",
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
      <body
        className={`${roboto.variable} ${playfairDisplay.variable} antialiased  flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
