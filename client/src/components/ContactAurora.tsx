import { MapPin, Mail, Phone, Car, Facebook, Instagram, Navigation, Youtube, Twitter, Linkedin, MessageSquare } from "lucide-react";

const ContactAurora = () => {
  const handleAddressClick = () => {
    window.open("https://maps.google.com/?q=1489+Merivale+Road,+UNIT+E,+Ottawa,+ON+K2E+5P3,+Canada", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://facebook.com/auroradreamsleep", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/auroradream.ca/", "_blank");
  };

  const handleYouTubeClick = () => {
    window.open("https://www.youtube.com/@AuroraDreamCa", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://x.com/AuroraDreamCa", "_blank");
  };

  const handleThreadsClick = () => {
    window.open("https://www.threads.net/@auroradream.ca", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/company/aurora-dream", "_blank");
  };

  const handleCalendlyClick = () => {
    window.open("https://calendly.com/albochi-auroradream/30min?month=2025-12", "_blank");
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
                    <a 
                      href="mailto:info@auroradream.ca" 
                      className="opacity-90 hover:text-[#3A7BF7] transition-colors flex items-center gap-2"
                    >
                      <Mail size={18} />
                      info@auroradream.ca
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-2">Phone</h4>
                    <a 
                      href="tel:+16132900212" 
                      className="opacity-90 hover:text-[#3A7BF7] transition-colors flex items-center gap-2"
                    >
                      <Phone size={18} />
                      +1 (613) 290-0212
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4">Follow us on social media</h4>
                    <div className="pt-2">
                      <div className="flex items-center gap-4">
                        {/* Facebook */}
                        <button
                          onClick={handleFacebookClick}
                          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3A7BF7]/20 hover:bg-[#3A7BF7]/40 text-[#F3E8D0] transition-all duration-300 hover:scale-110"
                          aria-label="Visit our Facebook page"
                        >
                          <Facebook className="w-6 h-6" />
                        </button>
                        
                        {/* Instagram */}
                        <button
                          onClick={handleInstagramClick}
                          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F56040]/20 hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F56040]/40 text-[#F3E8D0] transition-all duration-300 hover:scale-110"
                          aria-label="Visit our Instagram page"
                        >
                          <Instagram className="w-6 h-6" />
                        </button>
                        
                        {/* YouTube */}
                        <button
                          onClick={handleYouTubeClick}
                          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF0000]/20 hover:bg-[#FF0000]/40 text-[#F3E8D0] transition-all duration-300 hover:scale-110"
                          aria-label="Visit our YouTube channel"
                        >
                          <Youtube className="w-6 h-6" />
                        </button>
                        
                        {/* X/Twitter */}
                        <button
                          onClick={handleTwitterClick}
                          className="flex items-center justify-center w-12 h-12 rounded-full bg-black/20 hover:bg-black/40 text-[#F3E8D0] transition-all duration-300 hover:scale-110"
                          aria-label="Visit our X (Twitter) page"
                        >
                          <Twitter className="w-6 h-6" />
                        </button>
                        
                        {/* Threads */}
                        <button
                          onClick={handleThreadsClick}
                          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#000000] via-[#333333] to-[#666666]/20 hover:from-[#000000] hover:via-[#333333] hover:to-[#666666]/40 text-[#F3E8D0] transition-all duration-300 hover:scale-110"
                          aria-label="Visit our Threads page"
                        >
                          <MessageSquare className="w-6 h-6" />
                        </button>
                        
                        {/* LinkedIn */}
                        <button
                          onClick={handleLinkedInClick}
                          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0A66C2]/20 hover:bg-[#0A66C2]/40 text-[#F3E8D0] transition-all duration-300 hover:scale-110"
                          aria-label="Visit our LinkedIn page"
                        >
                          <Linkedin className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Map Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-6">Perfect Location</h3>
                <p className="opacity-90 mb-6">
                  We're conveniently located right beside the famous Casa Mexico 
                  restaurant on Merivale Road!
                </p>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="text-xl font-medium mb-4 text-[#3A7BF7]">
                    Find Us Easily
                  </h4>
                  <p className="opacity-90 mb-6">
                    Landmark-based directions for easy navigation
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#3A7BF7] text-white rounded-full w-8 h-8 flex items-center justify-center mt-1">
                        A
                      </div>
                      <div>
                        <h5 className="font-medium">Aurora Dream Mattress Studio</h5>
                        <p className="text-sm opacity-80">1489 Merivale Road, Unit E</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-[#FF6B6B] text-white rounded-full w-8 h-8 flex items-center justify-center mt-1">
                        C
                      </div>
                      <div>
                        <h5 className="font-medium">Casa Mexico Restaurant</h5>
                        <p className="text-sm opacity-80">Popular landmark next door</p>
                        <p className="text-sm opacity-80 mt-1">
                          Look for the vibrant Mexican restaurant – we're right beside it!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="text-xl font-medium mb-4 text-[#3A7BF7]">
                  Schedule Your Private Fitting
                </h4>
                <p className="opacity-90 mb-4">
                  Appointment-only for personalized service
                </p>
                <button
                  onClick={handleCalendlyClick}
                  className="inline-block bg-[#3A7BF7] text-white px-8 py-3 rounded-full hover:bg-[#2A5BD7] transition-colors font-medium"
                >
                  Book Your Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAurora;
