import { Card } from "@/components/ui/card";
import { Link } from "wouter";

import dianaImage from "@assets/Diana4_1765828175418.png";
import fionaImage from "@assets/Gemma5_1765828175417.png";
import essexImage from "@assets/Essex6_1765828175418.png";
import indigoImage from "@assets/Indigo7_1765828175417.png";
import jasmineImage from "@assets/Jasmin8_1765828175416.png";
import laylaImage from "@assets/Layla9_1765828175416.png";
import monacoImage from "@assets/Monaco10_1765828175416.png";
import nightingaleImage from "@assets/Nightgale11_1765828175415.png";
import opulenceImage from "@assets/Opulence12_1765828175415.png";
import palatialImage from "@assets/Palatial13_1765828175414.png";

import coolIcePillowImage from "@assets/CoolIcePillow_1765828175418.jpg";
import charcoalPillowImage from "@assets/ActiveCharcoalPillow_1765828175419.jpg";
import bambooPillowImage from "@assets/BambooOrganicPillow_1765828175418.jpg";
import hotelPillowImage from "@assets/HotelComfortPillows_1765828175417.jpg";

import terryProtectorImage from "@assets/TerryMattressProtector_1765828175413.jpg";
import coolIceProtectorImage from "@assets/PremiumMattressProtector_1765828175414.jpg";
import encasementImage from "@assets/MattressEncasementSupreme_1765828175416.jpg";

// Helper function to create URL-friendly IDs
const createId = (name) => name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

const mattresses = [
  {
    name: "DIANA",
    subtitle: "Firm Hybrid Mattress · 8\" Profile",
    description: "Diana is engineered for sleepers who want uncompromising firmness with dependable comfort. Built with a reinforced perimeter and a continuous coil system, it delivers strong, edge-to-edge support that eliminates the roll-off feeling and maintains structural integrity night after night. An added layer of super-soft Bio-Foam enhances comfort without softening the feel, providing subtle pressure relief while preserving a truly firm sleep surface.",
    image: dianaImage,
  },
  {
    name: "FIONA",
    subtitle: "Medium Firm Hybrid Mattress · 8.5\" Profile",
    description: "Fiona offers the perfect balance between support and comfort. Full perimeter coil construction ensures stability, while cooling gel-infused Bio-Foam and a premium grey swirl knit cover create a polished, breathable, medium-firm sleep surface.",
    image: fionaImage,
  },
  {
    name: "ESSEX",
    subtitle: "Euro Top All-Foam Mattress · 8.5\" Profile · Medium Plush",
    description: "Essex is an all-foam design crafted for contouring comfort. A high-density soy foam base resists impressions, while convoluted foam enhances airflow and pressure relief. The plush Euro Top, infused with cooling gel Bio-Foam, adds a touch of luxury and softness.",
    image: essexImage,
  },
  {
    name: "INDIGO",
    subtitle: "Firm Hybrid Mattress · 11\" Profile",
    description: "Indigo delivers targeted, intelligent support through multi-zone contour pocket coils and reinforced edge stability. A silky-soft Tencel® cover enhances breathability, while gel-infused quilting and high-density CertiPUR® foams provide long-lasting comfort and pressure relief.",
    image: indigoImage,
  },
  {
    name: "JASMINE",
    subtitle: "Euro Top Plush Hybrid Mattress · 13\" Profile",
    description: "Jasmine is designed for sleepers who love plush comfort without losing support. Its Euro Top design, multi-zone pocket coils, cooling gel foams, and moisture-regulating Tencel® fabric create a deeply comfortable, refreshing sleep environment.",
    image: jasmineImage,
  },
  {
    name: "LAYLA",
    subtitle: "Pillow Top Ultra Plush Hybrid Mattress · 14\" Profile",
    description: "Layla delivers a cloud-like sleep experience with a luxurious pillow top and layered comfort foams. Cooling gel materials relieve pressure while multi-zone pocket coils maintain proper alignment and support throughout the night.",
    image: laylaImage,
  },
  {
    name: "MONACO",
    subtitle: "Euro Top Plush Hybrid Mattress · 14\" Profile",
    description: "Monaco elevates comfort with Granite TruCOOL™ fabric that feels cool to the touch and helps regulate temperature. Foam-encased pocket coils provide stability and edge support, while layered cooling foams create a plush yet supportive sleep.",
    image: monacoImage,
  },
  {
    name: "NIGHTINGALE",
    subtitle: "Pillow Top Ultra Plush Hybrid Mattress · 14\" Profile",
    description: "Nightingale combines ultra-plush comfort with advanced cooling performance. Memory foam infused with EssentialGel™, breathable fabrics, and responsive pocket coils work together to reduce pressure, motion transfer, and heat buildup.",
    image: nightingaleImage,
  },
  {
    name: "OPULENCE",
    subtitle: "Euro Top Ultra Plush Hybrid Mattress · 15\" Profile",
    description: "Opulence lives up to its name with a lavish blend of cooling fabrics, Serene® foam for enhanced pressure relief, and multi-zone pocket coils. Designed to minimize motion transfer while maintaining support, it delivers a refined, indulgent sleep experience.",
    image: opulenceImage,
  },
  {
    name: "PALATIAL",
    subtitle: "Luxury Euro Top Ultra Plush Hybrid Mattress · 17\" Profile",
    description: "Palatial represents the pinnacle of Aurora Dream luxury. A signature dual-coil system combines the strength of continuous coils with the precision of contour pocket coils. Finished with CopperCOOL™ fabric and premium cooling foams, it offers unmatched comfort, support, and temperature control.",
    image: palatialImage,
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

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1
            className="text-4xl sm:text-5xl font-light text-[#F3E8D0] mb-4 tracking-wide"
            data-testid="text-products-page-title"
          >
            Our Products
          </h1>
          <p className="text-[#F3E8D0]/60 max-w-xl mx-auto">
            Premium Canadian-made sleep products designed for lasting comfort and exceptional quality.
          </p>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-light text-[#F3E8D0] mb-8 tracking-wide border-b border-[#F3E8D0]/20 pb-4">
            Mattresses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mattresses.map((mattress) => (
              <Link key={mattress.name} href={`/product-details/${createId(mattress.name)}`}>
                <Card
                  className="group overflow-visible border-0 bg-[#0A3A57]/60 backdrop-blur-sm hover:bg-[#0A3A57]/80 transition-all duration-300 cursor-pointer"
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
                    <h3 className="text-xl font-semibold text-[#F3E8D0] mb-1">
                      {mattress.name}
                    </h3>
                    <p className="text-[#3A7BF7] text-sm mb-3">
                      {mattress.subtitle}
                    </p>
                    <p className="text-[#F3E8D0]/60 text-sm leading-relaxed line-clamp-3">
                      {mattress.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-light text-[#F3E8D0] mb-8 tracking-wide border-b border-[#F3E8D0]/20 pb-4">
            Pillows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillows.map((pillow) => (
              <Link key={pillow.name} href={`/product-details/${createId(pillow.name)}`}>
                <Card
                  className="group overflow-visible border-0 bg-[#0A3A57]/60 backdrop-blur-sm hover:bg-[#0A3A57]/80 transition-all duration-300 cursor-pointer"
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
                    <h3 className="text-lg font-semibold text-[#F3E8D0] mb-1">
                      {pillow.name}
                    </h3>
                    <p className="text-[#3A7BF7] text-sm mb-3">
                      {pillow.subtitle}
                    </p>
                    <p className="text-[#F3E8D0]/60 text-sm leading-relaxed line-clamp-3">
                      {pillow.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-[#F3E8D0] mb-8 tracking-wide border-b border-[#F3E8D0]/20 pb-4">
            Mattress Protection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mattressProtection.map((product) => (
              <Link key={product.name} href={`/product-details/${createId(product.name)}`}>
                <Card
                  className="group overflow-visible border-0 bg-[#0A3A57]/60 backdrop-blur-sm hover:bg-[#0A3A57]/80 transition-all duration-300 cursor-pointer"
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
                    <h3 className="text-lg font-semibold text-[#F3E8D0] mb-1">
                      {product.name}
                    </h3>
                    <p className="text-[#3A7BF7] text-sm mb-3">
                      {product.subtitle}
                    </p>
                    <p className="text-[#F3E8D0]/60 text-sm leading-relaxed line-clamp-3">
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
  );
}