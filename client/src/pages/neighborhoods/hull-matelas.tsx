import React from 'react';
import { Truck, Shield, Globe, Home } from 'lucide-react';
import NavbarAurora from '@/components/NavbarAurora';
import FooterAurora from '@/components/FooterAurora';
import { DeliveryZoneSchema } from '@/components/DeliveryZoneSchema';

const HullMatelasPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A3A57] to-[#0d2b42] text-white">
      <NavbarAurora />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Livraison de Matelas à Hull Gatineau</h1>
          <p className="text-xl text-center mb-12">Matelas premium avec livraison gratuite à Hull, Vieux-Hull et secteurs environnants.</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-4">Secteurs Desservis à Hull</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/10 rounded">• Vieux-Hull</div>
                <div className="p-4 bg-white/10 rounded">• Plateau</div>
                <div className="p-4 bg-white/10 rounded">• Lac-des-Fées</div>
                <div className="p-4 bg-white/10 rounded">• Parc-de-la-Montagne</div>
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

export default HullMatelasPage;
