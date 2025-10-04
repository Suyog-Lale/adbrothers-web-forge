import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ad-brothers-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 text-xs border-b border-border/50">
          <a href="tel:+918149145285" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-3 h-3" />
            <span>+91 8149145285 / 9765135325</span>
          </a>
          <a href="mailto:adbrothers26@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-3 h-3" />
            <span>adbrothers26@gmail.com</span>
          </a>
        </div>

        {/* Main navbar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="A&D Brothers Logo" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-primary">A&D BROTHERS</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Fabrication | Sandblasting | Painting</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("equipment")} className="text-sm hover:text-primary transition-colors">
              Equipment
            </button>
            <button onClick={() => scrollToSection("clients")} className="text-sm hover:text-primary transition-colors">
              Clients
            </button>
            <Button variant="hero" onClick={() => scrollToSection("quote")} size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border space-y-4">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left py-2 hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("equipment")} className="block w-full text-left py-2 hover:text-primary transition-colors">
              Equipment
            </button>
            <button onClick={() => scrollToSection("clients")} className="block w-full text-left py-2 hover:text-primary transition-colors">
              Clients
            </button>
            <Button variant="hero" onClick={() => scrollToSection("quote")} className="w-full">
              Get Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
