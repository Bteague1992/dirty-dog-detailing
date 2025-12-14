import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Heart, MapPin, Sparkles, Shield } from "lucide-react";
import { companyInfo, serviceAreaShort } from "@/data/company-info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Dirty Dog Detailing",
  description: `Learn about Dirty Dog Detailing - a locally owned and operated mobile auto detailing service serving ${serviceAreaShort}.`,
  openGraph: {
    title: "About Us | Dirty Dog Detailing",
    description:
      "Locally owned mobile auto detailing with the signature Dirty Dog Clean™ process.",
  },
};

const values = [
  {
    icon: Sparkles,
    title: "Quality Work",
    description:
      "We don't cut corners. Every vehicle gets the attention it deserves, whether it's a quick maintenance wash or a deep interior restoration.",
  },
  {
    icon: Shield,
    title: "Honest Pricing",
    description:
      "No hidden fees, no surprise charges. Our pricing is transparent and fair. If your vehicle matches the service scope, your price will not change on arrival.",
  },
  {
    icon: Heart,
    title: "Local & Personal",
    description:
      "We're not a big chain. We're your neighbors, treating every vehicle like it's our own and building relationships with our community.",
  },
  {
    icon: MapPin,
    title: "Mobile Convenience",
    description:
      "We come to you. Whether it's your home, office, or anywhere else in our service area, we bring the full detailing experience to your location.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dirtydog-black">
      {/* Hero Section */}
      <section className="bg-dirtydog-gray border-b border-dirtydog-silver/20 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-5xl mb-6">
              About Dirty Dog Detailing
            </h1>
            <p className="text-lg text-dirtydog-silver sm:text-xl">
              We're a locally owned and operated mobile auto detailing service
              that takes pride in delivering results. No fancy marketing, no
              upsells, just honest work that gets your vehicle clean.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-dirtydog-silver leading-relaxed">
                Our signature{" "}
                <span className="font-semibold text-dirtydog-green">
                  Dirty Dog Clean™
                </span>{" "}
                process combines aggressive cleaning techniques with careful
                attention to detail. We treat every vehicle like it's our own,
                whether it's a daily driver, work truck, or family hauler.
              </p>
              <p className="text-lg text-dirtydog-silver leading-relaxed">
                Serving {serviceAreaShort} — we come to you, so you can get back to what matters.
              </p>
            </div>

            {/* What Makes Us Different */}
            <div>
              <h2 className="text-2xl font-extrabold text-dirtydog-offwhite mb-6">
                What Makes Us Different
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card
                      key={index}
                      className="bg-dirtydog-gray border-dirtydog-silver/20"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <Icon
                            className="h-6 w-6 text-dirtydog-green"
                            aria-hidden="true"
                          />
                          <CardTitle className="text-xl text-dirtydog-offwhite">
                            {value.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-dirtydog-silver">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Our Process */}
            <div>
              <h2 className="text-2xl font-extrabold text-dirtydog-offwhite mb-4">
                The Dirty Dog Clean™ Process
              </h2>
              <p className="text-base text-dirtydog-silver mb-4">
                Every service follows our signature process:
              </p>
              <ul className="space-y-3 text-base text-dirtydog-silver">
                <li className="flex items-start gap-3">
                  <span className="text-dirtydog-green mt-1">•</span>
                  <span>
                    <strong className="text-dirtydog-offwhite">
                      Dirty Dog Foam Dunk™:
                    </strong>{" "}
                    Thick pre-wash foam that breaks down grime, bugs, and road
                    film before we even touch your paint.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-dirtydog-green mt-1">•</span>
                  <span>
                    <strong className="text-dirtydog-offwhite">
                      Aggressive-on-dirt wash:
                    </strong>{" "}
                    We get the dirt others miss, using pH-neutral soap and
                    proper techniques to protect your paint.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-dirtydog-green mt-1">•</span>
                  <span>
                    <strong className="text-dirtydog-offwhite">
                      Deep interior reset:
                    </strong>{" "}
                    Every nook and cranny gets attention. We don't skip the hard
                    spots.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-dirtydog-green mt-1">•</span>
                  <span>
                    <strong className="text-dirtydog-offwhite">
                      Final touches:
                    </strong>{" "}
                    Tire shine, glass perfection, and a protective sealant to
                    keep your vehicle looking great longer.
                  </span>
                </li>
              </ul>
            </div>

            {/* Service Area */}
            <div>
              <h2 className="text-2xl font-extrabold text-dirtydog-offwhite mb-4">
                Our Service Area
              </h2>
              <p className="text-base text-dirtydog-silver mb-4">
                We primarily serve {serviceAreaShort}. If you're just outside Newton, contact us and we'll confirm availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-dirtydog-gray border-y border-dirtydog-silver/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-extrabold text-dirtydog-offwhite">
              Ready to Experience the Dirty Dog Clean™?
            </h2>
            <p className="text-base text-dirtydog-silver">
              Book your appointment today and see why we're the trusted choice
              for mobile auto detailing in the area.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link
                  target="_blank"
                  href={companyInfo.bookingUrl}
                >
                  Book Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
