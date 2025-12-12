import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Service } from "@/data/services";
import { Check } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const minPrice = Math.min(...service.pricing.map((p) => p.price));
  const maxPrice = Math.max(...service.pricing.map((p) => p.price));

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
            {service.isPopular && (
              <Badge className="bg-dirtydog-green text-dirtydog-black mb-2">
                Most Popular
              </Badge>
            )}
          </div>
        </div>
        <CardDescription className="text-base">
          {service.shortDescription}
        </CardDescription>
        <div className="pt-2">
          <p className="text-2xl font-extrabold text-dirtydog-green">
            ${minPrice}
            {minPrice !== maxPrice && `–$${maxPrice}`}
          </p>
          <p className="text-sm text-dirtydog-silver mt-1">
            {service.pricing[0].timeEstimate.split("-")[0]} -{" "}
            {
              service.pricing[service.pricing.length - 1].timeEstimate.split(
                "-"
              )[1]
            }
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-dirtydog-offwhite mb-2">
              Includes:
            </h4>
            <ul className="space-y-1.5">
              {service.inclusions.slice(0, 5).map((inclusion, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-dirtydog-silver"
                >
                  <Check
                    className="h-4 w-4 text-dirtydog-green mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{inclusion}</span>
                </li>
              ))}
              {service.inclusions.length > 5 && (
                <li className="text-sm text-dirtydog-silver/70 italic">
                  +{service.inclusions.length - 5} more
                </li>
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-dirtydog-offwhite mb-2">
              Ideal for:
            </h4>
            <p className="text-sm text-dirtydog-silver">
              {service.idealFor.join(", ")}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
