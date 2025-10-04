import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gauge, Wrench, Droplet, Ruler } from "lucide-react";

const equipment = [
  { icon: Gauge, name: "Compressors", count: "Up to 12 Units", color: "text-primary" },
  { icon: Wrench, name: "Blasting Hoppers", count: "Up to 24 Units", color: "text-secondary" },
  { icon: Droplet, name: "Airless Machines", count: "Professional Grade", color: "text-primary" },
  { icon: Gauge, name: "High-Pressure Waterjet", count: "Industrial Grade", color: "text-secondary" },
  { icon: Ruler, name: "Coat Meter", count: "Precision Measurement", color: "text-primary" },
  { icon: Ruler, name: "Profile Gauge", count: "Quality Assurance", color: "text-secondary" },
];

const team = [
  { role: "Site Incharge", count: 4 },
  { role: "Supervisors", count: 6 },
  { role: "Blasters", count: 20 },
  { role: "Spray Painters", count: 6 },
  { role: "Helpers", count: 10 },
  { role: "Watch & Ward", count: 4 },
];

const Equipment = () => {
  return (
    <section id="equipment" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Equipment & <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade equipment and experienced workforce for superior results
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Equipment */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Our Equipment</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {equipment.map((item, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${item.color === "text-primary" ? "bg-primary/10" : "bg-secondary/10"} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-semibold ${item.color} mb-1`}>{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.count}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                All equipment is regularly maintained and calibrated to ensure precise measurements and optimal performance, meeting international standards (SSPC, SA 2.5, SA 3).
              </CardContent>
            </Card>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Our Workforce</h3>
            <Card className="bg-card/80 backdrop-blur border-border/50 mb-6">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {team.map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                      <span className="font-semibold text-foreground">{member.role}</span>
                      <span className="text-2xl font-bold text-primary">{member.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-secondary/5 to-primary/5 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-lg">Professional Excellence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>Our team consists of highly skilled and experienced professionals who are trained in the latest techniques and safety protocols.</p>
                <p>With years of combined experience in industrial and marine applications, we ensure every project meets the highest quality standards.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
