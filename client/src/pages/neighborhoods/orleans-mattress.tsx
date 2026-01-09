import React from 'react';
import { Truck, Shield, Star, Clock } from 'lucide-react';
import NavbarAurora from '@/components/NavbarAurora';
import FooterAurora from '@/components/FooterAurora';
import { DeliveryZoneSchema } from '@/components/DeliveryZoneSchema';

const OrleansMattressPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A3A57] to-[#0d2b42] text-white">
      <NavbarAurora />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Premium Mattress Store in Orleans Ottawa</h1>
          <p className="text-xl text-center mb-12">Luxury mattresses with free delivery to all Orleans neighborhoods.</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-6">Orleans Service Areas</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-white/10 rounded-lg">
                  <div className="font-bold">Avalon</div>
                  <div className="text-sm">Free delivery</div>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <div className="font-bold">Notre-Dame</div>
                  <div className="text-sm">Same-day available</div>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <div className="font-bold">Chaparral</div>
                  <div className="text-sm">Family packages</div>
                </div>
                <div className="p-4 bg-white/10 rounded-lg">
                  <div className="font-bold">Convent Glen</div>
                  <div className="text-sm">10-year warranty</div>
                </div>
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

export default OrleansMattressPage;
