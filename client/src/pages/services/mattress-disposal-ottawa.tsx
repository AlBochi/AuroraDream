import React from 'react';
import { Recycle, Truck, Shield, DollarSign } from 'lucide-react';
import NavbarAurora from '@/components/NavbarAurora';
import FooterAurora from '@/components/FooterAurora';
import { DeliveryZoneSchema } from '@/components/DeliveryZoneSchema';

const MattressDisposalPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A3A57] to-[#0d2b42] text-white">
      <NavbarAurora />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Mattress Disposal Service Ottawa</h1>
          <p className="text-xl text-center mb-12">Eco-friendly mattress removal and recycling service across Ottawa-Gatineau.</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 p-6 rounded-xl">
                <Recycle className="w-12 h-12 mb-4 text-[#FF6B35]" />
                <h3 className="text-xl font-bold mb-3">Eco-Friendly Disposal</h3>
                <p>We recycle 95% of mattress materials. Foam, springs, and fabric are separated and sent to recycling facilities.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <Truck className="w-12 h-12 mb-4 text-[#FF6B35]" />
                <h3 className="text-xl font-bold mb-3">Free with Delivery</h3>
                <p>Old mattress removal is FREE when you purchase a new mattress from Aurora Dream. We haul it away for you.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-4">Service Areas for Mattress Disposal</h2>
              <p className="mb-4">We provide mattress disposal service to all Ottawa and Gatineau neighborhoods including:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div>• Kanata</div>
                <div>• Barrhaven</div>
                <div>• Nepean</div>
                <div>• Orleans</div>
                <div>• Gatineau</div>
                <div>• Stittsville</div>
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

export default MattressDisposalPage;
