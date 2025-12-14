import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-dirtydog-black border-y border-dirtydog-silver/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-4xl">
            Ready for a Dirty Dog Clean™?
          </h2>
          <p className="text-lg text-dirtydog-silver max-w-2xl mx-auto">
            Book online to secure your spot. We require a deposit to hold your
            appointment. Questions? We're here to help.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Book Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center"
              >
                <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
