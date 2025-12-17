import AuroraSky from "@/components/AuroraSky";
import NavbarAurora from "@/components/NavbarAurora";
import MattressPage from "@/components/MattressPage";
import FooterAurora from "@/components/FooterAurora";
import carlisleImage from "@assets/Carlisle3_1765749259002.png";

export default function MattressCarlisle() {
  return (
    <div className="relative min-h-screen">
      <AuroraSky />
      <NavbarAurora />
      <main>
        <MattressPage
          name="CARLISLE"
          subtitle="Foam Mattress · 6&quot; Profile"
          description="Carlisle combines EcoTex™ soy-based foam with custom-milled fabrics and premium covers for lasting durability and luxurious comfort. Dual quilted layers offer cradling support, pressure relief, and long-lasting performance."
          image={carlisleImage}
        />
      </main>
      <FooterAurora />
    </div>
  );
}
