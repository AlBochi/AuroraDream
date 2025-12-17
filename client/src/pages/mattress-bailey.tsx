import AuroraSky from "@/components/AuroraSky";
import NavbarAurora from "@/components/NavbarAurora";
import MattressPage from "@/components/MattressPage";
import FooterAurora from "@/components/FooterAurora";
import baileyImage from "@assets/Bailey2_1765749259005.png";

export default function MattressBailey() {
  return (
    <div className="relative min-h-screen">
      <AuroraSky />
      <NavbarAurora />
      <main>
        <MattressPage
          name="BAILEY"
          subtitle="Bunk Mattress · 5&quot; Profile"
          description="Bailey features EcoTex™ soy-based luxury foam with an extra-deep 5&quot; profile for superior comfort and support. Maintains its shape and delivers long-lasting relaxation."
          image={baileyImage}
        />
      </main>
      <FooterAurora />
    </div>
  );
}
