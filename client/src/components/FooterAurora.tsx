import { MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react";

function MapleLeaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 2l2 6h3l3-3v4l4 2-3 2 1 4 5 1-3 3 1 3h-5l-1 3h-2l-2-2-3 2v3h-2v-3l-3-2-2 2h-2l-1-3H2l1-3-3-3 5-1 1-4-3-2 4-2V5l3 3h3l2-6z" />
    </svg>
  );
}

export default function FooterAurora() {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = "mailto:albochi@auroradream.ca";
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

  return (
    <footer
      className="relative py-16 border-t border-[#F3E8D0]/10"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-medium text-[#F3E8D0] mb-4">Aurora Dream</h3>
            <p className="text-[#F3E8D0]/60 text-base leading-relaxed">
              Ottawa's Private Sleep Studio. Premium Canadian-made mattresses and sleep products.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={handleFacebookClick}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3A7BF7]/20 hover:bg-[#3A7BF7]/40 text-[#F3E8D0] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={handleInstagramClick}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3A7BF7]/20 hover:bg-[#3A7BF7]/40 text-[#F3E8D0] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-[#F3E8D0] mb-4">Contact Us</h3>
            <div className="space-y-3">
              <button
                onClick={handleAddressClick}
                className="flex items-start gap-2 text-[#F3E8D0]/60 text-base hover:text-[#F3E8D0] transition-colors text-left"
              >
                <MapPin className="w-5 h-5 text-[#3A7BF7] mt-0.5 flex-shrink-0" />
                <span>1489 Merivale Road, UNIT E<br />Ottawa, ON K2E 5P3, Canada</span>
              </button>
              <button
                onClick={handleEmailClick}
                className="flex items-center gap-2 text-[#F3E8D0]/60 text-base hover:text-[#F3E8D0] transition-colors"
              >
                <Mail className="w-5 h-5 text-[#3A7BF7]" />
                <span>albochi@auroradream.ca</span>
              </button>
              <button
                onClick={handlePhoneClick}
                className="flex items-center gap-2 text-[#F3E8D0]/60 text-base hover:text-[#F3E8D0] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#3A7BF7]" />
                <span>+1 (613) 290-0212</span>
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-[#F3E8D0] mb-4">Visit Us</h3>
            <p className="text-[#F3E8D0]/60 text-base leading-relaxed">
              Schedule a private fitting to experience our collection firsthand. Free parking available.
            </p>
          </div>
        </div>
        
        <div className="border-t border-[#F3E8D0]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[#F3E8D0]/50 text-base"
            data-testid="text-footer-copyright"
          >
            © {currentYear} Aurora Dream. Ottawa's Private Sleep Studio.
          </p>
          
          <div className="flex items-center gap-2 text-[#F3E8D0]/70">
            <MapleLeaf className="w-6 h-6 text-red-600" />
            <span className="text-base font-medium">Proudly Canadian Made and Handcrafted</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
