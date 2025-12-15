"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Truck,
  Shield,
  Clock,
  FileText,
  MapPin,
  Sparkles,
} from "lucide-react";
import { companyInfo, primaryServiceArea } from "@/data/company-info";
import { serviceAreas } from "@/data/service-area";
import Link from "next/link";

const fleetVehicles = [
  {
    name: "Police Cars & Patrol Vehicles",
    description: "Sheriff, municipal, and law enforcement vehicles",
  },
  {
    name: "Delivery Vans",
    description: "Amazon, FedEx, UPS, and courier service vehicles",
  },
  {
    name: "Work Trucks & Service Vehicles",
    description: "HVAC, plumbing, electrical, and contractor trucks",
  },
  {
    name: "Utility & Public Works Vehicles",
    description: "Municipal maintenance and utility company fleets",
  },
  {
    name: "Company Cars",
    description: "Corporate fleet vehicles and business sedans",
  },
  {
    name: "Service Fleets",
    description: "Maintenance vehicles, work vans, and service trucks",
  },
];

const maintenanceIncludes = {
  exterior: [
    "Road film and bug removal",
    "Wheel and tire cleaning",
    "Exterior wash and dry",
    "Basic exterior protection",
  ],
  interior: [
    "Vacuum floors, seats, and cargo areas",
    "Wipe-down of surfaces and dash",
    "Trash removal and organization",
    "Basic interior maintenance",
  ],
  sanitation: [
    "Steering wheel sanitization",
    "Gear shifter and console cleaning",
    "Door handles and high-touch areas",
    "Control surfaces disinfection",
  ],
  glass: [
    "Interior and exterior windows",
    "Mirrors and visibility surfaces",
    "Windshield clarity maintenance",
  ],
  addons: [
    "Pet hair removal",
    "Heavy soil treatment",
    "Odor treatment",
    "Shampoo and extraction",
  ],
};

const howItWorks = [
  {
    step: 1,
    title: "Request Fleet Quote",
    description:
      "Use our booking link to request a fleet maintenance quote. We'll gather basic information about your fleet size, vehicle types, and service needs.",
  },
  {
    step: 2,
    title: "Confirm Scope & Schedule",
    description:
      "We'll work with you to confirm the scope of service, vehicle count, preferred frequency, and access requirements. We schedule around your operations to minimize downtime.",
  },
  {
    step: 3,
    title: "On-Site Service",
    description:
      "Our mobile team arrives at your location on schedule. We offer early morning and after-hours service to work around your fleet's operational hours.",
  },
  {
    step: 4,
    title: "Documentation & Invoice",
    description:
      "After each service, you'll receive completion notes and documentation. Invoices are provided for your records and fleet management tracking.",
  },
];

const serviceFrequencies = [
  {
    name: "Weekly",
    description: "Regular maintenance for high-use fleets",
  },
  {
    name: "Biweekly",
    description: "Balanced schedule for moderate-use vehicles",
  },
  {
    name: "Monthly",
    description: "Standard maintenance interval for most fleets",
  },
  {
    name: "Quarterly Deep Refresh",
    description: "Periodic deep cleaning in addition to regular maintenance",
  },
];

const fleetFAQs = [
  {
    question: "Do you clean police cars and patrol vehicles?",
    answer:
      "Yes, we service police cars, sheriff vehicles, and municipal patrol vehicles. We understand the importance of maintaining professional appearance and can work around shift schedules. All services are documented for fleet management records.",
  },
  {
    question: "Can you service delivery vans and work vehicles?",
    answer:
      "Absolutely. We regularly service delivery vans (Amazon, FedEx, UPS-style), work trucks, service vehicles, and utility trucks. Our mobile service comes to your location, so vehicles don't need to leave your facility.",
  },
  {
    question: "Do you offer early morning or after-hours service?",
    answer:
      "Yes, we schedule fleet maintenance around your operations. We can provide early morning service before your fleet goes out, or after-hours service when vehicles return. This minimizes downtime and disruption to your operations.",
  },
  {
    question: "Do you need access to water and power?",
    answer:
      "Yes, we require access to a water source and electrical outlet at your location. Our mobile setup is self-contained, but we need these utilities to provide thorough cleaning and sanitation services. We can discuss your facility's setup during the quote process.",
  },
  {
    question: "Do you provide invoices and documentation?",
    answer:
      "Yes, we provide detailed invoices and completion documentation after each service. This helps with fleet management tracking, maintenance records, and accounting. Documentation can be customized to meet your reporting needs.",
  },
  {
    question: "What's the minimum fleet size?",
    answer:
      "We work with fleets of all sizes. While pricing becomes more efficient with larger fleets, we can accommodate smaller fleets starting with just a few vehicles. Contact us to discuss your specific needs and we'll provide a customized quote.",
  },
  {
    question: "Can we start with a pilot program?",
    answer:
      "Yes, we offer pilot programs for new fleet clients. This allows you to evaluate our service quality, reliability, and fit with your operations before committing to a full fleet contract. We can start with a subset of vehicles and expand from there.",
  },
  {
    question: "Can you handle multiple locations?",
    answer:
      "Yes, we can service fleets at multiple locations. We'll coordinate schedules and routes to efficiently serve all your facilities. Multi-location service can be included in your fleet maintenance plan.",
  },
  {
    question: "How do you handle heavily soiled vehicles?",
    answer:
      "We're experienced with work vehicles that see heavy use and soil. Our maintenance cleaning handles normal wear, and we offer add-on services for heavy soil treatment, pet hair removal, odor treatment, and deep shampoo/extraction when needed. These can be scheduled as needed or included in your regular plan.",
  },
  {
    question: "Are you insured?",
    answer:
      "We can provide proof of insurance upon request. Our insurance coverage protects both your vehicles and our operations during service. This information is available when you request a quote.",
  },
  {
    question: "How do we add or remove vehicles from the plan?",
    answer:
      "Fleet plans are flexible. You can add or remove vehicles as your fleet changes. Simply contact us with the changes, and we'll update your schedule and pricing accordingly. We understand that fleet composition can change over time.",
  },
  {
    question: "What's the typical turnaround time per vehicle?",
    answer:
      "Turnaround time depends on the service level and vehicle condition. A standard maintenance wash typically takes 30-45 minutes per vehicle. Full interior and exterior maintenance may take 60-90 minutes. We'll provide time estimates based on your specific service needs during the quote process.",
  },
];

export default function FleetMaintenancePage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-dirtydog-black">
      {/* Hero Section */}
      <section className="bg-dirtydog-gray border-b border-dirtydog-silver/20 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Truck
                  className="h-16 w-16 text-dirtydog-green"
                  aria-hidden="true"
                />
                <Sparkles
                  className="h-6 w-6 text-dirtydog-green-soft absolute -top-1 -right-1"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-4xl lg:text-5xl">
              Fleet Maintenance Vehicle Cleaning
            </h1>
            <p className="text-lg text-dirtydog-silver sm:text-xl max-w-3xl mx-auto">
              Recurring fleet cleaning & sanitation for police cars, work
              trucks, delivery vans, and company vehicles—reliable, documented,
              and scheduled around your operations.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto min-h-[44px]"
              >
                <a
                  href={companyInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Request a fleet maintenance quote"
                >
                  Request Fleet Quote
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-h-[44px]"
              >
                <a
                  href={companyInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a fleet assessment"
                >
                  Book a Fleet Assessment
                </a>
              </Button>
            </div>
            <p className="text-sm text-dirtydog-silver pt-2">
              Mobile fleet service in {primaryServiceArea} and nearby areas
            </p>
          </div>
        </div>
      </section>

      {/* Common Fleet Vehicles Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-3xl mb-4">
                Common Fleet Vehicles We Service
              </h2>
              <p className="text-base text-dirtydog-silver max-w-2xl mx-auto">
                We maintain a wide variety of fleet vehicles, from police cars
                to delivery vans to work trucks.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {fleetVehicles.map((vehicle, index) => (
                <Card
                  key={index}
                  className="bg-dirtydog-gray border-dirtydog-silver/20"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-dirtydog-offwhite">
                      {vehicle.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-dirtydog-silver">
                      {vehicle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Fleet Maintenance Includes */}
      <section className="py-12 sm:py-16 bg-dirtydog-gray border-y border-dirtydog-silver/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-3xl mb-4">
                What Fleet Maintenance Includes
              </h2>
              <p className="text-base text-dirtydog-silver max-w-2xl mx-auto">
                Comprehensive cleaning and sanitation services designed for
                fleet vehicles.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-dirtydog-black/50 rounded-lg p-6 border border-dirtydog-silver/10">
                <h3 className="text-lg font-semibold text-dirtydog-offwhite mb-4">
                  Exterior Maintenance
                </h3>
                <ul className="space-y-2">
                  {maintenanceIncludes.exterior.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-dirtydog-silver"
                    >
                      <Check
                        className="h-4 w-4 text-dirtydog-green mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-dirtydog-black/50 rounded-lg p-6 border border-dirtydog-silver/10">
                <h3 className="text-lg font-semibold text-dirtydog-offwhite mb-4">
                  Interior Maintenance
                </h3>
                <ul className="space-y-2">
                  {maintenanceIncludes.interior.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-dirtydog-silver"
                    >
                      <Check
                        className="h-4 w-4 text-dirtydog-green mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-dirtydog-black/50 rounded-lg p-6 border border-dirtydog-silver/10">
                <h3 className="text-lg font-semibold text-dirtydog-offwhite mb-4">
                  High-Touch Sanitation
                </h3>
                <ul className="space-y-2">
                  {maintenanceIncludes.sanitation.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-dirtydog-silver"
                    >
                      <Check
                        className="h-4 w-4 text-dirtydog-green mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-dirtydog-black/50 rounded-lg p-6 border border-dirtydog-silver/10">
                <h3 className="text-lg font-semibold text-dirtydog-offwhite mb-4">
                  Glass & Visibility
                </h3>
                <ul className="space-y-2">
                  {maintenanceIncludes.glass.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-dirtydog-silver"
                    >
                      <Check
                        className="h-4 w-4 text-dirtydog-green mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-dirtydog-black/50 rounded-lg p-6 border border-dirtydog-silver/10 sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-semibold text-dirtydog-offwhite mb-4">
                  Optional Add-Ons
                </h3>
                <ul className="space-y-2">
                  {maintenanceIncludes.addons.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-dirtydog-silver"
                    >
                      <Check
                        className="h-4 w-4 text-dirtydog-green mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-3xl mb-4">
                How It Works
              </h2>
              <p className="text-base text-dirtydog-silver max-w-2xl mx-auto">
                Simple, streamlined process from quote to ongoing service.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {howItWorks.map((step, index) => (
                <Card
                  key={index}
                  className="bg-dirtydog-gray border-dirtydog-silver/20"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dirtydog-green text-dirtydog-black font-extrabold text-lg">
                        {step.step}
                      </div>
                      <CardTitle className="text-xl text-dirtydog-offwhite">
                        {step.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-dirtydog-silver leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Frequencies */}
      <section className="py-12 sm:py-16 bg-dirtydog-gray border-y border-dirtydog-silver/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-3xl mb-4">
                Service Frequencies
              </h2>
              <p className="text-base text-dirtydog-silver max-w-2xl mx-auto">
                Choose the frequency that works best for your fleet operations.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              {serviceFrequencies.map((frequency, index) => (
                <Card
                  key={index}
                  className="bg-dirtydog-black/50 border-dirtydog-silver/20 text-center"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-dirtydog-offwhite">
                      {frequency.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-dirtydog-silver">
                      {frequency.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-dirtydog-black/50 rounded-lg p-6 border border-dirtydog-green/20 text-center">
              <p className="text-base text-dirtydog-silver">
                <strong className="text-dirtydog-offwhite">
                  Fleet pricing depends on vehicle count, frequency, condition,
                  and access.
                </strong>{" "}
                Contact us for a customized quote based on your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-4">
              <MapPin
                className="h-12 w-12 text-dirtydog-green"
                aria-hidden="true"
              />
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-3xl">
              Service Area
            </h2>
            <p className="text-lg text-dirtydog-silver">
              We provide fleet maintenance services in{" "}
              <strong className="text-dirtydog-offwhite">
                {primaryServiceArea}
              </strong>{" "}
              and nearby surrounding areas.
            </p>
            <div className="flex flex-col items-center gap-4 pt-4">
              <Link
                href="/mobile-auto-detailing-newton"
                className="text-dirtydog-green hover:text-dirtydog-green-soft underline font-semibold text-base"
              >
                Learn more about our service area →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet FAQs */}
      <section className="py-12 sm:py-16 bg-dirtydog-gray border-y border-dirtydog-silver/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-3xl mb-4">
                Fleet Maintenance FAQs
              </h2>
              <p className="text-base text-dirtydog-silver max-w-2xl mx-auto">
                Common questions about our fleet maintenance services.
              </p>
            </div>
            <div className="space-y-4">
              {fleetFAQs.map((faq, index) => {
                const isOpen = openFAQIndex === index;
                return (
                  <Card
                    key={index}
                    className="bg-dirtydog-black/50 border-dirtydog-silver/20 hover:border-dirtydog-green/50 transition-colors"
                  >
                    <CardHeader onClick={() => toggleFAQ(index)}>
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-lg text-dirtydog-offwhite pr-4">
                          {faq.question}
                        </CardTitle>
                        <button
                          type="button"
                          className="flex-shrink-0 text-dirtydog-green hover:text-dirtydog-green-soft transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dirtydog-green focus-visible:ring-offset-2 rounded"
                          aria-expanded={isOpen}
                          aria-label={`${
                            isOpen ? "Collapse" : "Expand"
                          } answer for: ${faq.question}`}
                        >
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <ChevronDown
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                        </button>
                      </div>
                    </CardHeader>
                    {isOpen && (
                      <CardContent>
                        <p className="text-base text-dirtydog-silver leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-dirtydog-black border-y border-dirtydog-silver/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-4xl">
              Ready to Maintain Your Fleet?
            </h2>
            <p className="text-lg text-dirtydog-silver max-w-2xl mx-auto">
              Keep your fleet vehicles clean, professional, and well-maintained
              with our reliable mobile service. We work around your schedule to
              minimize downtime and provide the documentation you need for fleet
              management.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto min-h-[44px]"
              >
                <a
                  href={companyInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Request a fleet maintenance quote"
                >
                  Request Fleet Quote
                </a>
              </Button>
            </div>
            <p className="text-sm text-dirtydog-silver">
              Questions?{" "}
              <Link
                href="/contact"
                className="text-dirtydog-green hover:text-dirtydog-green-soft underline font-semibold"
              >
                Contact us
              </Link>{" "}
              or call{" "}
              <a
                href={`tel:${companyInfo.phone.tel}`}
                className="text-dirtydog-green hover:text-dirtydog-green-soft underline font-semibold"
              >
                {companyInfo.phone.display}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
