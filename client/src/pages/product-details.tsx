import { getProductData } from '@/data/productData';
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
import coolIcePillowImage from "@assets/CoolIcePillow_NEW_OPTIMIZED.jpg";
import charcoalPillowImage from "@assets/ActiveCharcoalPillow_NEW_OPTIMIZED.jpg";
import bambooPillowImage from "@assets/BambooOrganicPillow_NEW_OPTIMIZED.jpg";
import hotelPillowImage from "@assets/HotelComfortPillow_OPTIMIZED.jpg";

// Protector images
import terryProtectorImage from "@assets/TerryMattressProtector_OPTIMIZED.jpg";
import coolIceProtectorImage from "@assets/PremiumMattressProtector_OPTIMIZED.jpg";
import encasementImage from "@assets/MattressEncasementSupreme_OPTIMIZED.jpg";

// All product data - UPDATED to match ProductsPage.tsx

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
            <span className="ml-4 text-[#3A7BF7]">"Call (613) 290-0212"</span>
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
                <span className="text-[#3A7BF7] font-semibold">"Call for Quote"</span>
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
      <img loading="lazy" decoding="async" {src}
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
  const product = getProductData(productId);

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
                      <span className="text-2xl font-bold text-[#3A7BF7]">"Call (613) 290-0212"</span>
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
                    <div className="text-xl font-bold text-[#3A7BF7]">"Call for Quote"</div>
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