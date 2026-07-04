import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://genalfha.com"),
  title: "Gen Alfha — Building the Next Generation of AI Products",
  description: "Gen Alfha builds premium AI-powered digital products that help students, professionals, creators, and businesses become more productive and achieve more through intelligent software.",
  keywords: [
    "Gen Alfha",
    "AI Products",
    "Prompt Path",
    "Kritifolio",
    "Hyd Tech Diaries",
    "House of Vrika",
    "Ohana Design",
    "Hyderabad Tech",
    "AI Learning Platform",
    "Portfolio Builder",
    "SaaS",
    "Web Development",
    "Next.js App",
    "AI Product Studio Hyderabad"
  ],
  authors: [{ name: "Gen Alfha Team", url: "https://genalfha.com" }],
  openGraph: {
    title: "Gen Alfha — Building the Next Generation of AI Products",
    description: "Empowering students, professionals, and creators with premium AI-powered digital products.",
    url: "https://genalfha.com",
    siteName: "Gen Alfha",
    images: [
      {
        url: "/Gen Alfha Logos.png",
        width: 800,
        height: 600,
        alt: "Gen Alfha - Building the Next Generation of AI Products Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen Alfha — Building the Next Generation of AI Products",
    description: "Empowering students, professionals, and creators with premium AI-powered digital products.",
    images: ["/Gen Alfha Logos.png"]
  },
  icons: {
    icon: "/Gen Alfha Logos.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-white">
        {children}
      </body>
    </html>
  );
}
