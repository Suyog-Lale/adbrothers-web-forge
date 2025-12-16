import { Link } from "react-router-dom";
import logo from "@/assets/ad-brothers-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side - Compact Brand & Copyright */}
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="A&D Brothers" 
            className="w-10 h-10 object-contain rounded-sm" 
          />
          <div>
            <p className="text-sm font-medium text-foreground">
              © {currentYear} A&D Brothers.
            </p>
            <p className="text-xs text-muted-foreground">
              All rights reserved.
            </p>
          </div>
        </div>

        {/* Right Side - Minimal Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/equipment" className="hover:text-primary transition-colors">
            Equipment
          </Link>
          <Link to="/our-work" className="hover:text-primary transition-colors">
            Our Work
          </Link>
          <Link to="/clients" className="hover:text-primary transition-colors">
            Clients
          </Link>
          {/* Links to the Get Quote page as a contact option */}
          <Link to="/get-quote" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;