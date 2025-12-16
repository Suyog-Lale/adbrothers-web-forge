import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Ship, Factory, Droplets, Check, ArrowRight, Hammer, Layers } from "lucide-react";

// --- IMAGE IMPORTS ---
import paintingImage from "@/assets/marine-coating.jpg";
import fabricationImage from "@/assets/fabrication img.jpg";
import sandblastingImage from "@/assets/Sandblasting img.jpg";

const blastingTypes = [
  "Grit Blasting", "Copper Slag", "Shot Blasting",
  "Glass Bead", "Ceramic", "Garnet",
  "Corundum", "Rice Husk", "Quartz", "Mica"
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Industrial Excellence</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Engineering resilience through advanced coating, precise fabrication, and master-class surface preparation.
          </p>
        </div>

        <div className="space-y-32">

          {/* === SERVICE 1: SANDBLASTING (Modernized) === */}
          <div className="grid lg:grid-cols-2 gap-16 items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={sandblastingImage}
                  alt="Sandblasting"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="p-3 rounded-lg bg-primary/10 text-primary"><Layers className="w-8 h-8" /></span>
                  Surface Preparation
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The foundation of every great coating is preparation. We execute precise blasting techniques meeting <span className="text-white font-semibold">SSPC & SA 2.5/3</span> standards.
                </p>
              </div>

              {/* The "Tag Cloud" Look for Blasting Types */}
              <div>
                <h4 className="text-sm font-uppercase tracking-wider text-primary font-semibold mb-4">BLASTING MEDIA CAPABILITIES</h4>
                <div className="flex flex-wrap gap-3">
                  {blastingTypes.map((type, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 rounded-lg bg-secondary/5 border border-secondary/20 text-muted-foreground hover:text-white hover:bg-secondary/20 hover:border-secondary transition-all cursor-default text-sm"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* === SERVICE 2: PAINTING (Card Style Layout) === */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="p-3 rounded-lg bg-secondary/10 text-secondary"><Ship className="w-8 h-8" /></span>
                  Marine & Industrial Coating
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  High-performance protection for the harshest environments. We ensure longevity through expert application.
                </p>
              </div>

              {/* Split into two clear interactive cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-card border border-white/5 hover:border-secondary/50 transition-colors group">
                  <div className="mb-3 text-secondary group-hover:scale-110 transition-transform origin-left">
                    <Ship className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Marine</h4>
                  <p className="text-sm text-muted-foreground">Hulls, ballast tanks, cargo holds, and superstructures.</p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-colors group">
                  <div className="mb-3 text-primary group-hover:scale-110 transition-transform origin-left">
                    <Factory className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Industrial</h4>
                  <p className="text-sm text-muted-foreground">Storage tanks, pipelines, pressure vessels & structural steel.</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-bl from-secondary/20 to-transparent rounded-2xl transform -translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={paintingImage}
                  alt="Marine Painting"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* === SERVICE 3: FABRICATION (Feature List) === */}
          <div className="grid lg:grid-cols-2 gap-16 items-center group">
             <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={fabricationImage}
                  alt="Fabrication"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="p-3 rounded-lg bg-primary/10 text-primary"><Hammer className="w-8 h-8" /></span>
                  Heavy Fabrication
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Built to exact specifications. Our fabrication team handles complex structural requirements with precision engineering.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Heavy Steel Structures",
                  "Pressure Vessels",
                  "Fuel Tankers (Internal & External)",
                  "Custom Industrial Fabrication"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-white/5 hover:bg-card transition-colors">
                    <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_theme(colors.primary.DEFAULT)]" />
                    <span className="font-medium text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* === ADDITIONAL SERVICES GRID === */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Specialized Capabilities</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Card className="bg-gradient-to-b from-card to-background border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 pt-8">
                <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Droplets size={24} />
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">Surface Treatment</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><ArrowRight size={12} className="text-primary"/> High-Pressure Jetting</li>
                  <li className="flex items-center gap-2"><ArrowRight size={12} className="text-primary"/> Wet & Dry Blasting</li>
                  <li className="flex items-center gap-2"><ArrowRight size={12} className="text-primary"/> Guniting Services</li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-gradient-to-b from-card to-background border-white/5 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 pt-8">
                <div className="mb-4 h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Layers size={24} />
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">Advanced Coatings</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><ArrowRight size={12} className="text-secondary"/> Epoxy Systems</li>
                  <li className="flex items-center gap-2"><ArrowRight size={12} className="text-secondary"/> Polyurethane</li>
                  <li className="flex items-center gap-2"><ArrowRight size={12} className="text-secondary"/> Zinc Silicate</li>
                </ul>
              </CardContent>
            </Card>

             {/* Card 3 (Placeholder for balance - Visual Appeal) */}
             <Card className="bg-gradient-to-b from-card to-background border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 pt-8">
                <div className="mb-4 h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Hammer size={24} />
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">Power Tooling</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Precision mechanical cleaning using industry-standard power tools for areas where blasting is not feasible.
                </p>
              </CardContent>
            </Card>

             {/* Card 4 (Placeholder) */}
             <Card className="bg-gradient-to-b from-card to-background border-white/5 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 pt-8">
                <div className="mb-4 h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <Check size={24} />
                </div>
                <h4 className="text-lg font-bold mb-3 text-white">Quality Assurance</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every micron counts. We provide detailed inspection reports and DFT measurements for all projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;