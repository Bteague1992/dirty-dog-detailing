"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { companyInfo } from "@/data/company-info";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-dirtydog-black">
      {/* Hero Section */}
      <section className="bg-dirtydog-gray border-b border-dirtydog-silver/20 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <HelpCircle
                className="h-16 w-16 text-dirtydog-green"
                aria-hidden="true"
              />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-5xl mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-dirtydog-silver sm:text-xl">
              Got questions? We've got answers. Find everything you need to know
              about our mobile auto detailing services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <Card
                  key={index}
                  className="bg-dirtydog-gray border-dirtydog-silver/20 hover:border-dirtydog-green/50 transition-colors"
                >
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-lg text-dirtydog-offwhite pr-4">
                        {faq.question}
                      </CardTitle>
                      <button
                        type="button"
                        className="flex-shrink-0 text-dirtydog-green hover:text-dirtydog-green-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dirtydog-green focus-visible:ring-offset-2 rounded"
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? "Collapse" : "Expand"} answer`}
                      >
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="h-5 w-5" aria-hidden="true" />
                        )}
                      </button>
                    </div>
                  </CardHeader>
                  {isOpen && (
                    <CardContent>
                      <p className="text-base text-dirtydog-silver leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 sm:py-24 bg-dirtydog-gray border-y border-dirtydog-silver/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-extrabold text-dirtydog-offwhite">
              Still Have Questions?
            </h2>
            <p className="text-base text-dirtydog-silver">
              Can't find what you're looking for? We're here to help. Give us a
              call, send us an email, or{" "}
              <Link
                href="/services"
                className="text-dirtydog-green hover:text-dirtydog-green-soft underline font-semibold"
              >
                check out our services page
              </Link>{" "}
              for more detailed information.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href={`tel:${companyInfo.phone.tel}`}>
                  {companyInfo.phone.display}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href={`mailto:${companyInfo.email}`}>
                  {companyInfo.email}
                </a>
              </Button>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

