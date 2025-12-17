import AuroraSky from "@/components/AuroraSky";
import NavbarAurora from "@/components/NavbarAurora";
import ProductsPage from "@/components/ProductsPage";
import FooterAurora from "@/components/FooterAurora";

export default function Products() {
  return (
    <div className="relative min-h-screen">
      <AuroraSky />
      <NavbarAurora />
      <main>
        <ProductsPage />
      </main>
      <FooterAurora />
    </div>
  );
}
