import { services } from "@/data/services";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { companyInfo, primaryServiceArea } from "@/data/company-info";
import { GlobalPoliciesSection } from "@/components/global-policies-section";

export default function ServicesPage() {
  const regularServices = services.filter((s) => !s.requiresPhoneCall);
  const restorationServices = services.filter((s) => s.requiresPhoneCall);

  return (
    <main className="min-h-screen bg-dirtydog-black">
      {/* Hero Section */}
      <section className="bg-dirtydog-gray border-b border-dirtydog-silver/20 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-4xl mb-4">
              Services & Pricing
            </h1>
            <p className="text-base text-dirtydog-silver sm:text-lg">
              Clear services. Straightforward pricing. No surprise surcharges.
              One-time pricing with subscription discounts available.
            </p>
            <p className="text-sm text-dirtydog-silver mt-4">
              Looking for mobile auto detailing in{" "}
              <Link
                href="/mobile-auto-detailing-newton"
                className="text-dirtydog-green hover:text-dirtydog-green-soft underline font-semibold"
              >
                {primaryServiceArea}
              </Link>
              ? Learn more.
            </p>
          </div>
        </div>
      </section>

      {/* Global Policies */}
      <GlobalPoliciesSection />

      {/* Regular Services */}
      {regularServices.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-3xl mb-2">
                Our Services
              </h2>
              <p className="text-sm text-dirtydog-silver max-w-2xl mx-auto">
                Professional detailing services with transparent pricing. Save
                with monthly or bi-monthly subscriptions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {regularServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Restoration Services */}
      {restorationServices.length > 0 && (
        <section className="py-12 sm:py-16 bg-dirtydog-gray border-y border-dirtydog-silver/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-3xl mb-2">
                Restoration Services (Quote Only)
              </h2>
              <p className="text-sm text-dirtydog-silver max-w-2xl mx-auto">
                For extreme cases requiring custom quotes. Phone call or text
                required.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {restorationServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Info Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-xl font-extrabold text-dirtydog-offwhite text-center">
              Questions About Services?
            </h2>
            <p className="text-sm text-dirtydog-silver text-center">
              Not sure which service is right for you? Have questions about
              pricing or scope? We're here to help.{" "}
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-dirtydog-green hover:text-dirtydog-green-soft underline font-semibold"
              >
                Contact us
              </a>{" "}
              with any questions.
            </p>
            <div className="flex justify-center pt-2">
              <Button asChild variant="outline" size="default">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
