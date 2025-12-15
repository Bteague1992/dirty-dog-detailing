import type { Metadata } from "next";
import { companyInfo, primaryServiceArea } from "@/data/company-info";

export const metadata: Metadata = {
  title: "Fleet Maintenance Vehicle Cleaning in Newton, NC | Dirty Dog Detailing",
  description: `Professional fleet maintenance vehicle cleaning for police cars, delivery vans, work trucks, and company vehicles in ${primaryServiceArea}. Recurring cleaning, sanitation, and documentation services scheduled around your operations.`,
  keywords: [
    "fleet maintenance",
    "fleet vehicle cleaning",
    "police car cleaning",
    "delivery van cleaning",
    "work truck cleaning",
    "company vehicle cleaning",
    "fleet sanitation",
    "fleet detailing",
    "Newton NC fleet service",
    "municipal vehicle cleaning",
    "service vehicle maintenance",
    "utility truck cleaning",
  ],
  openGraph: {
    title: "Fleet Maintenance Vehicle Cleaning | Dirty Dog Detailing",
    description:
      "Recurring fleet cleaning & sanitation for police cars, work trucks, delivery vans, and company vehicles—reliable, documented, and scheduled around your operations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleet Maintenance Vehicle Cleaning | Dirty Dog Detailing",
    description:
      "Recurring fleet cleaning & sanitation for police cars, work trucks, delivery vans, and company vehicles.",
  },
  alternates: {
    canonical: "https://dirtydogmobiledetailing.com/fleet-maintenance",
  },
};

export default function FleetMaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fleetServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fleet Maintenance Vehicle Cleaning",
    name: "Fleet Maintenance Vehicle Cleaning",
    description:
      "Recurring fleet cleaning and sanitation services for police cars, delivery vans, work trucks, and company vehicles.",
    provider: {
      "@type": "AutomotiveBusiness",
      name: companyInfo.name,
      telephone: companyInfo.phone.tel,
      email: companyInfo.email,
      url: "https://dirtydogmobiledetailing.com",
    },
    areaServed: {
      "@type": "City",
      name: "Newton",
      addressRegion: "NC",
      addressCountry: "US",
    },
    serviceOutput: [
      "Exterior vehicle cleaning",
      "Interior vehicle cleaning",
      "High-touch surface sanitation",
      "Glass and visibility maintenance",
      "Fleet documentation and invoicing",
    ],
    audience: {
      "@type": "Audience",
      audienceType: [
        "Police departments",
        "Delivery services",
        "Contractor fleets",
        "Utility companies",
        "Corporate fleets",
        "Municipal services",
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you clean police cars and patrol vehicles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we service police cars, sheriff vehicles, and municipal patrol vehicles. We understand the importance of maintaining professional appearance and can work around shift schedules. All services are documented for fleet management records.",
        },
      },
      {
        "@type": "Question",
        name: "Can you service delivery vans and work vehicles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We regularly service delivery vans (Amazon, FedEx, UPS-style), work trucks, service vehicles, and utility trucks. Our mobile service comes to your location, so vehicles don't need to leave your facility.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer early morning or after-hours service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we schedule fleet maintenance around your operations. We can provide early morning service before your fleet goes out, or after-hours service when vehicles return. This minimizes downtime and disruption to your operations.",
        },
      },
      {
        "@type": "Question",
        name: "Do you need access to water and power?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we require access to a water source and electrical outlet at your location. Our mobile setup is self-contained, but we need these utilities to provide thorough cleaning and sanitation services. We can discuss your facility's setup during the quote process.",
        },
      },
      {
        "@type": "Question",
        name: "What's the minimum fleet size?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work with fleets of all sizes. While pricing becomes more efficient with larger fleets, we can accommodate smaller fleets starting with just a few vehicles. Contact us to discuss your specific needs and we'll provide a customized quote.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fleetServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}

