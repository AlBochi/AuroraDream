import React from 'react';
import AuroraSky from "@/components/AuroraSky";
import NavbarAurora from "@/components/NavbarAurora";
import HeroAurora from "@/components/HeroAurora";
import ProductsAurora from "@/components/ProductsAurora";
import OurPartnersAurora from "@/components/OurPartnersAurora";
import AboutAurora from "@/components/AboutAurora";
import ReviewsAurora from "@/components/ReviewsAurora";
import ContactAurora from "@/components/ContactAurora";
import FooterAurora from "@/components/FooterAurora";
import ThemedSection from "@/components/ThemedSection";
import { lazy } from 'react';
const ProperOttawaMap = lazy(() => import("@/components/ProperOttawaMap"));

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AuroraSky />
      <NavbarAurora />
      <main>
        <HeroAurora />
        <ProductsAurora />
        {/* Interactive Service Area Map */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-gray-900/20 to-black/40">
          <div className="container mx-auto px-4">
            <React.Suspense fallback={<div className="h-64 flex items-center justify-center"><div className="text-gray-500">Loading service area map...</div></div>}>
            <ProperOttawaMap />
          </React.Suspense>
          </div>
        </section>

        <ThemedSection variant={1}>
          <OurPartnersAurora />
        </ThemedSection>
        <AboutAurora />
        <ThemedSection variant={2}>
          <ReviewsAurora />
        </ThemedSection>
        <ContactAurora />
      </main>
      <FooterAurora />
    </div>
  );
}