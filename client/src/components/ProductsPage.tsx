import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import SandBackground from "./SandBackground";

// Mattress images - direct paths from public folder
const dianaImage = "/images/DianaFinal1.webp";
const carlisleImage = "/images/CarlisleFinal1.webp";
const gemmaImage = "/images/GemmaFinal1.webp";
const essexImage = "/images/EssexFinal1.webp";
const indigoImage = "/images/IndigoFinal1.webp";
const jasmineImage = "/images/JasminFinal1.webp";
const laylaImage = "/images/LaylaFinal1.webp";
const monacoImage = "/images/MonacoFinal1.webp";
const nightingaleImage = "/images/NightingaleFinal1.webp";
const opulenceImage = "/images/OpulenceFinal1.webp";
const palatialImage = "/images/PalatialFinal1.webp";

// Pillow images
import coolIcePillowImage from "@assets/CoolIcePillow_1765828175418.jpg";
import charcoalPillowImage from "@assets/ActiveCharcoalPillow_1765828175419.jpg";
import bambooPillowImage from "@assets/BambooOrganicPillow_1765828175418.jpg";
import hotelPillowImage from "@assets/HotelComfortPillows_1765828175417.jpg";

// Protector images
import terryProtectorImage from "@assets/TerryMattressProtector_1765828175413.jpg";
import coolIceProtectorImage from "@assets/PremiumMattressProtector_1765828175414.jpg";
import encasementImage from "@assets/MattressEncasementSupreme_1765828175416.jpg";

// Helper function to create URL-friendly IDs
const createId = (name) => name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

const mattresses = [
  {
    name: "CARLISLE",
    subtitle: "Medium Firm Foam Mattress · 10\" Profile",
    description: "Carlisle Medium Firm Foam is built for sleepers who want responsive comfort with dependable support. Its eco-friendly, soy-based Bio-Foam resists body impressions and delivers quick response for immediate relaxation without excessive sink. A lofty, multi-needle quilt with super-soft Bio-Foam and smooth silk fabric enhances surface comfort while maintaining a balanced, medium-firm feel. CertiPUR-US® certified foams ensure durability, low emissions, and long-lasting performance.",
    image: carlisleImage,
    prices: [
      { size: "TWIN", price: 259 },
      { size: "TWIN XL", price: 344 },
      { size: "FULL/DOUBLE", price: 344 },
      { size: "QUEEN", price: 402 },
      { size: "KING", price: 574 }
    ]
  },
  {
    name: "DIANA",
    subtitle: "Firm Hybrid Mattress · 8\" Profile",
    description: "Diana is engineered for sleepers who want uncompromising firmness with dependable comfort. Built with a reinforced perimeter and a continuous coil system, it delivers strong, edge-to-edge support that eliminates the roll-off feeling and maintains structural integrity night after night. An added layer of super-soft Bio-Foam enhances comfort without softening the feel, providing subtle pressure relief while preserving a truly firm sleep surface.",
    image: dianaImage,
    prices: [
      { size: "TWIN", price: 334 },
      { size: "TWIN XL", price: 460 },
      { size: "FULL/DOUBLE", price: 460 },
      { size: "QUEEN", price: 518 },
      { size: "KING", price: 744 }
    ]
  },
  {
    name: "GEMMA",
    subtitle: "Medium Firm Hybrid Mattress · 8.5\" Profile",
    description: "Gemma offers the perfect balance between support and comfort. Full perimeter coil construction ensures stability, creating a polished, breathable, medium-firm sleep surface.",
    image: gemmaImage,
    prices: [
      { size: "TWIN", price: 510 },
      { size: "TWIN XL", price: 700 },
      { size: "FULL/DOUBLE", price: 700 },
      { size: "QUEEN", price: 765 },
      { size: "KING", price: 1050 }
    ]
  },
  {
    name: "ESSEX",
    subtitle: "Euro Top All-Foam Mattress · 8.5\" Profile · Medium Plush",
    description: "Essex is an all-foam design crafted for contouring comfort. A high-density soy foam base resists impressions, while convoluted foam enhances airflow and pressure relief. The plush Euro Top, infused with cooling gel Bio-Foam, adds a touch of luxury and softness.",
    image: essexImage,
    prices: [
      { size: "TWIN", price: 638 },
      { size: "TWIN XL", price: 829 },
      { size: "FULL/DOUBLE", price: 829 },
      { size: "QUEEN", price: 894 },
      { size: "KING", price: 1170 }
    ]
  },
  {
    name: "INDIGO",
    subtitle: "Firm Hybrid Mattress · 11\" Profile",
    description: "Indigo delivers targeted, intelligent support through multi-zone contour pocket coils and reinforced edge stability. A silky-soft Tencel® cover enhances breathability, while gel-infused quilting and high-density CertiPUR® foams provide long-lasting comfort and pressure relief.",
    image: indigoImage,
    prices: [
      { size: "TWIN", price: 765 },
      { size: "TWIN XL", price: 956 },
      { size: "FULL/DOUBLE", price: 956 },
      { size: "QUEEN", price: 1084 },
      { size: "KING", price: 1405 }
    ]
  },
  {
    name: "JASMINE",
    subtitle: "Euro Top Plush Hybrid Mattress · 13\" Profile",
    description: "Jasmine is designed for sleepers who love plush comfort without losing support. Its Euro Top design, multi-zone pocket coils, cooling gel foams, and moisture-regulating Tencel® fabric create a deeply comfortable, refreshing sleep environment.",
    image: jasmineImage,
    prices: [
      { size: "TWIN", price: 956 },
      { size: "TWIN XL", price: 1148 },
      { size: "FULL/DOUBLE", price: 1148 },
      { size: "QUEEN", price: 1275 },
      { size: "KING", price: 1658 }
    ]
  },
  {
    name: "LAYLA",
    subtitle: "Pillow Top Ultra Plush Hybrid Mattress · 14\" Profile",
    description: "Layla delivers a cloud-like sleep experience with a luxurious pillow top and layered comfort foams. Cooling gel materials relieve pressure while multi-zone pocket coils maintain proper alignment and support throughout the night.",
    image: laylaImage,
    prices: [
      { size: "TWIN", price: 1148 },
      { size: "TWIN XL", price: 1338 },
      { size: "FULL/DOUBLE", price: 1338 },
      { size: "QUEEN", price: 1509 },
      { size: "KING", price: 1849 }
    ]
  },
  {
    name: "MONACO",
    subtitle: "Euro Top Plush Hybrid Mattress · 14\" Profile",
    description: "Monaco elevates comfort with Granite TruCOOL™ fabric that feels cool to the touch and helps regulate temperature. Foam-encased pocket coils provide stability and edge support, while layered cooling foams create a plush yet supportive sleep.",
    image: monacoImage,
    prices: [
      { size: "TWIN", price: 1254 },
      { size: "TWIN XL", price: 1517 },
      { size: "FULL/DOUBLE", price: 1517 },
      { size: "QUEEN", price: 1647 },
      { size: "KING", price: 2108 }
    ]
  },
  {
    name: "NIGHTINGALE",
    subtitle: "Pillow Top Ultra Plush Hybrid Mattress · 14\" Profile",
    description: "Nightingale combines ultra-plush comfort with advanced cooling performance. Memory foam infused with EssentialGel™, breathable fabrics, and responsive pocket coils work together to reduce pressure, motion transfer, and heat buildup.",
    image: nightingaleImage,
    prices: [
      { size: "TWIN", price: 1403 },
      { size: "TWIN XL", price: 1658 },
      { size: "FULL/DOUBLE", price: 1658 },
      { size: "QUEEN", price: 1779 },
      { size: "KING", price: 2240 }
    ]
  },
  {
    name: "OPULENCE",
    subtitle: "Euro Top Ultra Plush Hybrid Mattress · 15\" Profile",
    description: "Opulence lives up to its name with a lavish blend of cooling fabrics, Serene® foam for enhanced pressure relief, and multi-zone pocket coils. Designed to minimize motion transfer while maintaining support, it delivers a refined, indulgent sleep experience.",
    image: opulenceImage,
    prices: [
      { size: "TWIN", price: 1445 },
      { size: "TWIN XL", price: 1781 },
      { size: "FULL/DOUBLE", price: 1781 },
      { size: "QUEEN", price: 1911 },
      { size: "KING", price: 2435 }
    ]
  },
  {
    name: "PALATIAL",
    subtitle: "Luxury Euro Top Ultra Plush Hybrid Mattress · 17\" Profile",
    description: "Palatial represents the pinnacle of Aurora Dream luxury. A signature dual-coil system combines the strength of continuous coils with the precision of contour pocket coils. Finished with CopperCOOL™ fabric and premium cooling foams, it offers unmatched comfort, support, and temperature control.",
    image: palatialImage,
    prices: [
      { size: "TWIN", price: 1913 },
      { size: "TWIN XL", price: 2308 },
      { size: "FULL/DOUBLE", price: 2308 },
      { size: "QUEEN", price: 2438 },
      { size: "KING", price: 3162 }
    ]
  },
];

const pillows = [
  {
    name: "COOL ICE PILLOW",
    subtitle: "Cooling Memory Foam Pillow · Queen",
    description: "Engineered for hot sleepers, the Cool Ice Pillow features a Tencel® Cool Ice cover that actively draws heat away. Adjustable shredded gel memory foam contours to your head and neck, allowing personalized comfort in any sleep position.",
    image: coolIcePillowImage,
  },
  {
    name: "ACTIVE CHARCOAL PILLOW",
    subtitle: "Cooling & Odor-Control Pillow · Queen",
    description: "Infused with charcoal, this pillow neutralizes odors while regulating temperature. Shredded gel memory foam adapts to every sleep style, while breathable Tencel® fabric keeps your pillow feeling fresh and supportive night after night.",
    image: charcoalPillowImage,
  },
  {
    name: "ORGANIC BAMBOO PILLOW",
    subtitle: "Eco-Friendly Comfort Pillow · Queen",
    description: "Made with a 100% organic bamboo cover and fill, this pillow delivers naturally cool, breathable, and hypoallergenic comfort. Its adjustable design lets you customize firmness while supporting sustainable, eco-conscious living.",
    image: bambooPillowImage,
  },
  {
    name: "HOTEL COMFORT TENCEL PILLOW",
    subtitle: "Luxury Cooling Pillow · Queen",
    description: "Inspired by five-star hotels, this pillow pairs a smooth Tencel® cover with plush poly fibers for an inviting, breathable feel. Moisture-wicking and hypoallergenic properties ensure cool, comfortable sleep every night.",
    image: hotelPillowImage,
  },
];

const mattressProtection = [
  {
    name: "COTTON TERRY WATERPROOF MATTRESS PROTECTOR",
    subtitle: "Breathable Protection",
    description: "Soft cotton terry fabric provides plush comfort while a breathable waterproof barrier protects against spills, allergens, and everyday wear. Quiet, secure, and designed to fit deep mattresses without shifting.",
    image: terryProtectorImage,
  },
  {
    name: "COOL ICE MATTRESS PROTECTOR",
    subtitle: "Advanced Cooling Protection",
    description: "Advanced cooling fabric actively pulls heat away from the body, keeping sleepers cool and dry. Five-sided waterproof protection, NO-MITE™ certification, and a non-slip fit ensure clean, uninterrupted sleep.",
    image: coolIceProtectorImage,
  },
  {
    name: "BED BUG MATTRESS ENCASEMENT",
    subtitle: "Complete 6-Sided Protection",
    description: "This full encasement offers six-sided, bite-proof protection against bed bugs, dust mites, allergens, and spills. Breathable, silent, and securely sealed with a zipper and Velcro lock for total peace of mind.",
    image: encasementImage,
  },
];

// Price display component
const PriceDisplay = ({ prices }) => {
  if (!prices || prices.length === 0) return null;
  
  // Find the Queen price to show as the main price
  const queenPrice = prices.find(p => p.size === "QUEEN");
  const mainPrice = queenPrice || prices[0];
  
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-semibold text-[#009A9F]">
          From ${mainPrice.price}
        </span>
        <span className="text-sm text-gray-600">{mainPrice.size}</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {prices.slice(0, 3).map((priceItem, index) => (
          <div key={index} className="text-center p-2 bg-[#009A9F]/10 rounded">
            <div className="text-xs text-gray-600">{priceItem.size}</div>
            <div className="font-semibold text-[#009A9F]">${priceItem.price}</div>
          </div>
        ))}
      </div>
      {prices.length > 3 && (
        <div className="mt-2 text-center">
          <span className="text-xs text-gray-500">
            +{prices.length - 3} more sizes
          </span>
        </div>
      )}
    </div>
  );
};

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen">
      {/* ADDED: Sand background with northern lights */}
      <SandBackground />
      
      <div className="relative z-10 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1
              className="text-4xl sm:text-5xl font-light text-[#009A9F] mb-4 tracking-wide"
              data-testid="text-products-page-title"
            >
              Our Products
            </h1>
            <p className="text-[#009A9F]/80 max-w-xl mx-auto">
              Premium Canadian-made sleep products designed for lasting comfort and exceptional quality.
            </p>
          </div>

          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-light text-[#009A9F] mb-8 tracking-wide border-b border-[#009A9F]/30 pb-4">
              Mattresses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mattresses.map((mattress) => (
                <Link key={mattress.name} href={`/product-details/${createId(mattress.name)}`}>
                  <Card
                    className="group overflow-visible border-0 bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 cursor-pointer shadow-lg"
                    data-testid={`card-mattress-${mattress.name.toLowerCase()}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-t-md bg-[#c5dff0]">
                      <img
                        src={mattress.image}
                        alt={mattress.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#009A9F] mb-1">
                        {mattress.name}
                      </h3>
                      <p className="text-[#3A7BF7] text-sm mb-3">
                        {mattress.subtitle}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed line-clamp-3 mb-4">
                        {mattress.description}
                      </p>
                      {/* ADDED: Price display */}
                      <PriceDisplay prices={mattress.prices} />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-light text-[#009A9F] mb-8 tracking-wide border-b border-[#009A9F]/30 pb-4">
              Pillows
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillows.map((pillow) => (
                <Link key={pillow.name} href={`/product-details/${createId(pillow.name)}`}>
                  <Card
                    className="group overflow-visible border-0 bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 cursor-pointer shadow-lg"
                    data-testid={`card-pillow-${pillow.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-t-md bg-[#e8eef3]">
                      <img
                        src={pillow.image}
                        alt={pillow.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#009A9F] mb-1">
                        {pillow.name}
                      </h3>
                      <p className="text-[#3A7BF7] text-sm mb-3">
                        {pillow.subtitle}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                        {pillow.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-[#009A9F] mb-8 tracking-wide border-b border-[#009A9F]/30 pb-4">
              Mattress Protection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mattressProtection.map((product) => (
                <Link key={product.name} href={`/product-details/${createId(product.name)}`}>
                  <Card
                    className="group overflow-visible border-0 bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 cursor-pointer shadow-lg"
                    data-testid={`card-protection-${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-t-md bg-[#e8eef3]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#009A9F] mb-1">
                        {product.name}
                      </h3>
                      <p className="text-[#3A7BF7] text-sm mb-3">
                        {product.subtitle}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}