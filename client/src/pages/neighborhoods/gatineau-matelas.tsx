import React from 'react';
import { MapPin, Truck, Shield, Recycle, Clock, Globe } from 'lucide-react';
import NavbarAurora from '@/components/NavbarAurora';
import FooterAurora from '@/components/FooterAurora';
import { DeliveryZoneSchema } from '@/components/DeliveryZoneSchema';

const GatineauMatelasPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A3A57] to-[#0d2b42] text-white">
      <NavbarAurora />
      
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#F3E8D0]">
              Livraison de Matelas à <span className="text-[#FF6B35]">Gatineau</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Matelas premium canadiens avec <strong>livraison gratuite</strong> à Gatineau, Hull, Aylmer et secteurs environnants
            </p>
            
            {/* French Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white/10 p-4 rounded-lg">
                <Truck className="w-8 h-8 mx-auto mb-2 text-[#FF6B35]" />
                <div className="text-2xl font-bold">Gratuite</div>
                <div className="text-sm">Livraison</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <Clock className="w-8 h-8 mx-auto mb-2 text-[#FF6B35]" />
                <div className="text-2xl font-bold">Même Jour</div>
                <div className="text-sm">Disponible</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <Shield className="w-8 h-8 mx-auto mb-2 text-[#FF6B35]" />
                <div className="text-2xl font-bold">10 Ans</div>
                <div className="text-sm">Garantie</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <Recycle className="w-8 h-8 mx-auto mb-2 text-[#FF6B35]" />
                <div className="text-2xl font-bold">Écologique</div>
                <div className="text-sm">Retrait</div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* French Content */}
            <div className="bg-white/5 rounded-xl p-8 mb-12">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 mr-3 text-[#FF6B35]" />
                <h2 className="text-3xl font-bold text-[#F3E8D0]">
                  Service Français à Gatineau
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#FF6B35]">Secteurs Desservis</h3>
                  <div className="bg-white/10 p-6 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="font-bold mb-2 text-[#FF6B35]">Gatineau</div>
                        <ul className="space-y-1 text-sm">
                          <li>• Plateau</li>
                          <li>• Lac-Beauchamp</li>
                          <li>• Touraine</li>
                          <li>• Cité-des-Jeunes</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-bold mb-2 text-[#FF6B35]">Hull & Aylmer</div>
                        <ul className="space-y-1 text-sm">
                          <li>• Vieux-Hull</li>
                          <li>• Deschênes</li>
                          <li>• Lucerne</li>
                          <li>• Parc-de-la-Montagne</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-[#FF6B35]/20 to-transparent rounded-lg border-l-4 border-[#FF6B35]">
                    <div className="font-bold mb-2">📞 Service en Français:</div>
                    <div className="text-lg">(613) 290-0212</div>
                    <div className="text-sm text-gray-300">Parlez directement avec notre équipe francophone</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#FF6B35]">Pourquoi Nous Choisir?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-[#FF6B35] rounded-full p-1 mr-3 mt-1">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold">Connaissance Locale</div>
                        <div className="text-sm text-gray-300">Nous connaissons tous les quartiers de Gatineau</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#FF6B35] rounded-full p-1 mr-3 mt-1">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold">Matelas Canadiens</div>
                        <div className="text-sm text-gray-300">Fabrication locale, qualité supérieure</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-[#FF6B35] rounded-full p-1 mr-3 mt-1">
                        <Recycle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold">Service Écologique</div>
                        <div className="text-sm text-gray-300">Recyclage gratuit de votre vieux matelas</div>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-6 bg-white/5 rounded-lg">
                    <div className="font-bold text-lg mb-2">🏠 Livraison Gratuite à Domicile:</div>
                    <div className="text-sm text-gray-300">
                      Nous livrons directement chez vous à Gatineau. Installation incluse, 
                      retrait de l'ancien matelas gratuit.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* French CTA */}
            <div className="text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-xl p-8 mb-12">
              <h2 className="text-3xl font-bold mb-4">Prêt pour un Meilleur Sommeil à Gatineau?</h2>
              <p className="text-xl mb-6">Livraison gratuite • Service même jour • Garantie 10 ans</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/albochi-auroradream/30min?month=2025-12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#0A3A57] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  Réserver la Livraison
                </a>
                <a 
                  href="tel:+16132900212"
                  className="inline-block bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
                >
                  Appeler: (613) 290-0212
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

export default GatineauMatelasPage;
