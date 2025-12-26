import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Car, Facebook, Instagram } from "lucide-react";

export default function ContactAurora() {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@auroradream.ca";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+16132900212";
  };

  const handleAddressClick = () => {
    window.open("https://maps.google.com/?q=1489+Merivale+Road,+UNIT+E,+Ottawa,+ON+K2E+5P3,+Canada", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/profile.php?id=61565186787886", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/carlasleepco/", "_blank");
  };

  const handleCalendlyClick = () => {
    window.open("https://calendly.com/albochi-auroradream/30min?month=2025-12", "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-32"
      data-testid="section-contact"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl font-light text-[#F3E8D0] mb-8 tracking-wide"
          data-testid="text-contact-title"
        >
          Visit Our Showroom
        </h2>
        
        <p className="text-[#F3E8D0]/70 mb-12 max-w-xl mx-auto leading-relaxed text-lg">
          Experience the Aurora Dream collection firsthand. Schedule a private fitting 
          and discover the mattress, pillow, or sleep system designed for your best rest yet.
        </p>

        <div className="space-y-6 mb-10">
          <button
            onClick={handleAddressClick}
            className="flex items-center justify-center gap-3 text-[#F3E8D0]/80 mx-auto hover:text-[#F3E8D0] transition-colors text-lg"
            data-testid="contact-location"
          >
            <MapPin className="w-6 h-6 text-[#3A7BF7]" />
            <span>1489 Merivale Road, UNIT E, Ottawa, ON K2E 5P3, Canada</span>
          </button>
          
          <div className="flex items-center justify-center gap-2 text-[#F3E8D0]/50 text-base">
            <Car className="w-5 h-5" />
            <span>(Free parking available)</span>
          </div>
          
          <button
            onClick={handleEmailClick}
            className="flex items-center justify-center gap-3 text-[#F3E8D0]/80 mx-auto hover:text-[#F3E8D0] transition-colors text-lg"
            data-testid="contact-email"
          >
            <Mail className="w-6 h-6 text-[#3A7BF7]" />
            <span>info@auroradream.ca</span>
          </button>
          
          <button
            onClick={handlePhoneClick}
            className="flex items-center justify-center gap-3 text-[#F3E8D0]/80 mx-auto hover:text-[#F3E8D0] transition-colors text-lg"
            data-testid="contact-phone"
          >
            <Phone className="w-6 h-6 text-[#3A7BF7]" />
            <span>+1 (613) 290-0212</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 mb-10">
          <button
            onClick={handleFacebookClick}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3A7BF7]/20 hover:bg-[#3A7BF7]/40 text-[#F3E8D0] transition-all duration-300 hover:scale-110"
            data-testid="social-facebook"
            aria-label="Visit our Facebook page"
          >
            <Facebook className="w-6 h-6" />
          </button>
          <button
            onClick={handleInstagramClick}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3A7BF7]/20 hover:bg-[#3A7BF7]/40 text-[#F3E8D0] transition-all duration-300 hover:scale-110"
            data-testid="social-instagram"
            aria-label="Visit our Instagram page"
          >
            <Instagram className="w-6 h-6" />
          </button>
        </div>

        <p className="text-[#F3E8D0]/50 italic mb-10 text-base">
          Reach out to schedule your private fitting.
        </p>

        <Button
          onClick={handleCalendlyClick}
          className="bg-[#3A7BF7] hover:bg-[#3A7BF7]/90 text-[#F3E8D0] px-10 py-7 text-lg font-medium rounded-md shadow-lg shadow-[#3A7BF7]/30 transition-all duration-300 border border-[#3A7BF7]/50"
          data-testid="button-schedule-fitting"
        >
          Schedule Your Fitting
        </Button>
      </div>
    </section>
  );
}