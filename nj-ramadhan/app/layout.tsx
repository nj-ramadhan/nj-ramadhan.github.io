import type { Metadata } from "next";
import Script from 'next/script'
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
  title: "Nur Jamiludin Ramadhan",
  description: "Personal website of Nur Jamiludin Ramadhan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Inline scripts must be handled using the id and strategy props */}
        <Script id="theme-config" strategy="beforeInteractive">
          {`
            window.staDarkLightChooser = true;
            window.isSiteThemeDark = false; 
          `}
        </Script>
      </head>
      <body>
        {children}
        {/* Load the external theme script */}
        <Script src="/js/load-theme.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}