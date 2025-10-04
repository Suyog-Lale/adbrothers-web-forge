import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">A&D Brothers</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">Introduction</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A&D Brothers is formed to meet the increasing requirement of service providers in the field of Industrial & Marine Coating. Our main office is situated at Koparkhirane, Navi Mumbai, Maharashtra.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Expertise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We are pioneers in various Surface preparation and Coating jobs with a memorable touch of success. We have a good setup for internal quality audit of our completed work.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    We provide various services such as Power tooling, High-pressure washing, Spray painting, and structural steel work.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Capabilities</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Expert in Blasting and Painting of ships, tanks & hulls</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Pipeline coating - Internal and External</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Industrial storage tanks - Internal and External</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Highly skilled and experienced supervisors and artisans</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Commitment</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Improved application techniques for better coating performance</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Best in class appearance & efficiency with skilled manpower</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">Quality planning and capacity to handle any job-related issues</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
