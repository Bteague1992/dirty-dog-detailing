import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Dirty Dog Detailing | Mobile Auto Detailing in Hickory, Morganton & Connelly Springs",
    template: "%s | Dirty Dog Detailing",
  },
  description:
    "Mobile auto detailing service offering interior and exterior cleaning, deep interior restoration, and the signature Dirty Dog Clean™ throughout Hickory, Morganton, Connelly Springs, and surrounding North Carolina areas.",
  keywords: [
    "mobile auto detailing",
    "car detailing",
    "Hickory NC",
    "Morganton NC",
    "Connelly Springs NC",
    "interior detailing",
    "exterior detailing",
    "pet hair removal",
    "vehicle cleaning",
  ],
  authors: [{ name: "Dirty Dog Detailing" }],
  creator: "Dirty Dog Detailing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dirtydogmobiledetailing.com",
    siteName: "Dirty Dog Detailing",
    title: "Dirty Dog Detailing | Mobile Auto Detailing",
    description:
      "Mean on dirt. Clean on paint. Mobile auto detailing serving Hickory, Morganton, Connelly Springs, and surrounding areas with the signature Dirty Dog Clean™.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dirty Dog Detailing | Mobile Auto Detailing",
    description:
      "Mean on dirt. Clean on paint. Mobile auto detailing with the signature Dirty Dog Clean™.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dirtydogmobiledetailing.com",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
