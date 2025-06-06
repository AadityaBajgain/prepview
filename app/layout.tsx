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
  title: "PrepView",
  description: "AI powered interview prepration platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pattern`}
      >
        <h1 className="text-center font-bold text-2xl text-gray-500">In Progress</h1>
        <p className="text-center text-gray-500 mt-2">
          Thank you for visiting! Our site is currently under development. Stay tuned for updates!
        </p>
        {children}
      </body>
    </html>
  );
}
