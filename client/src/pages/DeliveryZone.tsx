import React from "react";
import NavbarAurora from "@/components/NavbarAurora";
import FooterAurora from "@/components/FooterAurora";
import ProperOttawaMap from "@/components/ProperOttawaMap";

export default function DeliveryZone() {
  return (
    <>
      <NavbarAurora />
      
      {/* Main content with MORE top padding to clear header completely */}
      <main className="min-h-screen bg-gradient-to-b from-[#0A3A57] to-[#0d2b42] pt-28 md:pt-32">
        
        {/* Hero Section - EVEN MORE margin-top to ensure full visibility */}
        <div className="pb-12 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            {/* Increased to mt-12 for more space below header */}
            <div className="mt-12 md:mt-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Aurora Dream <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Delivery Zone</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Free premium mattress delivery across Ottawa, Gatineau, and surrounding areas
              </p>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-2xl mb-2">🚚</div>
                <p className="text-sm font-medium text-white">Free Delivery</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-2xl mb-2">⚡</div>
                <p className="text-sm font-medium text-white">Same-Day Available</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-2xl mb-2">🛡️</div>
                <p className="text-sm font-medium text-white">10-Year Warranty</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                <div className="text-2xl mb-2">♻️</div>
                <p className="text-sm font-medium text-white">Mattress Disposal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="px-4 pb-20">
          <div className="container mx-auto max-w-7xl">
            <ProperOttawaMap />
          </div>
        </div>

        {/* Additional Delivery Info */}
        <div className="px-4 pb-20">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Delivery Information</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-4">📦 What's Included</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span><strong>Free delivery</strong> to all service areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span><strong>White glove service</strong> - we bring it in, set it up</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span><strong>Packaging removal</strong> - we take all packaging materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span><strong>Old mattress disposal</strong> - eco-friendly removal</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">⏰ Delivery Times</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Same-day delivery</strong> for orders before 2 PM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Next-day delivery</strong> for orders after 2 PM</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Weekend delivery</strong> available (Saturday & Sunday)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><strong>Evening delivery</strong> available upon request</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <a 
                  href="tel:+16132900212"
                  className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 mr-4"
                >
                  📞 Call to Schedule: (613) 290-0212
                </a>
                <a 
                  href="https://calendly.com/albochi-auroradream/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/20 text-white font-bold px-8 py-4 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  📅 Book Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FooterAurora />
    </>
  );
}
