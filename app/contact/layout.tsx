import type { Metadata } from "next";
import { companyInfo } from "@/data/company-info";
import { serviceAreas } from "@/data/service-area";

export const metadata: Metadata = {
  title: "Contact Us | Dirty Dog Detailing",
  description:
    "Get in touch with Dirty Dog Detailing. Book an appointment, ask questions, or learn more about our mobile auto detailing services in Hickory, Morganton, Connelly Springs, and surrounding areas.",
  openGraph: {
    title: "Contact Us | Dirty Dog Detailing",
    description:
      "Book your mobile auto detailing appointment or get in touch with questions.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Enhanced LocalBusiness schema for contact page
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
    areaServed: serviceAreas
      .filter((area) => area !== "Nearby surrounding areas")
      .map((area) => {
        const cityName = area.replace(", NC", "");
        return {
          "@type": "City",
          name: cityName,
          addressRegion: "NC",
          addressCountry: "US",
        };
      }),
    address: {
      "@type": "PostalAddress",
      addressRegion: "NC",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "35.7331",
        longitude: "-81.3412",
      },
      geoRadius: {
        "@type": "Distance",
        value: "25",
        unitCode: "MI",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {children}
    </>
  );
}
