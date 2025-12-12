import { reviews } from "@/data/reviews";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-dirtydog-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-dirtydog-offwhite sm:text-4xl mb-4">
            What Neighbors Say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id}>
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
                <p className="text-dirtydog-offwhite mb-4 italic">
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
  );
}

