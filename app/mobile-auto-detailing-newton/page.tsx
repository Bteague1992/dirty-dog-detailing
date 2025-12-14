import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceCard } from "@/components/service-card";
import Link from "next/link";
import { Check, Phone, Mail, ExternalLink, Clock, Shield, Sparkles } from "lucide-react";
import { companyInfo, primaryServiceArea } from "@/data/company-info";
import { services } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Auto Detailing Newton NC | Dirty Dog Detailing",
  description:
    "Professional mobile auto detailing in Newton, NC. Interior, exterior, and full detail services with transparent pricing. Starting at $75. Book your appointment today.",
  openGraph: {
    title: "Mobile Auto Detailing Newton NC | Dirty Dog Detailing",
    description:
      "Professional mobile auto detailing in Newton, NC. Clear pricing, no surprise upcharges. Interior, exterior, and full detail services.",
  },
  alternates: {
    canonical: "https://dirtydogmobiledetailing.com/mobile-auto-detailing-newton",
  },
};

const trustPoints = [
  "Upfront pricing",
  "$45 deposit to reserve",
  "Mobile convenience",
  "No surprise surcharges",
];

const regularServices = services.filter((s) => !s.requiresPhoneCall);
const popularService = services.find((s) => s.isPopular);
const startingPrice = Math.min(
  ...regularServices.flatMap((s) => s.oneOffPricing.map((p) => p.price))
);

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you come to my home/work in Newton?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We're a mobile-only service. We come to your home, office, or any location in Newton, NC and nearby areas. Just make sure there's space for us to work and access to water and power if needed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need water/power?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, at this time we require access to a standard outdoor water spigot and a standard electrical outlet to perform services. We will notify customers once we transition to a fully self-contained setup.",
      },
    },
    {
      "@type": "Question",
      name: "What does the $45 deposit cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The $45 deposit secures your appointment and is applied toward your final service total. It ensures we reserve your time slot and helps us plan our schedule.",
      },
    },
    {
      "@type": "Question",
      name: "What if my vehicle is heavily neglected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vehicles with excessive dirt, pet hair, stains, or buildup may require our Restoration Interior service, which requires a phone call for a custom quote. We will always communicate pricing before starting work.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a detail take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Service time depends on the package selected and the condition of the vehicle. Exterior details take 1–2.5 hours, interior details take 1.5–4 hours, and full details take 2.5–5.5 hours depending on vehicle size.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer subscriptions/maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer subscription discounts: 15% off with monthly service and 10% off with bi-monthly service. Perfect for keeping your vehicle in top condition.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in a full detail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full detail includes everything in both our Exterior Detail and Interior Detail services. This includes hand wash, wheels, bug removal, spray sealant, full vacuum, wipe-down of interior surfaces, cupholders, door panels, interior windows, and air refresh.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer shampoo/extraction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Extraction/shampoo is not included in our standard full detail unless added. For heavily soiled interiors, our Restoration Interior service includes targeted extraction as needed. Contact us to discuss your specific needs.",
      },
    },
  ],
};

export default function MobileAutoDetailingNewtonPage() {
  const featuredServices = regularServices.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-dirtydog-black">
        {/* Hero Section */}
        <section className="bg-dirtydog-gray border-b border-dirtydog-silver/20 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-5xl mb-6">
                Mobile Auto Detailing in {primaryServiceArea}
              </h1>
              <p className="text-lg text-dirtydog-silver sm:text-xl mb-8">
                Interior, exterior, and full detailing — clear pricing, no
                surprise upcharges.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">Request Appointment</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link href="/services">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Block */}
        <section className="py-12 sm:py-16 bg-dirtydog-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {trustPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-dirtydog-gray rounded-lg p-4 border border-dirtydog-silver/20"
                  >
                    <Check
                      className="h-5 w-5 text-dirtydog-green shrink-0"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-medium text-dirtydog-offwhite">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-dirtydog-silver mt-6">
                Serving {primaryServiceArea} with professional mobile auto detailing services.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-4xl mb-4">
                Our Services
              </h2>
              <p className="text-lg text-dirtydog-silver max-w-2xl mx-auto">
                Professional detailing services with transparent pricing. Starting at
                ${startingPrice}.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/services" className="flex items-center justify-center">
                  View All Services & Pricing
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-24 bg-dirtydog-gray border-y border-dirtydog-silver/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-4xl mb-8 text-center">
                How It Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dirtydog-green text-dirtydog-black font-extrabold flex items-center justify-center text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dirtydog-offwhite mb-2">
                      Choose Your Service
                    </h3>
                    <p className="text-base text-dirtydog-silver">
                      Select from Exterior Detail, Interior Detail, or Full
                      Detail. Check our{" "}
                      <Link
                        href="/services"
                        className="text-dirtydog-green hover:text-dirtydog-green-soft underline font-semibold"
                      >
                        services page
                      </Link>{" "}
                      for detailed pricing by vehicle size.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dirtydog-green text-dirtydog-black font-extrabold flex items-center justify-center text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dirtydog-offwhite mb-2">
                      Request Appointment
                    </h3>
                    <p className="text-base text-dirtydog-silver">
                      Book online, call, or email us. We'll confirm your
                      preferred day and time window. A $45 deposit secures your
                      spot.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dirtydog-green text-dirtydog-black font-extrabold flex items-center justify-center text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dirtydog-offwhite mb-2">
                      We Detail On-Site
                    </h3>
                    <p className="text-base text-dirtydog-silver">
                      We come to your location in {primaryServiceArea} with all equipment.
                      You don't need to be present — just ensure we have access
                      to water and power.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-4xl mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <Card className="bg-dirtydog-gray border-dirtydog-silver/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-dirtydog-offwhite">
                      Do you come to my home/work in Newton?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-dirtydog-silver">
                      Yes! We're a mobile-only service. We come to your home,
                      office, or any location in {primaryServiceArea} and nearby areas. Just make
                      sure there's space for us to work and access to water and
                      power if needed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-dirtydog-gray border-dirtydog-silver/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-dirtydog-offwhite">
                      Do you need water/power?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-dirtydog-silver">
                      Yes, at this time we require access to a standard outdoor
                      water spigot and a standard electrical outlet to perform
                      services. We will notify customers once we transition to a
                      fully self-contained setup.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-dirtydog-gray border-dirtydog-silver/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-dirtydog-offwhite">
                      What does the $45 deposit cover?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-dirtydog-silver">
                      The $45 deposit secures your appointment and is applied
                      toward your final service total. It ensures we reserve
                      your time slot and helps us plan our schedule.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-dirtydog-gray border-dirtydog-silver/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-dirtydog-offwhite">
                      What if my vehicle is heavily neglected?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-dirtydog-silver">
                      Vehicles with excessive dirt, pet hair, stains, or buildup
                      may require our Restoration Interior service, which requires
                      a phone call for a custom quote. We will always communicate
                      pricing before starting work.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-dirtydog-gray border-dirtydog-silver/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-dirtydog-offwhite">
                      How long does a detail take?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-dirtydog-silver">
                      Service time depends on the package selected and the
                      condition of the vehicle. Exterior details take 1–2.5 hours,
                      interior details take 1.5–4 hours, and full details take
                      2.5–5.5 hours depending on vehicle size.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-dirtydog-gray border-dirtydog-silver/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-dirtydog-offwhite">
                      Do you offer subscriptions/maintenance?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-dirtydog-silver">
                      Yes! We offer subscription discounts: 15% off with monthly
                      service and 10% off with bi-monthly service. Perfect for
                      keeping your vehicle in top condition.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-dirtydog-gray border-dirtydog-silver/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-dirtydog-offwhite">
                      What's included in a full detail?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-dirtydog-silver">
                      A full detail includes everything in both our Exterior
                      Detail and Interior Detail services. This includes hand
                      wash, wheels, bug removal, spray sealant, full vacuum,
                      wipe-down of interior surfaces, cupholders, door panels,
                      interior windows, and air refresh.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-dirtydog-gray border-dirtydog-silver/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-dirtydog-offwhite">
                      Do you offer shampoo/extraction?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-dirtydog-silver">
                      Extraction/shampoo is not included in our standard full
                      detail unless added. For heavily soiled interiors, our
                      Restoration Interior service includes targeted extraction as
                      needed. Contact us to discuss your specific needs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-12 sm:py-16 bg-dirtydog-gray border-y border-dirtydog-silver/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-extrabold text-dirtydog-offwhite mb-4">
                Service Area
              </h2>
              <p className="text-base text-dirtydog-silver">
                We primarily serve {primaryServiceArea}. If you're just outside Newton, contact us
                and we'll confirm availability.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-extrabold text-dirtydog-offwhite">
                Ready to Book Your Appointment?
              </h2>
              <p className="text-lg text-dirtydog-silver">
                Get started with mobile auto detailing in {primaryServiceArea}. Clear pricing, no
                surprises.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">Request Appointment</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <a
                    href={`tel:${companyInfo.phone.tel}`}
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {companyInfo.phone.display}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center justify-center gap-2"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

