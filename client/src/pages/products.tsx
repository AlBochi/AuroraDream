import SandBackground from "@/components/SandBackground";
import NavbarAurora from "@/components/NavbarAurora";
import ProductsPage from "@/components/ProductsPage";
import FooterProducts from "@/components/FooterProducts";

export default function Products() {
  return (
    <div className="relative min-h-screen">
      <SandBackground />
      <NavbarAurora />
      <main>
        <ProductsPage />
      </main>
      <FooterProducts />
    </div>
  );
}
