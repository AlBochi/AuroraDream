import { Card } from "@/components/ui/card";
import { Link } from "wouter";
// Use LaylaFinal1 from public folder for the mattress image
const laylaImage = "/images/LaylaFinal1.webp";
import premiumProtectorImage from "@assets/PremiumMattressProtector_1765828175414.jpg";
import coolIcePillowImage from "@assets/CoolIcePillow_1765828175418.jpg";

const products = [
  {
    title: "Premium Mattresses",
    description: "10 luxurious mattress options from firm support to ultra-plush comfort, all Canadian-made.",
    image: laylaImage, // Updated to use LaylaFinal1
  },
  {
    title: "Sleep Pillows",
    description: "Cooling memory foam and organic bamboo pillows designed for every sleep position.",
    image: coolIcePillowImage,
  },
  {
    title: "Mattress Protection",
    description: "Waterproof protectors and bed bug encasements to extend your mattress life.",
    image: premiumProtectorImage,
  },
];

export default function ProductsAurora() {
  return (
    <section
      id="products"
      className="relative py-32"
      data-testid="section-products"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-light text-[#F3E8D0] mb-4 tracking-wide"
            data-testid="text-products-title"
          >
            Our Sleep Products
          </h2>
          <p className="text-[#F3E8D0]/60 max-w-xl mx-auto">
            Carefully curated sleep essentials, each selected for exceptional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.title}
              className="group overflow-visible border-0 bg-[#0A3A57]/60 backdrop-blur-sm hover:bg-[#0A3A57]/80 transition-all duration-300 cursor-pointer"
              data-testid={`card-product-${product.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-t-md bg-[#c5dff0]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-[#F3E8D0] mb-2">
                  {product.title}
                </h3>
                <p className="text-[#F3E8D0]/60 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <button className="bg-[#3A7BF7] hover:bg-[#3A7BF7]/90 text-[#F3E8D0] px-8 py-4 text-base font-medium rounded-md shadow-lg shadow-[#3A7BF7]/30 transition-all duration-300 border border-[#3A7BF7]/50">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}