import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Ship } from "lucide-react";

const shipyards = [
  "Ram Ratan Infrastructure Pvt. Ltd (Khopoli)",
  "Panamatrics Engineering Pvt. Ltd (Pali)",
  "Inland Marine Works",
  "Saibaba Shipyard",
  "Uran Shipyard"
];

const industrial = [
  "Bridge & Roof",
  "Punja Lloyd Ltd",
  "U.B Engineering Ltd",
  "Das Offshore Ltd",
  "Technofab Engineering Ltd",
  "Hi-Techno Crats Ltd",
  "United Envirotech Ltd"
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Valued <span className="text-primary">Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading shipyards and industrial companies across India
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Shipyards */}
          <Card className="bg-gradient-to-br from-card to-card/50 backdrop-blur border-primary/20 hover:shadow-[var(--shadow-gold)] transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Ship className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Shipyards</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {shipyards.map((client, index) => (
                  <div 
                    key={index} 
                    className="p-4 bg-background/50 rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <p className="text-foreground font-medium">{client}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Industrial */}
          <Card className="bg-gradient-to-br from-card to-card/50 backdrop-blur border-secondary/20 hover:shadow-[var(--shadow-red)] transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Industrial & Projects</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {industrial.map((client, index) => (
                  <div 
                    key={index} 
                    className="p-4 bg-background/50 rounded-lg border border-border/50 hover:border-secondary/50 transition-colors"
                  >
                    <p className="text-foreground font-medium">{client}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 max-w-6xl mx-auto bg-gradient-to-r from-primary/5 via-background to-secondary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <p className="text-lg text-muted-foreground">
              We have successfully completed numerous contract jobs within many shipyards and industrial units, delivering excellence and reliability in every project.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Clients;
