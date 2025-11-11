// src/components/Hero.tsx

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-sandblasting.jpg";
import { Link } from "react-router-dom"; // 1. IMPORT LINK

const Hero = () => {
  // 2. REMOVED the old scrollToQuote function

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Trusted Solutions for</span>{" "}
            <span className="text-primary bg-clip-text">Corrosion Control</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Expert <span className="text-secondary font-semibold">Sandblasting</span>,{" "}
            <span className="text-primary font-semibold">Coating</span>, and{" "}
            <span className="text-secondary font-semibold">Fabrication</span> services
            for Marine, Industrial, and Commercial applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            
            {/* 3. UPDATED "Request Free Quote" Button */}
            <Button asChild variant="hero" size="lg" className="group">
              <Link to="/get-quote">
                Request Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            {/* 4. UPDATED "Explore Services" Button */}
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Quick Stats (no changes needed) */}
          <div className="grid grid-cols-3 gap-6 mt-16">
            <div className="border-l-2 border-primary pl-4">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="border-l-2 border-secondary pl-4">
              <div className="text-3xl font-bold text-secondary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Complete</div>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Quality Standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;