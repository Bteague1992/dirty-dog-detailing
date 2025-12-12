import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { ServicesSection } from "@/components/services-section";
import { DirtyLevelsSection } from "@/components/dirty-levels-section";
import { ProcessSection } from "@/components/process-section";
import { GalleryPlaceholder } from "@/components/gallery-placeholder";
import { ReviewsSection } from "@/components/reviews-section";
import { ServiceAreaSection } from "@/components/service-area-section";
import { AboutSection } from "@/components/about-section";
import { CTASection } from "@/components/cta-section";
import { companyInfo } from "@/data/company-info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dirty Dog Detailing | Mobile Auto Detailing in Hickory, Morganton & Connelly Springs",
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
  openGraph: {
    title: "Dirty Dog Detailing | Mobile Auto Detailing",
    description:
      "Mean on dirt. Clean on paint. Mobile auto detailing serving Hickory, Morganton, Connelly Springs, and surrounding areas.",
    type: "website",
    locale: "en_US",
    siteName: "Dirty Dog Detailing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dirty Dog Detailing | Mobile Auto Detailing",
    description:
      "Mean on dirt. Clean on paint. Mobile auto detailing with the signature Dirty Dog Clean™.",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": "https://dirtydogmobiledetailing.com/#business",
    name: companyInfo.name,
    url: "https://dirtydogmobiledetailing.com",
    telephone: companyInfo.phone.tel,
    email: companyInfo.email,
    priceRange: "$$",
    description:
      "Mobile auto detailing service offering interior and exterior cleaning, deep interior restoration, and the signature Dirty Dog Clean™.",
    slogan: companyInfo.tagline,
    areaServed: [
      {
        "@type": "City",
        name: "Hickory",
        addressRegion: "NC",
        addressCountry: "US",
      },
      {
        "@type": "City",
        name: "Morganton",
        addressRegion: "NC",
        addressCountry: "US",
      },
      {
        "@type": "City",
        name: "Connelly Springs",
        addressRegion: "NC",
        addressCountry: "US",
      },
      {
        "@type": "City",
        name: "Valdese",
        addressRegion: "NC",
        addressCountry: "US",
      },
      {
        "@type": "City",
        name: "Granite Falls",
        addressRegion: "NC",
        addressCountry: "US",
      },
    ],
    serviceType: [
      "Auto Detailing",
      "Car Detailing",
      "Mobile Car Wash",
      "Interior Detailing",
      "Exterior Detailing",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto Detailing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Exterior Basic Wash",
            description:
              "Exterior-only maintenance wash for light dirt and weekly/monthly upkeep.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Basic Clean",
            description:
              "Interior reset for generally clean vehicles (light debris, normal use).",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Dirty Dog Detail™",
            description:
              "Complete interior + exterior detail for most vehicles.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Deep Clean",
            description:
              "Heavy interior reset for kid messes, pet hair, spills, and neglected vehicles.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <TrustStrip />
        <ServicesSection />
        <DirtyLevelsSection />
        <ProcessSection />
        {/* <GalleryPlaceholder /> */}
        <ReviewsSection />
        <ServiceAreaSection />
        <AboutSection />
        <CTASection />
      </main>
    </>
  );
}
