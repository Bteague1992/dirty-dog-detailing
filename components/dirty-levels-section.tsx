import { dirtyLevels } from "@/data/dirty-levels";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DirtyLevelsSection() {
  return (
    <section id="dirty-levels" className="py-16 sm:py-24 bg-dirtydog-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-4xl mb-4">
            How Dirty Is Your Dog?
          </h2>
          <p className="text-lg text-dirtydog-silver max-w-2xl mx-auto">
            Our three-level system helps set expectations and keeps pricing
            fair. We'll assess your vehicle and apply the appropriate level
            during booking.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {dirtyLevels.map((level) => (
            <Card key={level.id} className="relative">
              {level.level === 3 && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-dirtydog-green text-dirtydog-black text-xs font-extrabold px-3 py-1 rounded-full">
                    EXTREME
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">
                  Dirty Level {level.level} – {level.name}
                </CardTitle>
                <CardDescription className="text-base text-dirtydog-silver">
                  {level.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold text-dirtydog-green">
                      Surcharge: {level.surcharge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-dirtydog-offwhite mb-2">
                      Examples:
                    </h4>
                    <ul className="space-y-1">
                      {level.examples.map((example, index) => (
                        <li
                          key={index}
                          className="text-sm text-dirtydog-silver flex items-start gap-2"
                        >
                          <span className="text-dirtydog-green">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-sm text-dirtydog-silver">
            Photos may be required for Level 3 vehicles to ensure proper
            preparation and accurate pricing.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link
              href="/dirty-levels"
              className="flex items-center justify-center"
            >
              Learn More About Dirty Levels
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
