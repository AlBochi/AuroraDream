import React from 'react';
import { MapPin, Truck, Shield, Recycle, Clock, Star } from 'lucide-react';
import NavbarAurora from '@/components/NavbarAurora';
import FooterAurora from '@/components/FooterAurora';
import { DeliveryZoneSchema } from '@/components/DeliveryZoneSchema';

const KanataMattressPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A3A57] to-[#0d2b42] text-white">
      <NavbarAurora />
      
      <main className="pt-28 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#F3E8D0]">
              Mattress Store & Delivery in <span className="text-[#FF6B35]">Kanata</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Premium Canadian-made mattresses with <strong>free delivery</strong> to all Kanata neighborhoods
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white/10 p-4 rounded-lg">
                <Truck className="w-8 h-8 mx-auto mb-2 text-[#FF6B35]" />
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm">Delivery</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <Clock className="w-8 h-8 mx-auto mb-2 text-[#FF6B35]" />
                <div className="text-2xl font-bold">Same-Day</div>
                <div className="text-sm">Available</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <Shield className="w-8 h-8 mx-auto mb-2 text-[#FF6B35]" />
                <div className="text-2xl font-bold">10-Year</div>
                <div className="text-sm">Warranty</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <Recycle className="w-8 h-8 mx-auto mb-2 text-[#FF6B35]" />
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm">Disposal</div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto">
            {/* Why Kanata Chooses Us */}
            <div className="bg-white/5 rounded-xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 text-[#F3E8D0]">
                Why Kanata Residents Choose Aurora Dream
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#FF6B35]">Local Expertise</h3>
                  <p className="text-gray-300 mb-4">
                    Serving Kanata since 2023, we understand the unique needs of our community. 
                    From tech professionals in Kanata North to families in Bridlewood, we deliver 
                    the perfect sleep solution for every home.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Star className="w-5 h-5 mr-2 text-[#FF6B35]" />
                      <span>Kanata North & South coverage</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="w-5 h-5 mr-2 text-[#FF6B35]" />
                      <span>Bridlewood, Glen Cairn, Beaverbrook</span>
                    </li>
                    <li className="flex items-center">
                      <Star className="w-5 h-5 mr-2 text-[#FF6B35]" />
                      <span>Morgan's Grant, March Road areas</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-[#FF6B35]">Fast Kanata Delivery</h3>
                  <p className="text-gray-300 mb-4">
                    Most Kanata deliveries completed within <strong>2-4 hours</strong>. 
                    We know the best routes to avoid traffic and ensure your mattress 
                    arrives when you need it.
                  </p>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <div className="font-bold text-lg mb-2">Kanata Delivery Areas:</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>• Kanata North</div>
                      <div>• Kanata South</div>
                      <div>• Bridlewood</div>
                      <div>• Glen Cairn</div>
                      <div>• Beaverbrook</div>
                      <div>• Morgan's Grant</div>
                      <div>• Katimavik</div>
                      <div>• Hazeldean</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready for Better Sleep in Kanata?</h2>
              <p className="text-xl mb-6">Free delivery • Same-day available • 10-year warranty</p>
              <a 
                href="https://calendly.com/albochi-auroradream/30min?month=2025-12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#0A3A57] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Book Kanata Delivery
              </a>
            </div>

            {/* Schema for this specific page */}
            <DeliveryZoneSchema />
          </div>
        </div>
      </main>

      <FooterAurora />
    </div>
  );
};

export default KanataMattressPage;
