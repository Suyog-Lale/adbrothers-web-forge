import { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Make sure these are imported
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ad-brothers-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="A&D Brothers Logo" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-primary">A&D BROTHERS</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Fabrication | Sandblasting | Painting</p>
            </div>
          </Link>

          {/* --- DESKTOP NAV --- */}
          <div className="hidden md:flex items-center gap-6">
            
            <NavLink
              to="/"
              end // The 'end' prop stops it from matching other pages
              className={({ isActive }) =>
                `text-sm hover:text-primary transition-colors ${isActive ? "text-primary font-medium" : ""}`
              }
            >
              Home
            </NavLink>
            
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-sm hover:text-primary transition-colors ${isActive ? "text-primary font-medium" : ""}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/equipment"
              className={({ isActive }) =>
                `text-sm hover:text-primary transition-colors ${isActive ? "text-primary font-medium" : ""}`
              }
            >
              Equipment
            </NavLink>

            {/* --- THIS IS THE CORRECTED "OUR WORK" LINK --- */}
            <NavLink
              to="/our-work"
              className={({ isActive }) =>
                `text-sm hover:text-primary transition-colors ${isActive ? "text-primary font-medium" : ""}`
              }
            >
              Our Work
            </NavLink>
            {/* --- The extra/broken links have been removed --- */}
            
            <NavLink
              to="/clients"
              className={({ isActive }) =>
                `text-sm hover:text-primary transition-colors ${isActive ? "text-primary font-medium" : ""}`
              }
            >
              Clients
            </NavLink>
            <Button asChild variant="hero" size="sm">
              <Link to="/get-quote">Get Quote</Link>
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

        {/* --- MOBILE NAV --- */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border space-y-4">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Home
            </Link>
            
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              to="/equipment"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Equipment
            </Link>

            {/* --- THIS IS THE CORRECT MOBILE LINK --- */}
            <Link
              to="/our-work"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Our Work
            </Link>

            <Link
              to="/clients"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left py-2 hover:text-primary transition-colors"
            >
              Clients
            </Link>
            <Button asChild variant="hero" className="w-full">
              <Link to="/get-quote" onClick={() => setIsOpen(false)}>
                Get Quote
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;