import { Button } from "@/components/ui/button";
import { Gift, Sparkles } from "lucide-react";
import { companyInfo, primaryServiceArea } from "@/data/company-info";
import Link from "next/link";
import Image from "next/image";

export default function GiftCardsPage() {
  const giftCardUrl = "https://app.squareup.com/gift/ML4YMDEAE5EB4/order";

  const giftCardSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Dirty Dog Detailing Gift Card",
    description:
      "Give the gift of a clean car! Gift cards for professional mobile auto detailing services.",
    brand: {
      "@type": "Brand",
      name: companyInfo.name,
    },
    offers: {
      "@type": "Offer",
      url: giftCardUrl,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "AutomotiveBusiness",
        name: companyInfo.name,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(giftCardSchema) }}
      />
      <main className="min-h-screen bg-dirtydog-black">
        {/* Hero Section */}
        <section className="bg-dirtydog-gray border-b border-dirtydog-silver/20 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Gift className="h-16 w-16 text-dirtydog-green" />
                  <Sparkles className="h-6 w-6 text-dirtydog-green-soft absolute -top-1 -right-1" />
                </div>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-4xl mb-4">
                Gift Cards
              </h1>
              <p className="text-base text-dirtydog-silver sm:text-lg">
                Give the gift of a clean car! Perfect for birthdays, holidays,
                or any occasion.
              </p>
            </div>
          </div>
        </section>

        <Image
          src="/images/business-card.png"
          alt="Dirty Dog Detailing Gift Card Example"
          width={500}
          height={500}
          className="w-[300px] h-auto mx-auto border border-dirtydog-silver/20 rounded-lg mt-12"
        />

        {/* Main Content */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Benefits */}
              <div className="bg-dirtydog-gray border border-dirtydog-silver/20 rounded-lg p-6 sm:p-8">
                <h2 className="text-2xl font-extrabold text-dirtydog-offwhite mb-4">
                  Why Choose Dirty Dog Detailing Gift Cards?
                </h2>
                <ul className="space-y-3 text-dirtydog-silver">
                  <li className="flex items-start">
                    <span className="text-dirtydog-green mr-2">✓</span>
                    <span>
                      Perfect for any car owner who appreciates a clean vehicle
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dirtydog-green mr-2">✓</span>
                    <span>
                      Never expires - use it whenever you're ready for a detail
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dirtydog-green mr-2">✓</span>
                    <span>
                      Works for all our services - exterior, interior, or full
                      detail
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dirtydog-green mr-2">✓</span>
                    <span>
                      Mobile service - we come to you in {primaryServiceArea}
                    </span>
                  </li>
                </ul>
              </div>

              {/* How It Works */}
              <div className="bg-dirtydog-gray border border-dirtydog-silver/20 rounded-lg p-6 sm:p-8">
                <h2 className="text-2xl font-extrabold text-dirtydog-offwhite mb-4">
                  How It Works
                </h2>
                <ol className="space-y-4 text-dirtydog-silver">
                  <li className="flex items-start">
                    <span className="font-bold text-dirtydog-green mr-3">
                      1.
                    </span>
                    <span>
                      Purchase a gift card online using the button below
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-dirtydog-green mr-3">
                      2.
                    </span>
                    <span>
                      Receive your gift card via email (or print it out)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-dirtydog-green mr-3">
                      3.
                    </span>
                    <span>
                      Book an appointment and present your gift card at the time
                      of service
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-dirtydog-green mr-3">
                      4.
                    </span>
                    <span>
                      Enjoy a professional Dirty Dog Clean™ detail service!
                    </span>
                  </li>
                </ol>
              </div>

              {/* CTA Button */}
              <div className="text-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8 py-6"
                >
                  <a
                    href={giftCardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <Gift className="h-5 w-5 mr-2" aria-hidden="true" />
                    Purchase Gift Card
                  </a>
                </Button>
                <p className="text-sm text-dirtydog-silver mt-4">
                  You'll be redirected to our secure Square payment page
                </p>
              </div>

              {/* Additional Info */}
              <div className="text-center pt-4">
                <p className="text-sm text-dirtydog-silver">
                  Questions about gift cards?{" "}
                  <Link
                    href="/contact"
                    className="text-dirtydog-green hover:text-dirtydog-green-soft underline font-semibold"
                  >
                    Contact us
                  </Link>{" "}
                  and we'll be happy to help.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
