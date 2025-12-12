import { services } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Car } from "lucide-react";
import Link from "next/link";
import { companyInfo } from "@/data/company-info";

const vehicleSizeLabels: Record<string, string> = {
  sedan: "Sedan",
  smallSUV: "Small SUV",
  largeSUVTruck: "Large SUV / Truck",
  xl: "XL / 3rd Row / Work Trucks",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-dirtydog-black">
      {/* Hero Section */}
      <section className="bg-dirtydog-gray border-b border-dirtydog-silver/20 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-5xl mb-6">
              Services & Pricing
            </h1>
            <p className="text-lg text-dirtydog-silver sm:text-xl">
              Clear services. Straightforward pricing. No nonsense. Choose the
              service that fits your needs, or combine services for a complete
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service) => (
              <Card key={service.id} className="bg-dirtydog-gray border-dirtydog-silver/20">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl sm:text-3xl text-dirtydog-offwhite">
                          {service.name}
                        </CardTitle>
                        {service.isPopular && (
                          <Badge className="bg-dirtydog-green text-dirtydog-black">
                            Most Popular
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-base sm:text-lg text-dirtydog-silver">
                        {service.shortDescription}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Long Description */}
                  <div>
                    <p className="text-base text-dirtydog-offwhite leading-relaxed">
                      {service.longDescription}
                    </p>
                  </div>

                  {/* Pricing Table */}
                  <div>
                    <h3 className="text-xl font-semibold text-dirtydog-offwhite mb-4 flex items-center gap-2">
                      <Car className="h-5 w-5 text-dirtydog-green" aria-hidden="true" />
                      Pricing by Vehicle Size
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-dirtydog-silver/20">
                            <th className="text-left py-3 px-4 text-sm font-semibold text-dirtydog-offwhite">
                              Vehicle Size
                            </th>
                            <th className="text-right py-3 px-4 text-sm font-semibold text-dirtydog-offwhite">
                              Price
                            </th>
                            <th className="text-right py-3 px-4 text-sm font-semibold text-dirtydog-offwhite">
                              Time Estimate
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {service.pricing.map((pricing, index) => (
                            <tr
                              key={pricing.vehicleSize}
                              className={`border-b border-dirtydog-silver/10 ${
                                index % 2 === 0 ? "bg-dirtydog-black/30" : ""
                              }`}
                            >
                              <td className="py-3 px-4 text-sm text-dirtydog-offwhite">
                                {vehicleSizeLabels[pricing.vehicleSize]}
                              </td>
                              <td className="py-3 px-4 text-right">
                                <span className="text-lg font-extrabold text-dirtydog-green">
                                  ${pricing.price}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-right text-sm text-dirtydog-silver flex items-center justify-end gap-1">
                                <Clock className="h-4 w-4" aria-hidden="true" />
                                {pricing.timeEstimate}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div>
                    <h3 className="text-xl font-semibold text-dirtydog-offwhite mb-4">
                      What's Included
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.inclusions.map((inclusion, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm text-dirtydog-silver"
                        >
                          <Check
                            className="h-5 w-5 text-dirtydog-green mt-0.5 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span>{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For */}
                  <div>
                    <h3 className="text-xl font-semibold text-dirtydog-offwhite mb-3">
                      Ideal For
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.idealFor.map((item, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-sm"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-dirtydog-silver/20">
                    <Button
                      asChild
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      <Link
                        target="_blank"
                        href={companyInfo.bookingUrl}
                      >
                        Book {service.name}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 sm:py-24 bg-dirtydog-gray border-y border-dirtydog-silver/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-extrabold text-dirtydog-offwhite text-center">
              Questions About Services?
            </h2>
            <p className="text-base text-dirtydog-silver text-center">
              Not sure which service is right for you? Have questions about
              pricing or what's included? We're here to help.{" "}
              <Link
                href="/#dirty-levels"
                className="text-dirtydog-green hover:text-dirtydog-green-soft underline font-semibold"
              >
                Check out our Dirty Levels
              </Link>{" "}
              to understand how vehicle condition affects pricing, or{" "}
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-dirtydog-green hover:text-dirtydog-green-soft underline font-semibold"
              >
                contact us
              </a>{" "}
              with any questions.
            </p>
            <div className="flex justify-center pt-4">
              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <Link href="/#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

