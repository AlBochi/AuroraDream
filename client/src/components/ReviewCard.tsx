import { Card } from "@/components/ui/card";

interface ReviewCardProps {
  quote: string;
  name: string;
  rating: number;
}

export default function ReviewCard({ quote, name, rating }: ReviewCardProps) {
  return (
    <Card
      className="p-6 border-0 bg-card"
      data-testid={`card-review-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div
        className="flex gap-0.5 mb-4"
        data-testid={`rating-${name.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? "text-[#FFEBB5]" : "text-muted-foreground/30"
            }`}
            style={i < rating ? { textShadow: "0 0 8px rgba(255, 235, 181, 0.5)" } : {}}
          >
            ★
          </span>
        ))}
      </div>
      
      <blockquote
        className="text-card-foreground leading-relaxed mb-4 italic"
        data-testid={`text-review-quote-${name.toLowerCase().replace(/\s+/g, "-")}`}
      >
        "{quote}"
      </blockquote>
      
      <p
        className="text-sm font-medium text-muted-foreground"
        data-testid={`text-review-name-${name.toLowerCase().replace(/\s+/g, "-")}`}
      >
        — {name}
      </p>
    </Card>
  );
}
