import AuroraSky from "@/components/AuroraSky";
import NavbarAurora from "@/components/NavbarAurora";
import MattressPage from "@/components/MattressPage";
import FooterAurora from "@/components/FooterAurora";
import amberImage from "@assets/Amber1_1765749259006.png";

export default function MattressAmber() {
  return (
    <div className="relative min-h-screen">
      <AuroraSky />
      <NavbarAurora />
      <main>
        <MattressPage
          name="AMBER"
          subtitle="Bunk Mattress · 4&quot; Profile"
          description="Amber is crafted with EcoTex™ soy-based microfiber foam for responsive comfort and dependable support. Resists body impressions while keeping its shape for long-lasting comfort."
          image={amberImage}
        />
      </main>
      <FooterAurora />
    </div>
  );
}
