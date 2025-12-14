import type { Metadata } from "next";
import { companyInfo, primaryServiceArea } from "@/data/company-info";

export const metadata: Metadata = {
  title: "Contact Us | Dirty Dog Detailing",
  description: `Get in touch with Dirty Dog Detailing. Book an appointment, ask questions, or learn more about our mobile auto detailing services in ${primaryServiceArea} and nearby areas.`,
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
