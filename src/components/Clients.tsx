import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Ship, Star } from "lucide-react"; // --- 1. Added Star icon ---

const shipyards = [
  "Ram Ratan Infrastructure Pvt. Ltd (Khopoli)",
  "Panamatrics Engineering Pvt. Ltd (Pali)",
  "Inland Marine Works",
  "Saibaba Shipyard",
  "Uran Shipyard",
];

const industrial = [
  "Bridge & Roof",
  "Punja Lloyd Ltd",
  "U.B Engineering Ltd",
  "Das Offshore Ltd",
  "Technofab Engineering Ltd",
  "Hi-Techno Crats Ltd",
  "United Envirotech Ltd",
];

// --- 2. ADDING CSS FOR SCROLLING MARQUEE ---
const marqueeStyles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    display: flex;
    width: max-content;
    animation: scroll 30s linear infinite;
  }
  .scroller-item {
    display: flex;
    align-items: center;
    padding: 0 1.5rem; /* 24px */
    font-size: 1.125rem; /* 18px */
    font-weight: 500; /* medium */
    color: hsl(var(--muted-foreground));
    transition: color 0.3s;
    white-space: nowrap; /* Prevent line breaks */
  }
  .scroller-item:hover {
    color: hsl(var(--primary));
  }
`;

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-background">
      {/* --- 3. Add the style tag to the component --- */}
      <style dangerouslySetInnerHTML={{ __html: marqueeStyles }} />

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

        {/* --- 4. RE-DESIGNED CARDS WITH SCROLLERS --- */}
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Shipyards */}
          <Card className="bg-gradient-to-br from-card to-card/50 backdrop-blur border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Ship className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Shipyards</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="py-6">
              {/* Scroller Wrapper */}
              <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                <div className="animate-scroll">
                  {/* Map list twice for seamless loop */}
                  {shipyards.map((client, index) => (
                    <div key={index} className="scroller-item">
                      <Star className="w-4 h-4 text-primary/70 mr-3 flex-shrink-0" />
                      <span>{client}</span>
                    </div>
                  ))}
                  {shipyards.map((client, index) => (
                    <div key={`dup-${index}`} className="scroller-item" aria-hidden="true">
                      <Star className="w-4 h-4 text-primary/70 mr-3 flex-shrink-0" />
                      <span>{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Industrial */}
          <Card className="bg-gradient-to-br from-card to-card/50 backdrop-blur border-secondary/20">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Industrial & Projects</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="py-6">
              {/* Scroller Wrapper */}
              <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                <div className="animate-scroll" style={{ animationDuration: '45s' }}> {/* Slower for longer list */}
                  {/* Map list twice for seamless loop */}
                  {industrial.map((client, index) => (
                    <div key={index} className="scroller-item">
                      <Star className="w-4 h-4 text-secondary/70 mr-3 flex-shrink-0" />
                      <span>{client}</span>
                    </div>
                  ))}
                  {industrial.map((client, index) => (
                    <div key={`dup-${index}`} className="scroller-item" aria-hidden="true">
                      <Star className="w-4 h-4 text-secondary/70 mr-3 flex-shrink-0" />
                      <span>{client}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* --- END OF RE-DESIGN --- */}

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