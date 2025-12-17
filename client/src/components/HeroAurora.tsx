import { Button } from "@/components/ui/button";

export default function HeroAurora() {
  // Function to open the Calendly booking page in a new tab
  const bookAppointment = () => {
    window.open("https://calendly.com/albochi-auroradream/30min?month=2025-12", "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-24"
      data-testid="section-hero"
    >
      {/* Main content container - splits 50/50 on large screens */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* LEFT SIDE: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-light text-foreground mb-8 leading-tight tracking-wide"
            data-testid="text-hero-headline"
          >
            Premium Sleep
            <br />
            <span className="font-semibold">Within Reach</span>
          </h1>
          
          <p
            className="text-lg sm:text-xl text-foreground/80 mb-12 font-light tracking-wide"
            data-testid="text-hero-subheadline"
          >
            Ottawa's Private Sleep Studio
          </p>
          
          <Button
            onClick={bookAppointment}
            className="bg-[#3A7BF7] hover:bg-[#3A7BF7]/90 text-[#F3E8D0] px-10 py-7 text-lg font-medium rounded-md shadow-lg shadow-[#3A7BF7]/30 transition-all duration-300 border border-[#3A7BF7]/50"
            data-testid="button-book-fitting"
          >
            Book Your Private Fitting
          </Button>
        </div>

        {/* RIGHT SIDE: Image with Shadow - NOW SMALLER */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Shadow Effect Behind Image */}
            <div className="absolute -inset-3 bg-gradient-to-r from-foreground/10 to-transparent rounded-2xl blur-xl opacity-40"></div>
            
            {/* The Image - Now Smaller */}
            <img
              src="/images/hero-side.jpg"
              alt="Luxury mattress at Aurora Dream"
              className="relative w-full h-auto rounded-2xl shadow-xl shadow-foreground/15 border border-background/30"
            />
          </div>
        </div>

      </div>

      {/* Scroll indicator (kept at bottom) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}