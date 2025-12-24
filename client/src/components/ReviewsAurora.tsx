import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "The personalized fitting made all the difference. After years of poor sleep, I finally found the perfect pillow.",
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "Such a refreshing experience. No pressure, just genuine expertise and beautiful Canadian-made products.",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "The weighted blanket has transformed my sleep routine completely. Exceptional quality.",
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
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#0A3A57]/30 backdrop-blur-sm rounded-2xl p-8 border border-[#3A7BF7]/20 hover:border-[#3A7BF7]/40 transition-colors"
              data-testid={`review-card-${index}`}
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < review.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-[#F3E8D0]/30"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#F3E8D0]/80 text-center mb-8 italic leading-relaxed">
                "{review.text}"
              </p>

              {/* Reviewer Name */}
              <div className="text-center">
                <p className="text-[#F3E8D0] font-medium">— {review.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Star Rating Display */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-[#0A3A57]/30 backdrop-blur-sm rounded-full px-6 py-3 border border-[#3A7BF7]/20">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-[#F3E8D0] font-medium">5.0</span>
            <span className="text-[#F3E8D0]/60 text-sm">(Based on customer reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
}