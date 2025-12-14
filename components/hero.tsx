import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import { companyInfo, serviceAreaShort } from "@/data/company-info";

const highlights = [
  "Mobile service — we come to you",
  "Interior + exterior packages",
  "Pet hair, kid mess, work trucks welcome",
];

export function Hero() {
  return (
    <section className="relative bg-dirtydog-black py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-5xl lg:text-6xl">
              Mean on Dirt.
              <br />
              <span className="text-dirtydog-green">Clean on Paint.</span>
            </h1>
            <p className="text-lg text-dirtydog-silver sm:text-xl">
              Mobile auto detailing serving {serviceAreaShort} — with a
              signature{" "}
              <span className="font-semibold text-dirtydog-green">
                Dirty Dog Clean™
              </span>{" "}
              that hits harder than a basic wash.
            </p>

            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check
                    className="h-5 w-5 text-dirtydog-green mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-base text-dirtydog-offwhite">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link target="_blank" href={companyInfo.bookingUrl}>
                  Book the Dirty Dog Clean™
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="/services">View services & pricing</Link>
              </Button>
            </div>
          </div>

          {/* Right: Hero Image Placeholder */}
          <div className="relative">
            <Image
              src="/images/foam-black-car.png"
              alt="Dirty Dog Detailing Hero Image"
              width={1000}
              height={1000}
              className="bg-neutral-800 rounded-xl w-full aspect-[4/3] max-w-full"
              aria-label="Placeholder for Dirty Dog Detailing hero image showing a detailed vehicle with foam and cleaning process"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
