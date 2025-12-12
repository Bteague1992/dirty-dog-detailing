import type { Metadata } from "next";
import { services } from "@/data/services";
import { companyInfo } from "@/data/company-info";

export const metadata: Metadata = {
  title: "Services & Pricing | Dirty Dog Detailing",
  description:
    "Detailed information about all our auto detailing services including Exterior Basic Wash, Interior Basic Clean, Full Dirty Dog Detail™, and Interior Deep Clean. Transparent pricing for all vehicle sizes.",
  openGraph: {
    title: "Services & Pricing | Dirty Dog Detailing",
    description:
      "Complete auto detailing services with transparent pricing. Choose from exterior, interior, or full detail packages.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Auto Detailing",
    provider: {
      "@type": "AutomotiveBusiness",
      name: companyInfo.name,
      telephone: companyInfo.phone.tel,
      email: companyInfo.email,
    },
    areaServed: {
      "@type": "State",
      name: "North Carolina",
      containsPlace: [
        { "@type": "City", name: "Hickory", addressRegion: "NC" },
        { "@type": "City", name: "Morganton", addressRegion: "NC" },
        { "@type": "City", name: "Connelly Springs", addressRegion: "NC" },
        { "@type": "City", name: "Valdese", addressRegion: "NC" },
        { "@type": "City", name: "Granite Falls", addressRegion: "NC" },
      ],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto Detailing Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.shortDescription,
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            lowPrice: Math.min(...service.pricing.map((p) => p.price)).toString(),
            highPrice: Math.max(...service.pricing.map((p) => p.price)).toString(),
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}

