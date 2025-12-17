import ProductCard from "./ProductCard";
import pillowImage from "@assets/generated_images/premium_pillow_product_shot.png";
import mattressImage from "@assets/generated_images/luxury_mattress_product_shot.png";
import blanketImage from "@assets/generated_images/weighted_blanket_product_shot.png";

// todo: remove mock functionality - replace with real product data from API
const products = [
  {
    title: "Premium Pillows",
    description: "Canadian-made down and memory foam pillows designed for perfect neck support and lasting comfort through every season.",
    image: pillowImage,
  },
  {
    title: "Luxury Mattresses",
    description: "Hand-crafted mattresses featuring premium materials and personalized firmness levels for your ideal sleep experience.",
    image: mattressImage,
  },
  {
    title: "Weighted Blankets",
    description: "Thoughtfully designed weighted blankets that provide gentle pressure for deeper, more restorative sleep.",
    image: blanketImage,
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-20 sm:py-28 bg-background"
      data-testid="section-products"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4"
          data-testid="text-products-title"
        >
          Our Sleep Products
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Carefully curated sleep essentials, each selected for exceptional quality and comfort.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
