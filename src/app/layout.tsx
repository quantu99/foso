import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.scss";
import { TopBar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
      </head>
      <body className={inter.className}>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
