import React from 'react';
import { MapPin, Truck, Shield, Recycle, Clock, Home } from 'lucide-react';
import NavbarAurora from '@/components/NavbarAurora';
import FooterAurora from '@/components/FooterAurora';
import { DeliveryZoneSchema } from '@/components/DeliveryZoneSchema';

const BarrhavenMattressPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A3A57] to-[#0d2b42] text-white">
      <NavbarAurora />
      
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#F3E8D0]">
              Premium Mattress Delivery in <span className="text-[#FF6B35]">Barrhaven</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Family-owned mattress boutique serving all Barrhaven communities with <strong>free same-day delivery</strong>
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 p-6 rounded-xl">
                <Home className="w-10 h-10 mx-auto mb-3 text-[#FF6B35]" />
                <h3 className="text-lg font-bold mb-2">Family Focused</h3>
                <p className="text-sm text-gray-300">Perfect mattresses for growing Barrhaven families</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <Truck className="w-10 h-10 mx-auto mb-3 text-[#FF6B35]" />
                <h3 className="text-lg font-bold mb-2">Free Barrhaven Delivery</h3>
                <p className="text-sm text-gray-300">All neighborhoods included</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <Shield className="w-10 h-10 mx-auto mb-3 text-[#FF6B35]" />
                <h3 className="text-lg font-bold mb-2">Canadian Made</h3>
                <p className="text-sm text-gray-300">Premium quality, 10-year warranty</p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Barrhaven Coverage */}
            <div className="bg-white/5 rounded-xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-8 text-[#F3E8D0]">
                Serving All Barrhaven Communities
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#FF6B35]">Barrhaven Neighborhoods We Serve</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="font-bold mb-2">Chapman Mills</div>
                      <div className="text-sm">Free delivery • Same-day available</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="font-bold mb-2">Half Moon Bay</div>
                      <div className="text-sm">Quick delivery • Family packages</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="font-bold mb-2">Riverside South</div>
                      <div className="text-sm">Waterfront communities • Premium service</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="font-bold mb-2">Stonebridge</div>
                      <div className="text-sm">Golf course communities • Luxury mattresses</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#FF6B35]">Why Barrhaven Chooses Us</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-[#FF6B35] rounded-full p-1 mr-3 mt-1">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold">Local Knowledge</div>
                        <div className="text-sm text-gray-300">We know every Barrhaven street and community</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#FF6B35] rounded-full p-1 mr-3 mt-1">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold">Flexible Scheduling</div>
                        <div className="text-sm text-gray-300">Evening & weekend deliveries for busy families</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#FF6B35] rounded-full p-1 mr-3 mt-1">
                        <Recycle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold">Eco-Friendly Service</div>
                        <div className="text-sm text-gray-300">Free mattress disposal & recycling</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-[#0A3A57] to-[#1a5276] rounded-xl p-8 mb-12 border border-[#FF6B35]">
              <h2 className="text-3xl font-bold mb-4">Barrhaven's Preferred Mattress Store</h2>
              <p className="text-xl mb-6 text-gray-300">Serving 10,000+ Barrhaven homes since 2023</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/albochi-auroradream/30min?month=2025-12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FF6B35] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FF8E53] transition-colors"
                >
                  Schedule Barrhaven Delivery
                </a>
                <a 
                  href="tel:+16132900212"
                  className="inline-block bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors border border-white/30"
                >
                  Call: (613) 290-0212
                </a>
              </div>
            </div>

            <DeliveryZoneSchema />
          </div>
        </div>
      </main>

      <FooterAurora />
    </div>
  );
};

export default BarrhavenMattressPage;
