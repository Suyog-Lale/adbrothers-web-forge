import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Updated with real images
const dummyProjects = [
  {
    client: "Major Shipyard Ltd.",
    title: "Full Hull Sandblasting & Anti-Fouling Coating",
    description: "Completed a full-scale sandblasting (SA 2.5) and application of specialized marine anti-fouling coating for a 20,000 DWT cargo vessel. Project completed 5 days ahead of schedule.",
    image: "https://images.pexels.com/photos/19399479/pexels-photo-19399479/free-photo-of-ship-bow-in-dry-dock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Sandblasting", "Marine Coating"],
  },
  {
    client: "Industrial Petrochem Inc.",
    title: "Storage Tank Fabrication & Epoxy Coating",
    description: "Fabricated and erected three 50,000-liter chemical storage tanks. Included internal and external sandblasting and application of a three-coat chemical-resistant epoxy system.",
    image: "https://images.pexels.com/photos/9365609/pexels-photo-9365609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Fabrication", "Industrial Painting"],
  },
  {
    client: "City Commercial Properties",
    title: "Exterior Wall Painting for Office Complex",
    description: "Managed the complete exterior and interior wall painting for a 5-story commercial office building. Utilized airless spraying for exteriors and precision brush/roller work for interiors.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Wall Painting", "Commercial"],
  },
  {
    client: "Navi Mumbai Logistics",
    title: "Structural Steel Painting",
    description: "Surface preparation and anti-corrosive painting for a 40,000 sq. ft. warehouse's structural steel framework, ensuring long-term durability against humidity.",
    image: "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Industrial Painting", "Sandblasting"],
  },
];

const OurWork = () => {
  return (
    <section id="our-work" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A gallery of completed projects showcasing our commitment to quality and excellence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dummyProjects.map((project, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur border-border/50 overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/20 hover:shadow-lg">
              <div className="overflow-hidden h-64 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/333/FFF?text=Project+Image')}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-primary leading-tight">{project.title}</CardTitle>
                <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">{project.client}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant={tag.includes("Sand") || tag.includes("Fab") ? "default" : "secondary"}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;