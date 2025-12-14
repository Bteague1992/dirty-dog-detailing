import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Service } from "@/data/services";
import { Check, Phone, Info, Clock } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

const vehicleSizeLabels: Record<string, string> = {
  small: "Small",
  medium: "Medium",
  large: "Large",
  xl: "XL",
};

const vehicleSizeFullLabels: Record<string, string> = {
  small: "Coupe/Sedan",
  medium: "Small SUV/Crossover",
  large: "3-Row SUV/Truck/Van",
  xl: "Sprinter/Oversized/Large Vans",
};

// Helper function to get starting price
function getStartingPrice(service: Service): number | null {
  if (service.oneOffPricing.length === 0) return null;
  return Math.min(...service.oneOffPricing.map((p) => p.price));
}

// Helper function to format time estimate consistently
function formatTimeEstimate(timeEstimate: string): string {
  // Normalize dashes to en-dash
  return timeEstimate.replace(/-/g, "–");
}

export function ServiceCard({ service }: ServiceCardProps) {
  const startingPrice = getStartingPrice(service);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <CardTitle className="text-xl">{service.name}</CardTitle>
              {service.isPopular && (
                <Badge className="bg-dirtydog-green text-dirtydog-black text-xs">
                  Most Popular
                </Badge>
              )}
              {service.requiresPhoneCall && (
                <Badge
                  variant="outline"
                  className="text-xs border-dirtydog-green/50 text-dirtydog-green"
                >
                  <Phone className="h-3 w-3 mr-1" aria-hidden="true" />
                  Quote Only
                </Badge>
              )}
            </div>
            <CardDescription className="text-base">
              {service.shortDescription}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-4">
          {/* Starting At Price */}
          {startingPrice !== null && !service.requiresPhoneCall && (
            <div className="text-center py-2 bg-dirtydog-black/30 rounded-lg border border-dirtydog-green/20">
              <p className="text-xs text-dirtydog-silver mb-1">Starting at</p>
              <p className="text-2xl font-extrabold text-dirtydog-green">
                ${startingPrice}
              </p>
            </div>
          )}

          {/* Quote Only Message */}
          {service.requiresPhoneCall && (
            <div className="bg-dirtydog-black/50 rounded-lg p-3 border border-dirtydog-green/30 text-center">
              <p className="text-sm text-dirtydog-silver">
                Call or text for a custom quote
              </p>
            </div>
          )}

          {/* One-Time Pricing Table */}
          {service.oneOffPricing.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-dirtydog-offwhite mb-2">
                One-Time Pricing
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-dirtydog-silver/20">
                      <th className="text-left py-2 px-2 text-xs font-semibold text-dirtydog-offwhite">
                        Size
                      </th>
                      <th className="text-right py-2 px-2 text-xs font-semibold text-dirtydog-offwhite">
                        Price
                      </th>
                      <th className="text-right py-2 px-2 text-xs font-semibold text-dirtydog-offwhite">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.oneOffPricing.map((pricing, index) => (
                      <tr
                        key={pricing.vehicleSize}
                        className={`border-b border-dirtydog-silver/10 ${
                          index % 2 === 0 ? "bg-dirtydog-black/20" : ""
                        }`}
                      >
                        <td className="py-2 px-2 text-xs text-dirtydog-silver">
                          {vehicleSizeLabels[pricing.vehicleSize]}
                        </td>
                        <td className="py-2 px-2 text-right">
                          <span className="text-base font-extrabold text-dirtydog-green">
                            ${pricing.price}
                          </span>
                        </td>
                        <td className="py-2 px-2 text-right">
                          <div className="flex items-center justify-end gap-1 text-xs text-dirtydog-silver/70">
                            <Clock
                              className="h-3 w-3 shrink-0"
                              aria-hidden="true"
                            />
                            <span className="whitespace-nowrap">
                              {formatTimeEstimate(pricing.timeEstimate)}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Subscription Pricing Accordion */}
          {service.subscriptionPricing && (
            <div>
              <p className="text-xs text-dirtydog-silver mb-2 text-center">
                Save with subscription:{" "}
                <span className="font-semibold text-dirtydog-green">
                  15% monthly
                </span>{" "}
                /{" "}
                <span className="font-semibold text-dirtydog-green">
                  10% bi-monthly
                </span>
              </p>
              <Accordion type="single" defaultValue={undefined}>
                <AccordionItem value="subscription">
                  <AccordionTrigger>Show subscription pricing</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {/* Monthly */}
                      <div>
                        <p className="text-xs font-semibold text-dirtydog-offwhite mb-2">
                          Monthly (save 15%)
                        </p>
                        <div className="space-y-1">
                          {service.subscriptionPricing.monthly.map(
                            (pricing) => (
                              <div
                                key={pricing.vehicleSize}
                                className="flex items-center justify-between text-xs bg-dirtydog-gray/30 rounded px-2 py-1.5"
                              >
                                <span className="text-dirtydog-silver">
                                  {vehicleSizeLabels[pricing.vehicleSize]}
                                </span>
                                <span className="text-sm font-bold text-dirtydog-green">
                                  ${pricing.price}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      {/* Bi-monthly */}
                      <div>
                        <p className="text-xs font-semibold text-dirtydog-offwhite mb-2">
                          Bi-monthly (save 10%)
                        </p>
                        <div className="space-y-1">
                          {service.subscriptionPricing.bimonthly.map(
                            (pricing) => (
                              <div
                                key={pricing.vehicleSize}
                                className="flex items-center justify-between text-xs bg-dirtydog-gray/30 rounded px-2 py-1.5"
                              >
                                <span className="text-dirtydog-silver">
                                  {vehicleSizeLabels[pricing.vehicleSize]}
                                </span>
                                <span className="text-sm font-bold text-dirtydog-green">
                                  ${pricing.price}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}

          {/* Scope Notes */}
          {service.scopeNotes && service.scopeNotes.length > 0 && (
            <div className="bg-dirtydog-black/50 rounded-lg p-3 border border-dirtydog-silver/10">
              <div className="flex items-start gap-2 mb-2">
                <Info
                  className="h-4 w-4 text-dirtydog-green mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <h4 className="text-xs font-semibold text-dirtydog-offwhite">
                  Scope & Policies:
                </h4>
              </div>
              <ul className="space-y-1">
                {service.scopeNotes.map((note, index) => (
                  <li
                    key={index}
                    className="text-xs text-dirtydog-silver flex items-start gap-2"
                  >
                    <span className="text-dirtydog-green mt-0.5">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Inclusions */}
          <div>
            <h4 className="text-sm font-semibold text-dirtydog-offwhite mb-2">
              Includes:
            </h4>
            <ul className="space-y-1.5">
              {service.inclusions.map((inclusion, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-dirtydog-silver"
                >
                  <Check
                    className="h-4 w-4 text-dirtydog-green mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{inclusion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For */}
          {service.idealFor && service.idealFor.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-dirtydog-offwhite mb-2">
                Ideal for:
              </h4>
              <p className="text-sm text-dirtydog-silver">
                {service.idealFor.join(", ")}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
