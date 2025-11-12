import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Ship, Factory, Droplets, Check } from "lucide-react";

// --- UPDATED IMAGE IMPORTS ---
// I've kept your original imports and added one for sandblasting
import paintingImage from "@/assets/marine-coating.jpg"; // Renamed for clarity
import fabricationImage from "@/assets/fabrication img.jpg";
import sandblastingImage from "@/assets/Sandblasting img.jpg"; // Assuming this path is correct

const blastingTypes = [
  "Grit Blasting (Aluminum oxide, Steel Grit, Chill Iron Grit)",
  "Copper Slag Blasting",
  "Shot Blasting",
  "Glass Bead Blasting",
  "Ceramic Blasting",
  "Garnet Blasting",
  "Corundum Blasting",
  "Rice Husk Blasting",
  "Quartz Blasting",
  "Mica Blasting"
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for industrial corrosion control and surface preparation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
        </div>

        {/* --- NEW SECTION-BASED LAYOUT --- */}
        <div className="space-y-24">

          {/* === SERVICE 1: SANDBLASTING === */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image on Left */}
            <div className="w-full h-96 group relative overflow-hidden rounded-xl shadow-2xl
                           transform transition-all duration-500 ease-in-out
                           hover:-translate-y-2 hover:shadow-primary/50 hover:shadow-lg">
              <img
                src={sandblastingImage}
                alt="Sandblasting & Surface Preparation"
                className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            {/* Content on Right */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary">Sandblasting & Surface Preparation</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide expert surface preparation using a wide variety of blasting techniques. Our precise methods meet the most stringent industry standards, including SSPC, SA 2.5, and SA 3, ensuring a perfectly prepared surface for any coating.
              </p>
              <h4 className="font-semibold text-xl text-white">Blasting Types Include:</h4>
              <ul className="space-y-2">
                {blastingTypes.map((type, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* === SERVICE 2: PAINTING === */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content on Left */}
            <div className="space-y-6 md:order-first"> {/* 'md:order-first' puts text on left for desktop */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Ship className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-3xl font-bold text-secondary">Marine, Industrial & Wall Painting</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We deliver high-performance coating solutions for any environment. From the harsh conditions of marine vessels to the specific needs of industrial facilities and commercial wall painting, our expert application ensures long-lasting protection and a flawless finish.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-xl text-white mb-2">Marine Applications:</h4>
                  <p className="text-muted-foreground">Ship hulls, ballast tanks, cargo holds, double bottoms, and all vessel superstructures.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-xl text-white mb-2">Industrial & Commercial:</h4>
                  <p className="text-muted-foreground">Storage tanks, pipelines, pressure vessels, structural steel, and high-finish commercial/residential wall painting.</p>
                </div>
              </div>
            </div>
            {/* Image on Right */}
            <div className="w-full h-96 group relative overflow-hidden rounded-xl shadow-2xl
                           transform transition-all duration-500 ease-in-out
                           hover:-translate-y-2 hover:shadow-secondary/50 hover:shadow-lg
                           md:order-last"> {/* 'md:order-last' puts image on right for desktop */}
              <img
                src={paintingImage}
                alt="Marine & Industrial Painting"
                className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          </div>

          {/* === SERVICE 3: FABRICATION === */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image on Left */}
            <div className="w-full h-96 group relative overflow-hidden rounded-xl shadow-2xl
                           transform transition-all duration-500 ease-in-out
                           hover:-translate-y-2 hover:shadow-primary/50 hover:shadow-lg">
              <img
                src={fabricationImage}
                alt="Fabrication Services"
                className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            {/* Content on Right */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Factory className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-primary">Fabrication Services</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our skilled team provides professional industrial fabrication for a diverse range of applications, built to your exact specifications.
              </p>
              <h4 className="font-semibold text-xl text-white">Capabilities:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Steel Structures</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Pressure Vessels</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Fuel Tankers (Internal & External)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Custom Industrial Fabrication</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
        {/* === END OF NEW SECTION-BASED LAYOUT === */}


        {/* Additional Services (Unchanged) */}
        <Card className="bg-gradient-to-r from-card via-card/50 to-card border-primary/20 mt-24">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Droplets className="w-10 h-10 text-primary" />
              <CardTitle className="text-2xl">Additional Specialized Services</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-2">Surface Treatment</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• High-Pressure Water Jetting</li>
                <li>• Power Tooling</li>
                <li>• Wet & Dry Blasting</li>
                <li>• Guniting Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-2">Coating Types</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Epoxy Coatings</li>
                <li>• Polyurethane Coatings</li>
                <li>• Zinc Silicate Coatings</li>
                <li>• Anti-Corrosive Coatings</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;