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

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AuroraSky />
      <NavbarAurora />
      <main>
        <HeroAurora />
        <ProductsAurora />
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
