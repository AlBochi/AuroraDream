import { useRoute } from "wouter";
import AuroraSky from "@/components/AuroraSky";
import NavbarAurora from "@/components/NavbarAurora";
import FooterAurora from "@/components/FooterAurora";
import { Button } from "@/components/ui/button";

// Import all images
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

// All product data
const productData = {
  // Mattresses
  "diana": {
    name: "DIANA",
    subtitle: "Firm Hybrid Mattress · 8\" Profile",
    description: "Diana is engineered for sleepers who want uncompromising firmness with dependable comfort. Built with a reinforced perimeter and a continuous coil system, it delivers strong, edge-to-edge support that eliminates the roll-off feeling and maintains structural integrity night after night. An added layer of super-soft Bio-Foam enhances comfort without softening the feel, providing subtle pressure relief while preserving a truly firm sleep surface.",
    image: dianaImage,
  },
  "fiona": {
    name: "FIONA",
    subtitle: "Medium Firm Hybrid Mattress · 8.5\" Profile",
    description: "Fiona offers the perfect balance between support and comfort. Full perimeter coil construction ensures stability, while cooling gel-infused Bio-Foam and a premium grey swirl knit cover create a polished, breathable, medium-firm sleep surface.",
    image: fionaImage,
  },
  "essex": {
    name: "ESSEX",
    subtitle: "Euro Top All-Foam Mattress · 8.5\" Profile · Medium Plush",
    description: "Essex is an all-foam design crafted for contouring comfort. A high-density soy foam base resists impressions, while convoluted foam enhances airflow and pressure relief. The plush Euro Top, infused with cooling gel Bio-Foam, adds a touch of luxury and softness.",
    image: essexImage,
  },
  "indigo": {
    name: "INDIGO",
    subtitle: "Firm Hybrid Mattress · 11\" Profile",
    description: "Indigo delivers targeted, intelligent support through multi-zone contour pocket coils and reinforced edge stability. A silky-soft Tencel® cover enhances breathability, while gel-infused quilting and high-density CertiPUR® foams provide long-lasting comfort and pressure relief.",
    image: indigoImage,
  },
  "jasmine": {
    name: "JASMINE",
    subtitle: "Euro Top Plush Hybrid Mattress · 13\" Profile",
    description: "Jasmine is designed for sleepers who love plush comfort without losing support. Its Euro Top design, multi-zone pocket coils, cooling gel foams, and moisture-regulating Tencel® fabric create a deeply comfortable, refreshing sleep environment.",
    image: jasmineImage,
  },
  "layla": {
    name: "LAYLA",
    subtitle: "Pillow Top Ultra Plush Hybrid Mattress · 14\" Profile",
    description: "Layla delivers a cloud-like sleep experience with a luxurious pillow top and layered comfort foams. Cooling gel materials relieve pressure while multi-zone pocket coils maintain proper alignment and support throughout the night.",
    image: laylaImage,
  },
  "monaco": {
    name: "MONACO",
    subtitle: "Euro Top Plush Hybrid Mattress · 14\" Profile",
    description: "Monaco elevates comfort with Granite TruCOOL™ fabric that feels cool to the touch and helps regulate temperature. Foam-encased pocket coils provide stability and edge support, while layered cooling foams create a plush yet supportive sleep.",
    image: monacoImage,
  },
  "nightingale": {
    name: "NIGHTINGALE",
    subtitle: "Pillow Top Ultra Plush Hybrid Mattress · 14\" Profile",
    description: "Nightingale combines ultra-plush comfort with advanced cooling performance. Memory foam infused with EssentialGel™, breathable fabrics, and responsive pocket coils work together to reduce pressure, motion transfer, and heat buildup.",
    image: nightingaleImage,
  },
  "opulence": {
    name: "OPULENCE",
    subtitle: "Euro Top Ultra Plush Hybrid Mattress · 15\" Profile",
    description: "Opulence lives up to its name with a lavish blend of cooling fabrics, Serene® foam for enhanced pressure relief, and multi-zone pocket coils. Designed to minimize motion transfer while maintaining support, it delivers a refined, indulgent sleep experience.",
    image: opulenceImage,
  },
  "palatial": {
    name: "PALATIAL",
    subtitle: "Luxury Euro Top Ultra Plush Hybrid Mattress · 17\" Profile",
    description: "Palatial represents the pinnacle of Aurora Dream luxury. A signature dual-coil system combines the strength of continuous coils with the precision of contour pocket coils. Finished with CopperCOOL™ fabric and premium cooling foams, it offers unmatched comfort, support, and temperature control.",
    image: palatialImage,
  },
  // Pillows
  "cool-ice-pillow": {
    name: "COOL ICE PILLOW",
    subtitle: "Cooling Memory Foam Pillow · Queen",
    description: "Engineered for hot sleepers, the Cool Ice Pillow features a Tencel® Cool Ice cover that actively draws heat away. Adjustable shredded gel memory foam contours to your head and neck, allowing personalized comfort in any sleep position.",
    image: coolIcePillowImage,
  },
  "active-charcoal-pillow": {
    name: "ACTIVE CHARCOAL PILLOW",
    subtitle: "Cooling & Odor-Control Pillow · Queen",
    description: "Infused with charcoal, this pillow neutralizes odors while regulating temperature. Shredded gel memory foam adapts to every sleep style, while breathable Tencel® fabric keeps your pillow feeling fresh and supportive night after night.",
    image: charcoalPillowImage,
  },
  "organic-bamboo-pillow": {
    name: "ORGANIC BAMBOO PILLOW",
    subtitle: "Eco-Friendly Comfort Pillow · Queen",
    description: "Made with a 100% organic bamboo cover and fill, this pillow delivers naturally cool, breathable, and hypoallergenic comfort. Its adjustable design lets you customize firmness while supporting sustainable, eco-conscious living.",
    image: bambooPillowImage,
  },
  "hotel-comfort-tencel-pillow": {
    name: "HOTEL COMFORT TENCEL PILLOW",
    subtitle: "Luxury Cooling Pillow · Queen",
    description: "Inspired by five-star hotels, this pillow pairs a smooth Tencel® cover with plush poly fibers for an inviting, breathable feel. Moisture-wicking and hypoallergenic properties ensure cool, comfortable sleep every night.",
    image: hotelPillowImage,
  },
  // Protectors
  "cotton-terry-waterproof-mattress-protector": {
    name: "COTTON TERRY WATERPROOF MATTRESS PROTECTOR",
    subtitle: "Breathable Protection",
    description: "Soft cotton terry fabric provides plush comfort while a breathable waterproof barrier protects against spills, allergens, and everyday wear. Quiet, secure, and designed to fit deep mattresses without shifting.",
    image: terryProtectorImage,
  },
  "cool-ice-mattress-protector": {
    name: "COOL ICE MATTRESS PROTECTOR",
    subtitle: "Advanced Cooling Protection",
    description: "Advanced cooling fabric actively pulls heat away from the body, keeping sleepers cool and dry. Five-sided waterproof protection, NO-MITE™ certification, and a non-slip fit ensure clean, uninterrupted sleep.",
    image: coolIceProtectorImage,
  },
  "bed-bug-mattress-encasement": {
    name: "BED BUG MATTRESS ENCASEMENT",
    subtitle: "Complete 6-Sided Protection",
    description: "This full encasement offers six-sided, bite-proof protection against bed bugs, dust mites, allergens, and spills. Breathable, silent, and securely sealed with a zipper and Velcro lock for total peace of mind.",
    image: encasementImage,
  },
};

export default function ProductDetails() {
  const [match, params] = useRoute("/product-details/:id");
  
  if (!match || !params?.id) {
    return (
      <div className="relative min-h-screen">
        <AuroraSky />
        <NavbarAurora />
        <main className="pt-40 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl text-[#F3E8D0] mb-4">Product Not Found</h1>
            <Button onClick={() => window.location.href = "/products"}>
              Back to Products
            </Button>
          </div>
        </main>
        <FooterAurora />
      </div>
    );
  }

  const productId = params.id.toLowerCase();
  const product = productData[productId];

  if (!product) {
    return (
      <div className="relative min-h-screen">
        <AuroraSky />
        <NavbarAurora />
        <main className="pt-40 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl text-[#F3E8D0] mb-4">Product Not Found</h1>
            <p className="text-[#F3E8D0]/60 mb-8">Product "{productId}" doesn't exist.</p>
            <Button onClick={() => window.location.href = "/products"}>
              ← Back to All Products
            </Button>
          </div>
        </main>
        <FooterAurora />
      </div>
    );
  }

  const bookAppointment = () => {
    window.open("https://calendly.com/albochi-auroradream/30min?month=2025-12", "_blank");
  };

  return (
    <div className="relative min-h-screen">
      <AuroraSky />
      <NavbarAurora />
      <main className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <a href="/products" className="text-[#3A7BF7] hover:text-[#3A7BF7]/80">← Back to Products</a>
          </div>

          {/* Product Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="bg-[#0A3A57]/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-[#c5dff0]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-light text-[#F3E8D0] mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-[#F3E8D0]/80 mb-6">
                {product.subtitle}
              </p>
              
              <div className="mb-8">
                <Button
                  onClick={bookAppointment}
                  className="w-full bg-[#3A7BF7] hover:bg-[#3A7BF7]/90 text-[#F3E8D0] py-6 text-lg font-medium rounded-md shadow-lg shadow-[#3A7BF7]/30 transition-all duration-300 border border-[#3A7BF7]/50"
                >
                  Book Your Private Fitting for {product.name}
                </Button>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="bg-[#0A3A57]/30 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-light text-[#F3E8D0] mb-6">Product Description</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-[#F3E8D0]/80 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </main>
      <FooterAurora />
    </div>
  );
}
