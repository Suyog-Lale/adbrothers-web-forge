import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wind,         // Compressors
  Container,    // Hoppers
  Waves,        // Waterjet
  SprayCan,     // Airless/Sprayers
  Layers,       // Coat Meter
  Scale,        // Profile Gauge
  PaintRoller,  // Wall Painting
  ShieldCheck,  // Safety/Protection
  Zap,          // Welding/Electrician
  Scissors,     // Shears/Cutting
  Drill,        // Power Tools
  Fan,          // Exhaust Fans
  Hammer        // Guniting/General
} from "lucide-react";

// --- EXTERNAL IMAGE SOURCES (Placeholders) ---
// Using high-quality Pexels images to ensure the layout looks good immediately.
const images = {
  sandblasting: "https://images.pexels.com/photos/8005396/pexels-photo-8005396.jpeg?auto=compress&cs=tinysrgb&w=800",
  industrialPaint: "https://images.pexels.com/photos/8581105/pexels-photo-8581105.jpeg?auto=compress&cs=tinysrgb&w=800",
  wallPaint: "https://images.pexels.com/photos/41120/paint-roller-paint-bucket-painting-roller-41120.jpeg?auto=compress&cs=tinysrgb&w=800",
  fabrication: "https://images.pexels.com/photos/57024/welding-welder-tool-equipment-57024.jpeg?auto=compress&cs=tinysrgb&w=800"
};

// --- UPDATED DATA FROM SCREENSHOT ---

const sandblastingEquipment = [
  {
    icon: Wind,
    name: "Compressors",
    count: "06 Units",
    description: "High-power compressors providing consistent air for blasting operations.",
  },
  {
    icon: Container,
    name: "Blasting Hoppers",
    count: "24 Units",
    description: "Large capacity hoppers ensuring continuous and efficient abrasive blasting.",
  },
  {
    icon: Drill,
    name: "Power Tooling Machines",
    count: "12 Units",
    description: "Specialized mechanical tools for precise surface cleaning and preparation.",
  },
  {
    icon: Hammer,
    name: "Guniting Hoppers",
    count: "04 Units",
    description: "Specialized equipment for concrete application and structural reinforcement.",
  },
  {
    icon: Waves,
    name: "High Pressure Waterjet",
    count: "06 Units",
    description: "Hydro-blasting units for removing old coatings without abrasives.",
  },
  {
    icon: Fan,
    name: "Exhaust Fans / Air Bowlers",
    count: "16 Units",
    description: "Heavy-duty ventilation systems (12 Air Bowlers + 4 Exhaust Fans) for safety.",
  }
];

const industrialPaintingEquipment = [
  {
    icon: SprayCan,
    name: "Airless Machines",
    count: "08 Units",
    description: "High-volume sprayers for rapid application of epoxy and PU coatings.",
  },
  {
    icon: Layers,
    name: "Coat Meter (Elcometer)",
    count: "04 Units",
    description: "Precision Digital DFT gauges for measuring coating thickness.",
  },
  {
    icon: Scale,
    name: "Profile Gauge",
    count: "04 Units",
    description: "Ensures surface roughness meets specifications for paint adhesion.",
  },
];

// Kept generic as these weren't explicitly detailed in the screenshot, 
// but are necessary for the "Wall Painting" section visualized in input.
const wallPaintingEquipment = [
  {
    icon: PaintRoller,
    name: "Precision Rollers & Brushes",
    count: "Full Range",
    description: "High-quality applicators for smooth finishes on interior/exterior walls.",
  },
  {
    icon: ShieldCheck,
    name: "Surface Protection",
    count: "Complete Sets",
    description: "Masking films, drop cloths, and tapes to ensure zero damage to floors.",
  },
  {
    icon: SprayCan,
    name: "HVLP Sprayers",
    count: "Fine Finish",
    description: "Low-pressure sprayers used for detailed work like doors and trim.",
  },
];

const fabricationEquipment = [
  {
    icon: Drill,
    name: "Drill Machines",
    count: "03 Units",
    description: "Heavy-duty magnetic and hand drills for site fabrication work.",
  },
  {
    icon: Drill, // Using Drill icon for grinder as well
    name: "Pencil Grinders",
    count: "04 Units",
    description: "Precision grinders for finishing welds and detailed metalwork.",
  },
  {
    icon: Zap,
    name: "Welding Machines",
    count: "Multiple Units",
    description: "Advanced ARC, MIG, and TIG welders for structural fabrication.",
  },
  {
    icon: Scissors,
    name: "Metal Shears & Cutters",
    count: "Various",
    description: "Equipment for precise cutting and shaping of steel plates.",
  },
];

// --- UPDATED TEAM DATA FROM SCREENSHOT ---
const team = [
  { role: "Site Incharge", count: "04" },
  { role: "Supervisors", count: "06" },
  { role: "Blasters", count: "10" },
  { role: "Spray Painters", count: "10" },
  { role: "Brush Painters", count: "20" },
  { role: "Helpers", count: "30" },
  { role: "Electrician", count: "02" },
];

// --- COMPONENTS ---

const EquipmentCard = ({ icon: Icon, name, count, description, color = "primary" }) => (
  <Card className="bg-card/80 backdrop-blur border-border/50 h-full transform transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 group">
    <CardHeader>
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 ${color === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <CardTitle className="text-lg font-bold">{name}</CardTitle>
          <p className={`text-sm font-bold mt-1 ${color === "primary" ? "text-primary" : "text-secondary"}`}>{count}</p>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const Equipment = () => {
  return (
    <section id="equipment" className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Equipment & <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive inventory of professional-grade machinery and a skilled workforce ready for deployment.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
        </div>

        <div className="space-y-32">

          {/* === 1. SANDBLASTING & SURFACE PREP === */}
          <div className="grid xl:grid-cols-2 gap-12 items-start">
            <div className="relative sticky top-24">
               <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-xl opacity-50"></div>
               <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                <img 
                  src={images.sandblasting} 
                  alt="Sandblasting Equipment" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-2xl font-bold text-white">Surface Preparation</h3>
                  <p className="text-gray-300 text-sm mt-2">The foundation of coating excellence.</p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {sandblastingEquipment.map((item, index) => (
                <EquipmentCard key={index} {...item} color="primary" />
              ))}
            </div>
          </div>

          {/* === 2. INDUSTRIAL PAINTING (Zig-Zag Layout) === */}
          <div className="grid xl:grid-cols-2 gap-12 items-center">
            <div className="grid sm:grid-cols-1 gap-4 order-2 xl:order-1">
              {industrialPaintingEquipment.map((item, index) => (
                <EquipmentCard key={index} {...item} color="secondary" />
              ))}
            </div>
            <div className="relative order-1 xl:order-2">
               <div className="absolute -inset-4 bg-secondary/20 rounded-xl blur-xl opacity-50"></div>
               <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                <img 
                  src={images.industrialPaint} 
                  alt="Industrial Painting" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-2xl font-bold text-white">Industrial Coating</h3>
                  <p className="text-gray-300 text-sm mt-2">Precision application and measurement.</p>
                </div>
              </div>
            </div>
          </div>

           {/* === 3. WALL PAINTING === */}
           <div className="grid xl:grid-cols-2 gap-12 items-start">
            <div className="relative sticky top-24">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] border border-white/10">
                <img 
                  src={images.wallPaint} 
                  alt="Commercial Wall Painting" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-2xl font-bold text-white">Commercial Painting</h3>
                  <p className="text-gray-300 text-sm mt-2">Flawless finishes for interiors & exteriors.</p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-1 gap-4">
              {wallPaintingEquipment.map((item, index) => (
                <EquipmentCard key={index} {...item} color="primary" />
              ))}
            </div>
          </div>

          {/* === 4. FABRICATION === */}
          <div className="grid xl:grid-cols-2 gap-12 items-center">
            <div className="grid sm:grid-cols-2 gap-4 order-2 xl:order-1">
              {fabricationEquipment.map((item, index) => (
                <EquipmentCard key={index} {...item} color="secondary" />
              ))}
            </div>
            <div className="relative order-1 xl:order-2">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] border border-white/10">
                <img 
                  src={images.fabrication} 
                  alt="Fabrication" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-2xl font-bold text-white">Fabrication</h3>
                  <p className="text-gray-300 text-sm mt-2">Heavy-duty structural tools.</p>
                </div>
              </div>
            </div>
          </div>

          {/* === 5. WORKFORCE STATS === */}
          <div className="pt-10">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold">Our Professional Workforce</h3>
              <p className="text-muted-foreground mt-2">Experienced personnel deployed for safety and efficiency</p>
            </div>
            
            <Card className="bg-gradient-to-br from-card to-background border-border/50">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {team.map((member, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/20">
                      <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{member.count}</span>
                      <span className="text-xs md:text-sm font-semibold text-center uppercase tracking-wide text-muted-foreground">{member.role}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Equipment;