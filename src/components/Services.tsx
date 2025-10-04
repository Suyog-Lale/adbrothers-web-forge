import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Ship, Factory, Droplets } from "lucide-react";
import marineImage from "@/assets/marine-coating.jpg";
import fabricationImage from "@/assets/fabrication.jpg";

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

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Sandblasting */}
          <Card className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-gold)] group">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">Sandblasting & Surface Preparation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Expert surface preparation using various blasting techniques, meeting SSPC, SA 2.5, and SA 3 standards.
              </p>
              <div className="flex flex-wrap gap-2">
                {blastingTypes.map((type, index) => (
                  <Badge key={index} variant="outline" className="border-primary/30 text-xs">
                    {type}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Marine & Industrial Coatings */}
          <Card className="bg-card/80 backdrop-blur border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-[var(--shadow-red)] group">
            <CardHeader>
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Ship className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl text-secondary">Marine & Industrial Painting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <img src={marineImage} alt="Marine Coating" className="w-full h-48 object-cover rounded-lg mb-4" />
              <p className="text-muted-foreground">
                Comprehensive coating solutions for marine vessels and industrial applications.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Marine:</strong> Ship hulls, tanks, cargo holds, double bottoms
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Industrial:</strong> Storage tanks, pipelines, pressure vessels, structural steel
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fabrication */}
          <Card className="bg-card/80 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-gold)] group">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Factory className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">Fabrication Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <img src={fabricationImage} alt="Fabrication" className="w-full h-48 object-cover rounded-lg mb-4" />
              <p className="text-muted-foreground">
                Professional industrial fabrication for diverse applications.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>• Steel Structures</div>
                <div>• Pressure Vessels</div>
                <div>• Fuel Tankers (Internal & External)</div>
                <div>• Custom Industrial Fabrication</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Services */}
        <Card className="bg-gradient-to-r from-card via-card/50 to-card border-primary/20">
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
