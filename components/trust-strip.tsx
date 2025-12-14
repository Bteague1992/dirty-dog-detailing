import { MapPin, ShieldCheck, Sparkles, Heart } from "lucide-react";
import { primaryServiceArea } from "@/data/company-info";

const trustPoints = [
  {
    icon: MapPin,
    text: `Mobile service in ${primaryServiceArea}`,
  },
  {
    icon: ShieldCheck,
    text: "Transparent pricing. No surprises.",
  },
  {
    icon: Sparkles,
    text: "Aggressive on dirt, gentle on your paint.",
  },
  {
    icon: Heart,
    text: "Locally owned and operated.",
  },
];

export function TrustStrip() {
  return (
    <section className="bg-dirtydog-gray border-y border-dirtydog-silver/20 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 text-center sm:text-left"
              >
                <Icon
                  className="h-6 w-6 text-dirtydog-green shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium text-dirtydog-offwhite">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
