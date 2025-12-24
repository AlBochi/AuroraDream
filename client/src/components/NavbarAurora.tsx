import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/LogoFinal.jpg";

const navItems = [
  { label: "About", href: "/#about", isSection: true },
  { label: "Our Products", href: "/products", isSection: false },
  { label: "FAQ", href: "/faq", isSection: false },
  { label: "Book an Appointment", href: "https://calendly.com/albochi-auroradream/30min?month=2025-12", isSection: false },
  { label: "Contact Us", href: "/#contact", isSection: true },
];

export default function NavbarAurora() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isSection: boolean) => {
    setIsMobileMenuOpen(false);
    
    if (!isSection) {
      // Check if it's an external URL (like Calendly)
      if (href.startsWith("http")) {
        window.open(href, "_blank");
      } else {
        setLocation(href);
      }
      return;
    }

    if (href.startsWith("/#")) {
      const sectionId = href.substring(1);
      if (location !== "/") {
        setLocation("/");
        setTimeout(() => {
          const element = document.querySelector(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleLogoClick = () => {
    if (location !== "/") {
      setLocation("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-background/70 backdrop-blur-sm"
      }`}
      data-testid="navbar"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 md:h-36">
          {/* Logo on the left */}
          <button
            onClick={handleLogoClick}
            className="flex-shrink-0"
            data-testid="link-logo"
          >
            <img
              src={logoImage}
              alt="Aurora Dream"
              className="h-20 sm:h-28 md:h-32 w-auto"
              data-testid="img-logo"
            />
          </button>

          {/* Navigation Menu - Now visible next to logo on desktop */}
          <div className="flex-1 flex justify-end items-center">
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.href + item.label}
                  onClick={() => handleNavClick(item.href, item.isSection)}
                  className="px-5 py-3 text-lg font-bold text-foreground hover:text-foreground transition-colors rounded-md hover:bg-background/50 border-b-2 border-transparent hover:border-foreground/30"
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6" data-testid="mobile-menu">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href + item.label}
                  onClick={() => handleNavClick(item.href, item.isSection)}
                  className="px-6 py-4 text-left text-xl font-bold text-foreground/90 hover:text-foreground hover:bg-background/50 rounded-md transition-colors border-l-4 border-foreground/50"
                  data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}