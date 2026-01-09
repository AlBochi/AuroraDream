import React from 'react';
import { Truck, Shield, Home, MapPin } from 'lucide-react';
import NavbarAurora from '@/components/NavbarAurora';
import FooterAurora from '@/components/FooterAurora';
import { DeliveryZoneSchema } from '@/components/DeliveryZoneSchema';

const StittsvilleMattressPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A3A57] to-[#0d2b42] text-white">
      <NavbarAurora />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Mattress Delivery in Stittsville Ottawa</h1>
          <p className="text-xl text-center mb-12">Free premium mattress delivery to Stittsville, Fernbank, and surrounding areas.</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 p-6 rounded-lg">
                <Truck className="w-10 h-10 mx-auto mb-3 text-[#FF6B35]" />
                <div className="text-center">
                  <div className="text-2xl font-bold">Free Delivery</div>
                  <div className="text-sm">Stittsville areas included</div>
                </div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <Shield className="w-10 h-10 mx-auto mb-3 text-[#FF6B35]" />
                <div className="text-center">
                  <div className="text-2xl font-bold">10-Year Warranty</div>
                  <div className="text-sm">Canadian-made quality</div>
                </div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <Home className="w-10 h-10 mx-auto mb-3 text-[#FF6B35]" />
                <div className="text-center">
                  <div className="text-2xl font-bold">Family Service</div>
                  <div className="text-sm">Serving Stittsville families</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-4">Stittsville Mattress Delivery Areas</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white/5 rounded">• Fernbank</div>
                <div className="p-3 bg-white/5 rounded">• Fairwinds</div>
                <div className="p-3 bg-white/5 rounded">• Glen Cairn</div>
                <div className="p-3 bg-white/5 rounded">• Stittsville Main</div>
                <div className="p-3 bg-white/5 rounded">• Carp Road</div>
                <div className="p-3 bg-white/5 rounded">• Hazeldean</div>
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

export default StittsvilleMattressPage;
