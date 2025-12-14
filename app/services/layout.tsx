import type { Metadata } from "next";
import { services } from "@/data/services";
import { companyInfo, primaryServiceArea } from "@/data/company-info";

export const metadata: Metadata = {
  title: "Services & Pricing | Dirty Dog Detailing",
  description: `Detailed information about all our auto detailing services including Exterior Detail, Interior Detail, Full Detail, and Restoration services. Transparent pricing for all vehicle sizes in ${primaryServiceArea}.`,
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
      containsPlace: {
        "@type": "City",
        name: "Newton",
        addressRegion: "NC",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto Detailing Services",
      itemListElement: services
        .filter((service) => service.oneOffPricing.length > 0)
        .map((service, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.shortDescription,
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: Math.min(
                ...service.oneOffPricing.map((p) => p.price)
              ).toString(),
              highPrice: Math.max(
                ...service.oneOffPricing.map((p) => p.price)
              ).toString(),
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
