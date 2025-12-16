import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ad-brothers-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper class for consistent link styling
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? "text-primary" : "text-muted-foreground"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        
        {/* Main Navbar Container */}
        <div className="flex items-center justify-between h-20"> {/* Increased height slightly for better vertical centering */}
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="A&D Brothers Logo" className="w-10 h-10 object-contain rounded-sm" />
            <div>
              <h1 className="text-lg font-bold text-primary tracking-tight">A&D BROTHERS</h1>
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/equipment" className={navLinkClass}>
              Equipment
            </NavLink>
            <NavLink to="/our-work" className={navLinkClass}>
              Our Work
            </NavLink>
            <NavLink to="/clients" className={navLinkClass}>
              Clients
            </NavLink>
            {/* Contact is now a simple link, pointing to the quote/contact page */}
            <NavLink to="/get-quote" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* --- MOBILE NAVIGATION DROPDOWN --- */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-card">
            <div className="flex flex-col space-y-4 px-2">
              <NavLink 
                to="/" 
                end
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-2 rounded-md hover:bg-accent ${isActive ? "text-primary font-medium" : "text-foreground"}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/services" 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-2 rounded-md hover:bg-accent ${isActive ? "text-primary font-medium" : "text-foreground"}`
                }
              >
                Services
              </NavLink>
              <NavLink 
                to="/equipment" 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-2 rounded-md hover:bg-accent ${isActive ? "text-primary font-medium" : "text-foreground"}`
                }
              >
                Equipment
              </NavLink>
              <NavLink 
                to="/our-work" 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-2 rounded-md hover:bg-accent ${isActive ? "text-primary font-medium" : "text-foreground"}`
                }
              >
                Our Work
              </NavLink>
              <NavLink 
                to="/clients" 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-2 rounded-md hover:bg-accent ${isActive ? "text-primary font-medium" : "text-foreground"}`
                }
              >
                Clients
              </NavLink>
              <NavLink 
                to="/get-quote" 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-2 rounded-md hover:bg-accent ${isActive ? "text-primary font-medium" : "text-foreground"}`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;