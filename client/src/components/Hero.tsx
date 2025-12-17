import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/luxury_nordic_bedroom_hero.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#19B9C4]/30 via-[#3A7BF7]/40 to-[#A861D5]/30" />
      <div className="absolute inset-0 bg-[#0A3A57]/60" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F3E8D0] mb-6 leading-tight"
          data-testid="text-hero-headline"
        >
          Premium Sleep Within Reach
        </h1>
        
        <p
          className="text-lg sm:text-xl text-[#F3E8D0]/90 mb-10 font-light"
          data-testid="text-hero-subheadline"
        >
          Ottawa's Private Sleep Studio
        </p>
        
        <Button
          onClick={scrollToContact}
          className="bg-[#3A7BF7] hover:bg-[#3A7BF7]/90 text-[#F3E8D0] px-8 py-6 text-lg font-medium rounded-md shadow-lg transition-all duration-300"
          data-testid="button-book-fitting"
        >
          Book Your Private Fitting
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#F3E8D0]/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#F3E8D0]/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
