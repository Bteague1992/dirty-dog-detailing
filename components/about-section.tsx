import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-dirtydog-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-4xl">
            About Dirty Dog Detailing
          </h2>
          <p className="text-lg text-dirtydog-silver">
            We're a locally owned and operated mobile auto detailing service
            that takes pride in delivering results. No fancy marketing, no
            upsells, just honest work that gets your vehicle clean.
          </p>
          <p className="text-lg text-dirtydog-silver">
            Our signature{" "}
            <span className="font-semibold text-dirtydog-green">
              Dirty Dog Clean™
            </span>{" "}
            process combines aggressive cleaning techniques with careful
            attention to detail. We treat every vehicle like it's our own,
            whether it's a daily driver, work truck, or family hauler.
          </p>
          <p className="text-lg text-dirtydog-silver">
            Serving Hickory, Morganton, Connelly Springs, and surrounding areas
            — we come to you, so you can get back to what matters.
          </p>
          <div className="pt-4">
            <Button asChild variant="outline" size="lg">
              <Link href="/about" className="flex items-center justify-center">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
