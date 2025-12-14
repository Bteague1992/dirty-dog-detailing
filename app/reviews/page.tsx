import { reviews } from "@/data/reviews";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { companyInfo } from "@/data/company-info";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | Dirty Dog Detailing",
  description:
    "Read what our customers in Newton, NC and nearby areas have to say about our mobile auto detailing services. Real reviews from real customers.",
  openGraph: {
    title: "Customer Reviews | Dirty Dog Detailing",
    description:
      "Read what our customers say about our mobile auto detailing services.",
  },
};

export default function ReviewsPage() {
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <main className="min-h-screen bg-dirtydog-black">
      {/* Hero Section */}
      <section className="bg-dirtydog-gray border-b border-dirtydog-silver/20 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-5xl mb-6">
              Customer Reviews
            </h1>
            <p className="text-lg text-dirtydog-silver sm:text-xl mb-4">
              See what our customers have to say about their Dirty Dog Clean™
              experience.
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < Math.round(averageRating)
                        ? "fill-dirtydog-green text-dirtydog-green"
                        : "text-dirtydog-silver/30"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-xl font-bold text-dirtydog-offwhite">
                {averageRating.toFixed(1)}
              </span>
              <span className="text-sm text-dirtydog-silver">
                ({reviews.length} reviews)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="bg-dirtydog-gray border-dirtydog-silver/20"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-dirtydog-green text-dirtydog-green"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-dirtydog-offwhite mb-4 italic leading-relaxed">
                    "{review.quote}"
                  </p>
                  <div className="border-t border-dirtydog-silver/20 pt-4">
                    <p className="font-semibold text-dirtydog-offwhite">
                      {review.name}
                    </p>
                    <p className="text-sm text-dirtydog-silver">
                      {review.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-dirtydog-gray border-y border-dirtydog-silver/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-extrabold text-dirtydog-offwhite">
              Ready to Experience the Dirty Dog Clean™?
            </h2>
            <p className="text-base text-dirtydog-silver">
              Join our satisfied customers and book your appointment today.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link
                  target="_blank"
                  href={companyInfo.bookingUrl}
                >
                  Book Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

