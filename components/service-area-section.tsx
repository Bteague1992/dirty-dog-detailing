import { serviceAreas } from "@/data/service-area";
import { MapPin } from "lucide-react";

export function ServiceAreaSection() {
  return (
    <section className="py-16 sm:py-24 bg-dirtydog-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-4xl mb-4">
            Where We Roam
          </h2>
          <p className="text-lg text-dirtydog-silver max-w-2xl mx-auto mb-8">
            Mobile-only — we come to your driveway or workplace, as long as
            there's space to work.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-3 text-dirtydog-offwhite"
              >
                <MapPin
                  className="h-5 w-5 text-dirtydog-green flex-shrink-0"
                  aria-hidden="true"
                />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

