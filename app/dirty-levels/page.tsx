import { dirtyLevels } from "@/data/dirty-levels";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertCircle, Camera } from "lucide-react";
import { companyInfo } from "@/data/company-info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dirty Levels Explained | Dirty Dog Detailing",
  description:
    "Understand our three-level dirty level system that helps set expectations and keeps pricing fair. Learn about Level 1 (Dirty), Level 2 (Dirtier), and Level 3 (DIRTY DOG) surcharges.",
  openGraph: {
    title: "Dirty Levels Explained | Dirty Dog Detailing",
    description:
      "Our transparent dirty level system helps you understand pricing based on your vehicle's condition.",
  },
};

export default function DirtyLevelsPage() {
  return (
    <main className="min-h-screen bg-dirtydog-black">
      {/* Hero Section */}
      <section className="bg-dirtydog-gray border-b border-dirtydog-silver/20 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-5xl mb-6">
              How Dirty Is Your Dog?
            </h1>
            <p className="text-lg text-dirtydog-silver sm:text-xl mb-4">
              Our three-level system helps set expectations and keeps pricing
              fair. We'll assess your vehicle and apply the appropriate level
              during booking.
            </p>
            <p className="text-base text-dirtydog-silver">
              Understanding your vehicle's dirty level helps you know what to
              expect and ensures we're prepared with the right tools and time
              for the job.
            </p>
          </div>
        </div>
      </section>

      {/* Dirty Levels */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-12">
            {dirtyLevels.map((level) => (
              <Card
                key={level.id}
                className="relative bg-dirtydog-gray border-dirtydog-silver/20"
              >
                {level.level === 3 && (
                  <div className="absolute -top-3 right-4 z-10">
                    <Badge className="bg-dirtydog-green text-dirtydog-black text-xs font-extrabold px-3 py-1">
                      EXTREME
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl text-dirtydog-offwhite">
                    Dirty Level {level.level} – {level.name}
                  </CardTitle>
                  <CardDescription className="text-base text-dirtydog-silver mt-2">
                    {level.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-dirtydog-black/50 rounded-lg p-4 border border-dirtydog-silver/10">
                    <p className="text-sm font-semibold text-dirtydog-silver mb-1">
                      Additional Surcharge
                    </p>
                    <p className="text-2xl font-extrabold text-dirtydog-green">
                      {level.surcharge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-dirtydog-offwhite mb-3">
                      Common Examples:
                    </h3>
                    <ul className="space-y-2">
                      {level.examples.map((example, index) => (
                        <li
                          key={index}
                          className="text-sm text-dirtydog-silver flex items-start gap-2"
                        >
                          <span className="text-dirtydog-green mt-1">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Important Notes */}
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-dirtydog-gray border-dirtydog-silver/20">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-dirtydog-green mt-0.5 flex-shrink-0" />
                  <CardTitle className="text-xl text-dirtydog-offwhite">
                    Important Notes
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-dirtydog-silver mb-2">
                    <strong className="text-dirtydog-offwhite">Level 3 (DIRTY DOG):</strong>{" "}
                    Photos are required for Level 3 vehicles to ensure proper
                    preparation and accurate pricing. This helps us bring the
                    right equipment and allocate sufficient time for your
                    vehicle.
                  </p>
                  <p className="text-sm text-dirtydog-silver">
                    <strong className="text-dirtydog-offwhite">Assessment:</strong>{" "}
                    We'll assess your vehicle during booking or upon arrival. If
                    the condition is more severe than initially indicated, we'll
                    discuss any additional charges before starting work.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dirtydog-gray border-dirtydog-silver/20">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Camera className="h-5 w-5 text-dirtydog-green mt-0.5 flex-shrink-0" />
                  <CardTitle className="text-xl text-dirtydog-offwhite">
                    How to Determine Your Level
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-dirtydog-silver mb-4">
                  When booking, consider:
                </p>
                <ul className="space-y-2 text-sm text-dirtydog-silver">
                  <li className="flex items-start gap-2">
                    <span className="text-dirtydog-green mt-1">•</span>
                    <span>
                      <strong className="text-dirtydog-offwhite">Pet hair:</strong>{" "}
                      Light shedding (Level 1), moderate throughout (Level 2),
                      heavy coverage everywhere (Level 3)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-dirtydog-green mt-1">•</span>
                    <span>
                      <strong className="text-dirtydog-offwhite">Spills & stains:</strong>{" "}
                      None or minimal (Level 1), a few spots (Level 2), multiple
                      or severe (Level 3)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-dirtydog-green mt-1">•</span>
                    <span>
                      <strong className="text-dirtydog-offwhite">Sticky surfaces:</strong>{" "}
                      Clean (Level 1), some sticky spots (Level 2), widespread
                      sticky buildup (Level 3)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-dirtydog-green mt-1">•</span>
                    <span>
                      <strong className="text-dirtydog-offwhite">Time since last clean:</strong>{" "}
                      Regular maintenance (Level 1), a few months (Level 2),
                      long-neglected (Level 3)
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-dirtydog-gray border-y border-dirtydog-silver/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-extrabold text-dirtydog-offwhite">
              Ready to Book?
            </h2>
            <p className="text-base text-dirtydog-silver">
              Not sure which level applies to your vehicle? No problem. We'll
              assess it during booking or upon arrival.{" "}
              <Link
                href="/services"
                className="text-dirtydog-green hover:text-dirtydog-green-soft underline font-semibold"
              >
                View our services
              </Link>{" "}
              to choose the right package for your needs.
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
                <Link href="/contact">Have Questions?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

