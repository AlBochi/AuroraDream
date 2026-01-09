import React from 'react';
import { Truck, Shield, TrendingUp, Home } from 'lucide-react';
import NavbarAurora from '@/components/NavbarAurora';
import FooterAurora from '@/components/FooterAurora';
import { DeliveryZoneSchema } from '@/components/DeliveryZoneSchema';

const WestboroMattressPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A3A57] to-[#0d2b42] text-white">
      <NavbarAurora />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Luxury Mattress Boutique in Westboro Ottawa</h1>
          <p className="text-xl text-center mb-12">Premium sleep solutions for Westboro, Wellington West, and Hintonburg.</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-4">Why Westboro Chooses Aurora Dream</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-3 text-[#FF6B35]" />
                  <span>Premium mattresses for luxury Westboro homes</span>
                </li>
                <li className="flex items-center">
                  <Home className="w-5 h-5 mr-3 text-[#FF6B35]" />
                  <span>Same-day delivery to Wellington West area</span>
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 mr-3 text-[#FF6B35]" />
                  <span>10-year warranty on all Canadian-made mattresses</span>
                </li>
              </ul>
            </div>
            
            <DeliveryZoneSchema />
          </div>
        </div>
      </main>
      <FooterAurora />
    </div>
  );
};

export default WestboroMattressPage;
