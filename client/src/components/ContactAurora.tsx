import { MapPin, Mail, Phone, Car, Facebook, Instagram, Navigation } from "lucide-react";

const ContactAurora = () => {
  const handleFacebookClick = () => {
    window.open("https://facebook.com/auroradreamsleep", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/auroradream.ca/", "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#0A3A57] to-[#0d2b42] text-[#F3E8D0]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-wider">
              Visit Our <span className="text-[#3A7BF7]">Showroom</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Experience the Aurora Dream collection firsthand at our Ottawa showroom. 
              Schedule a private fitting and discover the mattress, pillow, or sleep 
              system designed for your best rest yet.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-6 flex items-center gap-3">
                  <MapPin className="text-[#3A7BF7]" />
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Address</h4>
                    <p className="opacity-90">
                      1489 Merivale Road, UNIT E<br />
                      Ottawa, ON K2E 5P3, Canada<br />
                      <span className="text-sm opacity-75">Free parking available</span>
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-2">Email</h4>
                    <a href="mailto:info@auroradream.ca" className="opacity-90 hover:text-[#3A7BF7] transition-colors flex items-center gap-2">
                      <Mail size={18} />
                      info@auroradream.ca
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-2">Phone</h4>
                    <a href="tel:+16132900212" className="opacity-90 hover:text-[#3A7BF7] transition-colors flex items-center gap-2">
                      <Phone size={18} />
                      +1 (613) 290-0212
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4">Follow us on social media</h4>
                    <div className="pt-2">
                      <div className="flex items-center gap-4">
                        <button onClick={handleFacebookClick} className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3A7BF7]/20 hover:bg-[#3A7BF7]/40 text-[#F3E8D0] transition-all duration-300 hover:scale-110" aria-label="Facebook"><Facebook className="w-6 h-6" /></button>
                        <button onClick={handleInstagramClick} className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3A7BF7]/20 hover:bg-[#3A7BF7]/40 text-[#F3E8D0] transition-all duration-300 hover:scale-110" aria-label="Instagram"><Instagram className="w-6 h-6" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="space-y-8">
              <div>
                                <h3 className="text-2xl font-light mb-6">Perfect Location</h3>
                <p className="opacity-90 mb-6">
                  We're conveniently located right beside the famous Casa Mexico restaurant on Merivale Road!
                </p>
                
                {/* Map Image */}
                <div className="mt-6 rounded-lg overflow-hidden border border-white/10">
                  <img 
                    src="/assets/location/ourmaplocation-optimized.webp" 
                    alt="Aurora Dream location map - 1489 Merivale Road next to Casa Mexico Restaurant"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="bg-white/5 p-4">
                    <p className="text-sm opacity-80 text-center">
                      📍 1489 Merivale Road, Unit E • Right beside Casa Mexico
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAurora;
