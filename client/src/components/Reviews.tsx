import ReviewCard from "./ReviewCard";

// todo: remove mock functionality - replace with real reviews from API
const reviews = [
  {
    quote: "The personalized fitting made all the difference. After years of poor sleep, I finally found the perfect pillow. The team at Aurora Dream truly understands sleep comfort.",
    name: "Sarah M.",
    rating: 5,
  },
  {
    quote: "Such a refreshing experience compared to big box stores. No pressure, just genuine expertise and beautiful Canadian-made products. My new mattress is incredible.",
    name: "Michael T.",
    rating: 5,
  },
  {
    quote: "The attention to detail and quality of products exceeded my expectations. The weighted blanket has transformed my sleep routine completely.",
    name: "Jennifer L.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 bg-background"
      data-testid="section-reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4"
          data-testid="text-reviews-title"
        >
          Trusted by Ottawa Sleepers
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Hear from our clients who have discovered the difference of personalized sleep solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard
              key={review.name}
              quote={review.quote}
              name={review.name}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
