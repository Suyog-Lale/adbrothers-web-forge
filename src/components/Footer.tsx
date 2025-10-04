import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/ad-brothers-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="A&D Brothers" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold text-primary">A&D BROTHERS</h3>
                <p className="text-xs text-muted-foreground">Fabrication | Sandblasting | Painting</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Trusted solutions for corrosion control, precision coating, and industrial fabrication. Excellence in every project since our inception.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("equipment")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary transition-colors">
                  Equipment
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary transition-colors">
                  Get Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+918149145285" className="block hover:text-primary transition-colors">
                    +91 8149145285
                  </a>
                  <a href="tel:+919765135325" className="block hover:text-primary transition-colors">
                    +91 9765135325
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:adbrothers26@gmail.com" className="hover:text-primary transition-colors break-all">
                  adbrothers26@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  At. Navandhe, Tal: Khalapur<br />
                  Dist: Raigad, Maharashtra
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} A&D Brothers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
