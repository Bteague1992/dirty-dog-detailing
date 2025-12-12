import { services } from "@/data/services";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-dirtydog-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-4xl mb-4">
            Choose Your Dirty Dog Detail
          </h2>
          <p className="text-lg text-dirtydog-silver max-w-2xl mx-auto">
            Clear services. Straightforward pricing. No nonsense.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mb-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services" className="flex items-center justify-center">
              View Full Service Details & Pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
