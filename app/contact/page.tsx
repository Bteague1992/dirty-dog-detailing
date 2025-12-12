import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageSquare, ExternalLink } from "lucide-react";
import { serviceAreas } from "@/data/service-area";
import { companyInfo } from "@/data/company-info";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    content: companyInfo.phone.display,
    link: `tel:${companyInfo.phone.tel}`,
    description: "Call or text us",
  },
  {
    icon: Mail,
    title: "Email",
    content: companyInfo.email,
    link: `mailto:${companyInfo.email}`,
    description: "Send us a message",
  },
  {
    icon: MessageSquare,
    title: "Book Online",
    content: "Schedule your appointment",
    link: companyInfo.bookingUrl,
    description: "Quick and easy booking",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-dirtydog-black">
      {/* Hero Section */}
      <section className="bg-dirtydog-gray border-b border-dirtydog-silver/20 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-5xl mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-dirtydog-silver sm:text-xl">
              Ready for a Dirty Dog Clean™? Have questions about our services?
              We're here to help. Book online, give us a call, or send us an
              email.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="bg-dirtydog-gray border-dirtydog-silver/20 hover:border-dirtydog-green/50 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon
                        className="h-6 w-6 text-dirtydog-green"
                        aria-hidden="true"
                      />
                      <CardTitle className="text-xl text-dirtydog-offwhite">
                        {method.title}
                      </CardTitle>
                    </div>
                    <p className="text-sm text-dirtydog-silver">
                      {method.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    {method.external ? (
                      <Button asChild variant="outline" className="w-full">
                        <a
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          {method.content}
                          <ExternalLink
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </a>
                      </Button>
                    ) : (
                      <a
                        href={method.link}
                        className="text-lg font-semibold text-dirtydog-green hover:text-dirtydog-green-soft transition-colors block"
                      >
                        {method.content}
                      </a>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Service Area */}
          <Card className="bg-dirtydog-gray border-dirtydog-silver/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <MapPin
                  className="h-6 w-6 text-dirtydog-green"
                  aria-hidden="true"
                />
                <CardTitle className="text-xl text-dirtydog-offwhite">
                  Service Area
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-dirtydog-silver mb-4">
                We provide mobile auto detailing services to the following
                areas:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {serviceAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 text-sm text-dirtydog-offwhite"
                  >
                    <MapPin
                      className="h-4 w-4 text-dirtydog-green flex-shrink-0"
                      aria-hidden="true"
                    />
                    {area}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-dirtydog-silver mt-4">
                <strong>Mobile-only service:</strong> We come to your driveway
                or workplace, as long as there's space to work. No need to drive
                anywhere — we bring everything to you.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ / Common Questions */}
      <section className="py-16 sm:py-24 bg-dirtydog-gray border-y border-dirtydog-silver/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-dirtydog-offwhite mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-6">
              <Card className="bg-dirtydog-black border-dirtydog-silver/20">
                <CardHeader>
                  <CardTitle className="text-lg text-dirtydog-offwhite">
                    How do I book an appointment?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-dirtydog-silver">
                    The easiest way is to{" "}
                    <a
                      href={companyInfo.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dirtydog-green hover:text-dirtydog-green-soft underline font-semibold"
                    >
                      book online
                    </a>
                    . You can also call or email us to schedule. We require a
                    deposit to secure your appointment.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dirtydog-black border-dirtydog-silver/20">
                <CardHeader>
                  <CardTitle className="text-lg text-dirtydog-offwhite">
                    What if I'm not sure which service I need?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-dirtydog-silver">
                    No problem!{" "}
                    <Link
                      href="/services"
                      className="text-dirtydog-green hover:text-dirtydog-green-soft underline font-semibold"
                    >
                      Check out our services page
                    </Link>{" "}
                    for detailed information, or give us a call. We can help you
                    choose the right service based on your vehicle's condition
                    and your needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dirtydog-black border-dirtydog-silver/20">
                <CardHeader>
                  <CardTitle className="text-lg text-dirtydog-offwhite">
                    How does the dirty level system work?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-dirtydog-silver">
                    Our{" "}
                    <Link
                      href="/dirty-levels"
                      className="text-dirtydog-green hover:text-dirtydog-green-soft underline font-semibold"
                    >
                      dirty level system
                    </Link>{" "}
                    helps us set fair pricing based on your vehicle's condition.
                    Level 1 has no surcharge, Level 2 adds $50, and Level 3
                    (DIRTY DOG) adds $125. We'll assess your vehicle during
                    booking or upon arrival.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-dirtydog-black border-dirtydog-silver/20">
                <CardHeader>
                  <CardTitle className="text-lg text-dirtydog-offwhite">
                    Do you come to my location?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-dirtydog-silver">
                    Yes! We're a mobile-only service. We come to your home,
                    office, or any location within our service area. Just make
                    sure there's space for us to work and access to water and
                    power if needed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-extrabold text-dirtydog-offwhite">
              Ready to Book?
            </h2>
            <p className="text-base text-dirtydog-silver">
              Book online now to secure your spot. We'll confirm your
              appointment and answer any questions you have.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a
                  href={companyInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Book Now
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
