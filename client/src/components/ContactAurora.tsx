import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Car, Facebook, Instagram, Navigation } from "lucide-react";

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
      className="relative py-24"
      data-testid="section-contact"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-light text-[#F3E8D0] mb-6 tracking-wide"
            data-testid="text-contact-title"
          >
            Visit Our Showroom
          </h2>
          
          <p className="text-[#F3E8D0]/70 max-w-2xl mx-auto leading-relaxed text-lg">
            Experience the Aurora Dream collection firsthand at our Ottawa showroom. Schedule a private fitting 
            and discover the mattress, pillow, or sleep system designed for your best rest yet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#0A3A57]/20 backdrop-blur-sm rounded-xl p-6 border border-[#3A7BF7]/20">
              <h3 className="text-xl font-medium text-[#F3E8D0] mb-6 text-center">Contact Information</h3>
              
              <div className="space-y-6">
                <button
                  onClick={handleAddressClick}
                  className="flex items-start gap-4 text-[#F3E8D0]/80 hover:text-[#F3E8D0] transition-colors group w-full text-left"
                  data-testid="contact-location"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3A7BF7]/20 flex items-center justify-center group-hover:bg-[#3A7BF7]/30 transition-colors">
                    <MapPin className="w-5 h-5 text-[#3A7BF7]" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm mt-1">1489 Merivale Road, UNIT E</p>
                    <p className="text-sm">Ottawa, ON K2E 5P3, Canada</p>
                    <div className="flex items-center gap-2 mt-2 text-[#3A7BF7] text-sm">
                      <Car className="w-4 h-4" />
                      <span>Free parking available</span>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-4 text-[#F3E8D0]/80 hover:text-[#F3E8D0] transition-colors group"
                  data-testid="contact-email"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3A7BF7]/20 flex items-center justify-center group-hover:bg-[#3A7BF7]/30 transition-colors">
                    <Mail className="w-5 h-5 text-[#3A7BF7]" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm">info@auroradream.ca</p>
                  </div>
                </button>
                
                <button
                  onClick={handlePhoneClick}
                  className="flex items-center gap-4 text-[#F3E8D0]/80 hover:text-[#F3E8D0] transition-colors group"
                  data-testid="contact-phone"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3A7BF7]/20 flex items-center justify-center group-hover:bg-[#3A7BF7]/30 transition-colors">
                    <Phone className="w-5 h-5 text-[#3A7BF7]" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm">+1 (613) 290-0212</p>
                  </div>
                </button>
              </div>
              
              {/* Casa Mexico Highlight */}
              <div className="mt-8 p-4 bg-gradient-to-r from-[#3A7BF7]/10 to-[#00D2FF]/10 rounded-lg border border-[#3A7BF7]/20">
                <div className="flex items-center gap-3 mb-2">
                  <Navigation className="w-5 h-5 text-[#3A7BF7]" />
                  <span className="text-[#F3E8D0] font-medium">Perfect Location</span>
                </div>
                <p className="text-[#F3E8D0]/80 text-sm">
                  We&apos;re conveniently located right beside the famous <span className="text-[#3A7BF7] font-medium">Casa Mexico</span> restaurant on Merivale Road!
                </p>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="text-center">
              <p className="text-[#F3E8D0]/70 mb-4">Follow us on social media</p>
              <div className="flex items-center justify-center gap-4">
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
            </div>
          </div>

          {/* Right Column: Location Map */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0A3A57]/30 to-[#0A3A57]/10 backdrop-blur-sm rounded-xl overflow-hidden border border-[#3A7BF7]/20">
              <div className="p-4 text-center border-b border-[#3A7BF7]/20">
                <h3 className="text-xl font-medium text-[#F3E8D0] mb-2">Find Us Easily</h3>
                <p className="text-[#F3E8D0]/60 text-sm">Landmark-based directions for easy navigation</p>
              </div>
              
              <div className="relative">
                <img
                  src="/assets/location/ourmaplocation.webp"
                  alt="Map showing Aurora Dream location beside Casa Mexico restaurant on Merivale Road"
                  className="w-full h-auto max-h-[300px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3A57]/40 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="p-5">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3A7BF7]/20 flex items-center justify-center">
                    <span className="text-[#3A7BF7] text-sm font-bold">A</span>
                  </div>
                  <div>
                    <p className="text-[#F3E8D0] font-medium">Aurora Dream Mattress Studio</p>
                    <p className="text-[#F3E8D0]/60 text-sm">1489 Merivale Road, Unit E</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center">
                    <span className="text-[#FF6B6B] text-sm font-bold">C</span>
                  </div>
                  <div>
                    <p className="text-[#F3E8D0] font-medium">Casa Mexico Restaurant</p>
                    <p className="text-[#F3E8D0]/60 text-sm">Popular landmark next door</p>
                    <p className="text-[#F3E8D0]/50 text-xs mt-1">Look for the vibrant Mexican restaurant – we&apos;re right beside it!</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button
                onClick={handleCalendlyClick}
                className="bg-gradient-to-r from-[#3A7BF7] to-[#00D2FF] text-white hover:from-[#2A6BE7] hover:to-[#00C2FF] px-8 py-6 text-lg font-normal tracking-wide transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3A7BF7]/30 w-full"
                data-testid="contact-schedule-button"
              >
                Schedule Your Private Fitting
              </Button>
              <p className="text-[#F3E8D0]/50 text-sm mt-3">Appointment-only for personalized service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
