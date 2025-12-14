import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { ServicesSection } from "@/components/services-section";
import { ProcessSection } from "@/components/process-section";
import { GalleryPlaceholder } from "@/components/gallery-placeholder";
import { ReviewsSection } from "@/components/reviews-section";
import { ServiceAreaSection } from "@/components/service-area-section";
import { AboutSection } from "@/components/about-section";
import { CTASection } from "@/components/cta-section";
import { GlobalPoliciesSection } from "@/components/global-policies-section";
import { companyInfo, primaryServiceArea } from "@/data/company-info";
import { services } from "@/data/services";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Dirty Dog Detailing | Mobile Auto Detailing in ${primaryServiceArea}`,
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
  openGraph: {
    title: "Dirty Dog Detailing | Mobile Auto Detailing",
    description: `Mean on dirt. Clean on paint. Mobile auto detailing serving ${primaryServiceArea} and nearby areas.`,
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
    areaServed: {
      "@type": "City",
      name: "Newton",
      addressRegion: "NC",
      addressCountry: "US",
    },
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
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.shortDescription,
        },
      })),
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
        <GlobalPoliciesSection />
        <div className="bg-dirtydog-black py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-dirtydog-silver">
              Looking for mobile auto detailing in{" "}
              <Link
                href="/mobile-auto-detailing-newton"
                className="text-dirtydog-green hover:text-dirtydog-green-soft underline font-semibold"
              >
                Newton, NC
              </Link>
              ? Learn more.
            </p>
          </div>
        </div>
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
