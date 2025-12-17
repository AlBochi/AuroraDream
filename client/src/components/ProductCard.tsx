import { Card } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProductCard({ title, description, image }: ProductCardProps) {
  return (
    <Card
      className="group overflow-visible border-0 bg-card hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer"
      data-testid={`card-product-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="aspect-[4/3] overflow-hidden rounded-t-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-testid={`img-product-${title.toLowerCase().replace(/\s+/g, "-")}`}
        />
      </div>
      <div className="p-6">
        <h3
          className="text-lg font-semibold text-card-foreground mb-2"
          data-testid={`text-product-title-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {title}
        </h3>
        <p
          className="text-muted-foreground text-sm leading-relaxed line-clamp-2"
          data-testid={`text-product-description-${title.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {description}
        </p>
      </div>
    </Card>
  );
}
