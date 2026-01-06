import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProperOttawaMap from "@/components/ProperOttawaMap";
import { Truck, Clock, Shield, CheckCircle, Package, Home } from 'lucide-react';

const ServiceAreaPage = () => {
  return (
    <>
      <Helmet>
        <title>Service Area | Aurora Dream - Ottawa & Gatineau Mattress Delivery</title>
        <meta name="description" content="Free mattress delivery across Ottawa & Gatineau. We serve 150+ neighborhoods including Kanata, Barrhaven, Nepean, Orleans, Gatineau, and surrounding areas." />
        <link rel="canonical" href="https://auroradream.ca/service-area" />
        <meta property="og:title" content="Service Area - Aurora Dream Ottawa & Gatineau" />
        <meta property="og:description" content="Free mattress delivery across 150+ neighborhoods in Ottawa-Gatineau region" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mattress Delivery Service",
            "description": "Free mattress delivery across Ottawa & Gatineau",
            "areaServed": {
              "@type": "Place",
              "name": "Ottawa-Gatineau Region"
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "servicePhone": "+1-613-290-0212"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ottawa & Gatineau
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Service Area
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Free premium mattress delivery to <span className="text-green-400 font-bold">150+ neighborhoods</span> across the National Capital Region
            </p>
          </div>

          {/* Interactive Map */}
          <ProperOttawaMap />

          {/* Delivery Information */}
          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center mb-10">Premium Delivery Service</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 text-center">
                <Truck className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Free Delivery</h3>
                <p className="text-gray-400">No delivery charges for Ottawa & Gatineau. Professional setup included.</p>
              </div>
              
              <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 text-center">
                <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Same-Day Available</h3>
                <p className="text-gray-400">Express delivery options for urgent needs. Call before 2 PM.</p>
              </div>
              
              <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 text-center">
                <Shield className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Professional Setup</h3>
                <p className="text-gray-400">White-glove delivery. We assemble and position your mattress.</p>
              </div>
              
              <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 text-center">
                <Package className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Old Mattress Removal</h3>
                <p className="text-gray-400">We'll remove your old mattress for free and dispose of it properly.</p>
              </div>
              
              <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 text-center">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Quality Check</h3>
                <p className="text-gray-400">Every mattress is inspected before delivery for perfect condition.</p>
              </div>
              
              <div className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700 text-center">
                <Home className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Room-of-Choice</h3>
                <p className="text-gray-400">We deliver to any room in your home, apartment, or condo.</p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-green-400">What areas do you serve?</h4>
                  <p className="text-gray-300">
                    We serve all of Ottawa, Gatineau, and surrounding areas including Kanata, Barrhaven, Nepean, Orleans, Centretown, Westboro, Gatineau (Hull), Aylmer, Buckingham, Kemptville, Rockland, and 140+ more neighborhoods.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-green-400">Is delivery really free?</h4>
                  <p className="text-gray-300">
                    Yes! Delivery is completely free for all orders within our service area. This includes professional setup and old mattress removal. No hidden fees.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-green-400">How long does delivery take?</h4>
                  <p className="text-gray-300">
                    Standard delivery: 2-5 business days. Express delivery: Same-day or next-day available for Ottawa and Gatineau when ordered before 2 PM.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-green-400">Do you deliver to apartments and condos?</h4>
                  <p className="text-gray-300">
                    Yes! We deliver to apartments, condos, townhouses, and single-family homes. Our team will bring the mattress to your room of choice, regardless of floor level.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6">
              <a
                href="tel:+16132900212"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 text-lg"
              >
                📞 Call Now: (613) 290-0212
                <span className="ml-3 text-sm font-normal opacity-90">Free Consultation</span>
              </a>
              
              <a
                href="/products"
                className="inline-flex items-center text-gray-300 hover:text-white font-semibold text-lg"
              >
                🛏️ Browse Mattresses
              </a>
            </div>
            
            <p className="text-gray-500 mt-6">
              Serving Ottawa-Gatineau since 2023 • 150+ night sleep trial • 10-year warranty • Eco-friendly disposal
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAreaPage;
