import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { companyInfo, primaryServiceArea } from "@/data/company-info";

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
    default: `Dirty Dog Detailing | Mobile Auto Detailing in ${primaryServiceArea}`,
    template: "%s | Dirty Dog Detailing",
  },
  description: `Mobile auto detailing service offering interior and exterior cleaning, deep interior restoration, and the signature Dirty Dog Clean™ in ${primaryServiceArea} and nearby areas.`,
  keywords: [
    "mobile auto detailing",
    "car detailing",
    "Newton NC",
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
    description: `Mean on dirt. Clean on paint. Mobile auto detailing serving ${primaryServiceArea} and nearby areas with the signature Dirty Dog Clean™.`,
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

// LocalBusiness schema for site-wide
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: companyInfo.name,
  telephone: companyInfo.phone.tel,
  email: companyInfo.email,
  url: "https://dirtydogmobiledetailing.com",
  priceRange: "$$",
  description:
    "Mobile auto detailing service offering interior and exterior cleaning, deep interior restoration, and the signature Dirty Dog Clean™.",
  areaServed: {
    "@type": "City",
    name: "Newton",
    addressRegion: "NC",
    addressCountry: "US",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Newton",
    addressRegion: "NC",
    addressCountry: "US",
  },
  serviceType: [
    "Mobile Auto Detailing",
    "Interior Detailing",
    "Exterior Detailing",
    "Mobile Car Detailing",
    "Car Detailing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
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
