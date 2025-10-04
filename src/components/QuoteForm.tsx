import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const QuoteForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    service_type: "",
    blasting_type: "",
    project_type: "",
    material_surface: "",
    approximate_size: "",
    client_name: "",
    contact_number: "+91",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('quote_requests')
        .insert([formData]);

      if (error) throw error;

      toast.success("Quote request submitted successfully!", {
        description: "We'll get back to you within 24 hours."
      });

      // Reset form
      setFormData({
        service_type: "",
        blasting_type: "",
        project_type: "",
        material_surface: "",
        approximate_size: "",
        client_name: "",
        contact_number: "+91",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast.error("Failed to submit quote request", {
        description: "Please try again or contact us directly."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Request a <span className="text-primary">Free Quote</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get expert consultation and competitive pricing for your project
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <Card className="lg:col-span-1 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call Us
                  </h4>
                  <a href="tel:+918149145285" className="block text-foreground hover:text-primary transition-colors mb-2">
                    +91 8149145285
                  </a>
                  <a href="tel:+919765135325" className="block text-foreground hover:text-primary transition-colors">
                    +91 9765135325
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> WhatsApp
                  </h4>
                  <a 
                    href="https://wa.me/918149145285" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-foreground hover:text-primary transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </h4>
                  <a href="mailto:adbrothers26@gmail.com" className="block text-foreground hover:text-secondary transition-colors break-all">
                    adbrothers26@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    At. Navandhe, Tal: Khalapur<br />
                    Dist: Raigad, Maharashtra
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quote Form */}
            <Card className="lg:col-span-2 bg-card/80 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service_type">Service of Interest *</Label>
                      <Select 
                        value={formData.service_type} 
                        onValueChange={(value) => setFormData({...formData, service_type: value})}
                        required
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border z-50">
                          <SelectItem value="Sandblasting">Sandblasting</SelectItem>
                          <SelectItem value="Painting">Painting</SelectItem>
                          <SelectItem value="Fabrication">Fabrication</SelectItem>
                          <SelectItem value="Multiple Services">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.service_type === "Sandblasting" && (
                      <div className="space-y-2">
                        <Label htmlFor="blasting_type">Type of Blasting</Label>
                        <Select 
                          value={formData.blasting_type} 
                          onValueChange={(value) => setFormData({...formData, blasting_type: value})}
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent className="bg-popover border-border z-50">
                            <SelectItem value="Copper Slag">Copper Slag</SelectItem>
                            <SelectItem value="Grit">Grit</SelectItem>
                            <SelectItem value="Shot">Shot</SelectItem>
                            <SelectItem value="Glass Bead">Glass Bead</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="project_type">Project Type *</Label>
                      <Select 
                        value={formData.project_type} 
                        onValueChange={(value) => setFormData({...formData, project_type: value})}
                        required
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border z-50">
                          <SelectItem value="Marine/Shipyard">Marine/Shipyard</SelectItem>
                          <SelectItem value="Pipeline/Tank">Pipeline/Tank</SelectItem>
                          <SelectItem value="Industrial/Structural">Industrial/Structural</SelectItem>
                          <SelectItem value="Commercial">Commercial</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="material_surface">Material/Surface</Label>
                      <Input
                        id="material_surface"
                        placeholder="e.g., Steel, Concrete, Hull"
                        value={formData.material_surface}
                        onChange={(e) => setFormData({...formData, material_surface: e.target.value})}
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="approximate_size">Approximate Size/Area</Label>
                      <Input
                        id="approximate_size"
                        placeholder="e.g., 500 sq.m or 20m length"
                        value={formData.approximate_size}
                        onChange={(e) => setFormData({...formData, approximate_size: e.target.value})}
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="client_name">Your Name *</Label>
                      <Input
                        id="client_name"
                        placeholder="Full name"
                        value={formData.client_name}
                        onChange={(e) => setFormData({...formData, client_name: e.target.value})}
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact_number">Contact Number *</Label>
                      <Input
                        id="contact_number"
                        type="tel"
                        placeholder="+91 XXXXXXXXXX"
                        value={formData.contact_number}
                        onChange={(e) => setFormData({...formData, contact_number: e.target.value})}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your project requirements..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-background"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Submitting..." : "Request Quote"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
