import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Leaf, Shield } from "lucide-react";

interface MattressPageProps {
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function MattressPage({ name, subtitle, description, image }: MattressPageProps) {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/products">
          <Button
            variant="ghost"
            className="text-[#F3E8D0]/70 hover:text-[#F3E8D0] mb-8 -ml-2"
            data-testid="button-back-products"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="bg-[#c5dff0] rounded-md overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-auto object-contain"
              data-testid={`img-mattress-${name.toLowerCase()}`}
            />
          </div>

          <div>
            <h1
              className="text-4xl sm:text-5xl font-semibold text-[#F3E8D0] mb-3 tracking-wide"
              data-testid={`text-mattress-name-${name.toLowerCase()}`}
            >
              {name}
            </h1>
            
            <p
              className="text-lg text-[#3A7BF7] mb-8"
              data-testid={`text-mattress-subtitle-${name.toLowerCase()}`}
            >
              {subtitle}
            </p>

            <p
              className="text-[#F3E8D0]/80 leading-relaxed text-lg mb-10"
              data-testid={`text-mattress-description-${name.toLowerCase()}`}
            >
              {description}
            </p>

            <div className="flex flex-wrap gap-6 mb-10">
              <div
                className="flex items-center gap-3 bg-[#0A3A57]/60 backdrop-blur-sm px-5 py-3 rounded-md"
                data-testid="badge-canadian-made"
              >
                <Leaf className="w-5 h-5 text-[#19B9C4]" />
                <span className="text-[#F3E8D0] text-sm font-medium">Canadian Made</span>
              </div>
              
              <div
                className="flex items-center gap-3 bg-[#0A3A57]/60 backdrop-blur-sm px-5 py-3 rounded-md"
                data-testid="badge-warranty"
              >
                <Shield className="w-5 h-5 text-[#A861D5]" />
                <span className="text-[#F3E8D0] text-sm font-medium">1-5 Year Warranty</span>
              </div>
            </div>

            <Button
              onClick={scrollToContact}
              className="bg-[#3A7BF7] hover:bg-[#3A7BF7]/90 text-[#F3E8D0] px-8 py-6 text-lg font-medium rounded-md shadow-lg shadow-[#3A7BF7]/30 transition-all duration-300 border border-[#3A7BF7]/50"
              data-testid="button-book-consultation"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
