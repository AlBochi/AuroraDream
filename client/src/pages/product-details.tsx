import { useRoute } from "wouter";
import { useState } from "react";
import AuroraSky from "@/components/AuroraSky";
import NavbarAurora from "@/components/NavbarAurora";
import FooterAurora from "@/components/FooterAurora";
import { Button } from "@/components/ui/button";
import { ChevronDown, Check } from "lucide-react";

// Mattress images - direct paths from public folder (using Final2 images for details)
const dianaImage = "/images/DianaFinal2.webp";
const carlisleImage = "/images/CarlisleFinal2.webp";
const gemmaImage = "/images/GemmaFinal2.webp";
const essexImage = "/images/EssexFinal2.webp";
const indigoImage = "/images/IndigoFinal2.webp";
const jasmineImage = "/images/JasminFinal2.webp";
const laylaImage = "/images/LaylaFinal2.webp";
const monacoImage = "/images/MonacoFinal2.webp";
const nightingaleImage = "/images/NightingaleFinal2.webp";
const opulenceImage = "/images/OpulenceFinal2.webp";
const palatialImage = "/images/PalatialFinal2.webp";

// Pillow images (keep as .jpg for now)
import coolIcePillowImage from "@assets/CoolIcePillow_1765828175418.jpg";
import charcoalPillowImage from "@assets/ActiveCharcoalPillow_1765828175419.jpg";
import bambooPillowImage from "@assets/BambooOrganicPillow_1765828175418.jpg";
import hotelPillowImage from "@assets/HotelComfortPillows_1765828175417.jpg";

// Protector images
import terryProtectorImage from "@assets/TerryMattressProtector_1765828175413.jpg";
import coolIceProtectorImage from "@assets/PremiumMattressProtector_1765828175414.jpg";
import encasementImage from "@assets/MattressEncasementSupreme_1765828175416.jpg";

// All product data - UPDATED to match ProductsPage.tsx
const productData = {
  // Mattresses
  "carlisle": {
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
  "diana": {
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
  "gemma": {
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
  "essex": {
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
  "indigo": {
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
  "jasmine": {
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
  "layla": {
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
  "monaco": {
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
  "nightingale": {
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
  "opulence": {
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
  "palatial": {
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
  // Pillows
  "cool-ice-pillow": {
    name: "COOL ICE PILLOW",
    subtitle: "Cooling Memory Foam Pillow · Queen",
    description: "Engineered for hot sleepers, the Cool Ice Pillow features a Tencel® Cool Ice cover that actively draws heat away. Adjustable shredded gel memory foam contours to your head and neck, allowing personalized comfort in any sleep position.",
    image: coolIcePillowImage,
    prices: [
      { size: "QUEEN", price: 100 }
    ]
  },
  "active-charcoal-pillow": {
    name: "ACTIVE CHARCOAL PILLOW",
    subtitle: "Cooling & Odor-Control Pillow · Queen",
    description: "Infused with charcoal, this pillow neutralizes odors while regulating temperature. Shredded gel memory foam adapts to every sleep style, while breathable Tencel® fabric keeps your pillow feeling fresh and supportive night after night.",
    image: charcoalPillowImage,
    prices: [
      { size: "QUEEN", price: 100 }
    ]
  },
  "organic-bamboo-pillow": {
    name: "ORGANIC BAMBOO PILLOW",
    subtitle: "Eco-Friendly Comfort Pillow · Queen",
    description: "Made with a 100% organic bamboo cover and fill, this pillow delivers naturally cool, breathable, and hypoallergenic comfort. Its adjustable design lets you customize firmness while supporting sustainable, eco-conscious living.",
    image: bambooPillowImage,
    prices: [
      { size: "QUEEN", price: 100 }
    ]
  },
  "hotel-comfort-tencel-pillow": {
    name: "HOTEL COMFORT TENCEL PILLOW",
    subtitle: "Luxury Cooling Pillow · Queen",
    description: "Inspired by five-star hotels, this pillow pairs a smooth Tencel® cover with plush poly fibers for an inviting, breathable feel. Moisture-wicking and hypoallergenic properties ensure cool, comfortable sleep every night.",
    image: hotelPillowImage,
    prices: [
      { size: "QUEEN", price: 60 }
    ]
  },
  // Protectors
  "cotton-terry-waterproof-mattress-protector": {
    name: "COTTON TERRY WATERPROOF MATTRESS PROTECTOR",
    subtitle: "Breathable Protection",
    description: "Soft cotton terry fabric provides plush comfort while a breathable waterproof barrier protects against spills, allergens, and everyday wear. Quiet, secure, and designed to fit deep mattresses without shifting.",
    image: terryProtectorImage,
    prices: [
      { size: "TWIN", price: 45 },
      { size: "TWIN XL", price: 50 },
      { size: "FULL/DOUBLE", price: 50 },
      { size: "QUEEN", price: 60 },
      { size: "KING", price: 65 }
    ]
  },
  "cool-ice-mattress-protector": {
    name: "COOL ICE MATTRESS PROTECTOR",
    subtitle: "Advanced Cooling Protection",
    description: "Advanced cooling fabric actively pulls heat away from the body, keeping sleepers cool and dry. Five-sided waterproof protection, NO-MITE™ certification, and a non-slip fit ensure clean, uninterrupted sleep.",
    image: coolIceProtectorImage,
    prices: [
      { size: "TWIN", price: 180 },
      { size: "TWIN XL", price: 180 },
      { size: "FULL/DOUBLE", price: 190 },
      { size: "QUEEN", price: 200 },
      { size: "KING", price: 220 }
    ]
  },
  "bed-bug-mattress-encasement": {
    name: "BED BUG MATTRESS ENCASEMENT",
    subtitle: "Complete 6-Sided Protection",
    description: "This full encasement offers six-sided, bite-proof protection against bed bugs, dust mites, allergens, and spills. Breathable, silent, and securely sealed with a zipper and Velcro lock for total peace of mind.",
    image: encasementImage,
    prices: [
      { size: "TWIN", price: 95 },
      { size: "TWIN XL", price: 180 },
      { size: "FULL/DOUBLE", price: 190 },
      { size: "QUEEN", price: 200 },
      { size: "KING", price: 220 }
    ]
  },
};

// Size selector component
function SizeSelector({ prices, selectedSize, onSizeSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-8">
      <label className="block text-[#F3E8D0] mb-3 text-lg font-medium">
        Select Size
      </label>
      <div className="relative">
        <button
          type="button"
          className="w-full bg-[#0A3A57]/50 border border-[#3A7BF7]/30 rounded-lg py-4 px-6 text-left flex justify-between items-center text-[#F3E8D0] hover:bg-[#0A3A57]/70 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center">
            <span className="font-medium">{selectedSize?.size}</span>
            <span className="ml-4 text-[#3A7BF7]">${selectedSize?.price}</span>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-[#0A3A57] border border-[#3A7BF7]/30 rounded-lg shadow-lg overflow-hidden">
            {prices.map((priceItem, index) => (
              <button
                key={index}
                type="button"
                className={`w-full py-4 px-6 text-left flex justify-between items-center hover:bg-[#3A7BF7]/20 transition-colors ${
                  selectedSize?.size === priceItem.size ? 'bg-[#3A7BF7]/30' : ''
                }`}
                onClick={() => {
                  onSizeSelect(priceItem);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center">
                  <span className="font-medium">{priceItem.size}</span>
                  {selectedSize?.size === priceItem.size && (
                    <Check className="w-4 h-4 ml-3 text-[#3A7BF7]" />
                  )}
                </div>
                <span className="text-[#3A7BF7] font-semibold">${priceItem.price}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Zoomable Image Component
function ZoomableImage({ src, alt }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <div 
      className="relative overflow-hidden rounded-lg bg-[#c5dff0] cursor-zoom-in w-full h-full"
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain transition-transform duration-300"
        style={{
          transformOrigin: `${position.x}% ${position.y}%`,
          transform: isZoomed ? 'scale(2)' : 'scale(1)',
        }}
      />
      {isZoomed && (
        <div className="absolute inset-0 bg-transparent pointer-events-none">
          <div className="absolute w-32 h-32 border-2 border-white/50 rounded-full pointer-events-none"
            style={{
              left: `calc(${position.x}% - 64px)`,
              top: `calc(${position.y}% - 64px)`,
            }}
          />
        </div>
      )}
      <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded transition-opacity duration-300"
        style={{ opacity: isZoomed ? 1 : 0 }}
      >
        🔍 Zoomed {isZoomed ? 'On' : 'Off'}
      </div>
    </div>
  );
}

export default function ProductDetails() {
  const [match, params] = useRoute("/product-details/:id");
  const [selectedSize, setSelectedSize] = useState(null);
  
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

  // Initialize selected size to Queen if available, otherwise first size
  if (!selectedSize && product.prices) {
    const queenPrice = product.prices.find(p => p.size === "QUEEN");
    setSelectedSize(queenPrice || product.prices[0]);
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
            <a href="/products" className="text-[#3A7BF7] hover:text-[#3A7BF7]/80 flex items-center">
              ← Back to Products
            </a>
          </div>

          {/* Product Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="bg-[#0A3A57]/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <ZoomableImage src={product.image} alt={product.name} />
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
              
              {/* Price and Size Selector - Only for products with prices */}
              {product.prices && selectedSize && (
                <div className="mb-8">
                  <SizeSelector 
                    prices={product.prices}
                    selectedSize={selectedSize}
                    onSizeSelect={setSelectedSize}
                  />
                  
                  <div className="mb-6 p-6 bg-[#0A3A57]/50 rounded-lg border border-[#3A7BF7]/30">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[#F3E8D0] text-lg">
                        {product.name.includes("PILLOW") 
                          ? `${selectedSize?.size} Pillow`
                          : product.name.includes("PROTECTOR") || product.name.includes("ENCASEMENT")
                            ? `${selectedSize?.size} ${product.name.includes("PROTECTOR") ? "Protector" : "Encasement"}`
                            : `${selectedSize?.size} Mattress`}
                      </span>
                      <span className="text-2xl font-bold text-[#3A7BF7]">${selectedSize?.price}</span>
                    </div>
                    <p className="text-[#F3E8D0]/60 text-sm">
                      Price includes delivery and setup. Financing options available.
                    </p>
                  </div>
                </div>
              )}
              
              <div className="mb-8">
                <Button
                  onClick={bookAppointment}
                  className="w-full bg-[#3A7BF7] hover:bg-[#3A7BF7]/90 text-[#F3E8D0] py-6 text-lg font-medium rounded-md shadow-lg shadow-[#3A7BF7]/30 transition-all duration-300 border border-[#3A7BF7]/50"
                >
                  Book your appointment
                </Button>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="bg-[#0A3A57]/30 rounded-2xl p-8 backdrop-blur-sm mb-12">
            <h2 className="text-2xl font-light text-[#F3E8D0] mb-6">Product Description</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-[#F3E8D0]/80 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>
          </div>

          {/* All Sizes & Prices Table - Only for products with prices */}
          {product.prices && selectedSize && (
            <div className="bg-[#0A3A57]/30 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-light text-[#F3E8D0] mb-6">All Sizes & Prices</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {product.prices.map((priceItem, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg text-center transition-all ${
                      selectedSize?.size === priceItem.size 
                        ? 'bg-[#3A7BF7]/30 border-2 border-[#3A7BF7]' 
                        : 'bg-[#0A3A57]/50 border border-[#3A7BF7]/20'
                    }`}
                  >
                    <div className="text-sm text-[#F3E8D0]/80 mb-2">{priceItem.size}</div>
                    <div className="text-xl font-bold text-[#3A7BF7]">${priceItem.price}</div>
                    {selectedSize?.size === priceItem.size && (
                      <div className="mt-2 text-xs text-[#3A7BF7] flex items-center justify-center">
                        <Check className="w-3 h-3 mr-1" /> Selected
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <FooterAurora />
    </div>
  );
}