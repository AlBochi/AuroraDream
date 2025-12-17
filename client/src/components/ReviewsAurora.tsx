import { Card } from "@/components/ui/card";

// todo: remove mock functionality - replace with real reviews from API
const reviews = [
  {
    quote: "The personalized fitting made all the difference. After years of poor sleep, I finally found the perfect pillow.",
    name: "Sarah M.",
    rating: 5,
  },
  {
    quote: "Such a refreshing experience. No pressure, just genuine expertise and beautiful Canadian-made products.",
    name: "Michael T.",
    rating: 5,
  },
  {
    quote: "The weighted blanket has transformed my sleep routine completely. Exceptional quality.",
    name: "Jennifer L.",
    rating: 5,
  },
];

export default function ReviewsAurora() {
  return (
    <section
      id="reviews"
      className="relative py-32"
      data-testid="section-reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-light text-[#F3E8D0] mb-4 tracking-wide"
            data-testid="text-reviews-title"
          >
            Trusted by Ottawa Sleepers
          </h2>
          <p className="text-[#F3E8D0]/60 max-w-xl mx-auto">
            Hear from clients who discovered the difference of personalized sleep solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card
              key={review.name}
              className="p-8 border-0 bg-[#0A3A57]/50 backdrop-blur-sm"
              data-testid={`card-review-${review.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < review.rating ? "text-[#FFEBB5]" : "text-[#F3E8D0]/20"
                    }`}
                    style={i < review.rating ? { textShadow: "0 0 10px rgba(255, 235, 181, 0.6)" } : {}}
                  >
                    ★
                  </span>
                ))}
              </div>
              
              <blockquote className="text-[#F3E8D0]/80 leading-relaxed mb-6 italic">
                "{review.quote}"
              </blockquote>
              
              <p className="text-sm font-medium text-[#F3E8D0]/50">
                — {review.name}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
