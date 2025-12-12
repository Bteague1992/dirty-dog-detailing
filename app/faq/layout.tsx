import type { Metadata } from "next";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ | Dirty Dog Detailing",
  description:
    "Frequently asked questions about Dirty Dog Detailing's mobile auto detailing services. Learn about our services, pricing, scheduling, and more.",
  openGraph: {
    title: "FAQ | Dirty Dog Detailing",
    description:
      "Get answers to common questions about our mobile auto detailing services.",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}

