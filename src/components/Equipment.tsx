import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wind, // For Compressors
  Container, // For Hoppers
  Waves, // For Waterjet
  SprayCan, // For Airless Machines
  Layers, // For Coat Meter
  Scale, // For Profile Gauge
  PaintRoller, // For Wall Painting
  Brush, // For Wall Painting
  ShieldCheck, // For Safety
  Zap, // For Welding
  Scissors, // For Cutting
  Move3d, // For Bending/Fabrication
  Users, // For Team
} from "lucide-react";

// --- NO IMAGE IMPORTS NEEDED ---
// We are now using new, external images below to make the site less repetitive.

// --- DATA STRUCTURES ---

const sandblastingEquipment = [
// ... (existing data is unchanged) ...
  {
    icon: Wind,
    name: "Compressors",
    count: "Up to 12 Units",
    description: "High-power compressors to provide consistent, high-volume air for all blasting operations.",
  },
  {
    icon: Container,
    name: "Blasting Hoppers",
    count: "Up to 24 Units",
    description: "Large capacity hoppers to hold abrasive media, ensuring continuous and efficient blasting.",
  },
  {
    icon: Waves,
    name: "High-Pressure Waterjet",
    count: "Industrial Grade",
    description: "Used for hydro-blasting and removing old coatings or contaminants without abrasive media.",
  },
];

const industrialPaintingEquipment = [
  {
    icon: SprayCan,
    name: "Airless Machines",
    count: "Professional Grade",
    description: "Enable fast, efficient application of high-volume industrial/marine coatings (epoxy, PU).",
  },
// ... (existing data is unchanged) ...
  {
    icon: Layers,
    name: "Coat Meter (Elcometer)",
    count: "Precision Measurement",
    description: "Critical for quality assurance, used to measure the exact dry film thickness (DFT) of applied coatings.",
  },
  {
    icon: Scale,
    name: "Profile Gauge",
    count: "Quality Assurance",
    description: "Measures the surface profile after blasting to ensure it meets specifications for paint adhesion.",
  },
];

const wallPaintingEquipment = [
  {
    icon: PaintRoller,
    name: "Precision Rollers & Brushes",
    count: "Full Range",
    description: "High-quality applicators for achieving smooth, flawless finishes on interior and exterior walls.",
  },
// ... (existing data is unchanged) ...
  {
    icon: ShieldCheck,
    name: "Surface Protection Gear",
    count: "Complete Sets",
    description: "Masking films, drop cloths, and tapes to ensure clean lines and zero damage to surrounding areas.",
  },
  {
    icon: SprayCan,
    name: "HVLP Sprayers",
    count: "Fine Finish Units",
    description: "High-Volume, Low-Pressure sprayers used for detailed work like doors, trim, and cabinetry.",
  },
];

const fabricationEquipment = [
  {
    icon: Zap,
    name: "Welding Machines",
    count: "Multiple Units",
    description: "Advanced ARC, MIG, and TIG welders for strong and precise structural and pipe fabrication.",
  },
// ... (existing data is unchanged) ...
  {
    icon: Scissors,
    name: "Metal Shears & Saws",
    count: "Various Units",
    description: "Heavy-duty cutting equipment for precise shaping and cutting of steel plates and structures.",
  },
  {
    icon: Move3d,
    name: "Bending & Rolling Machines",
    count: "Industrial Grade",
    description: "Used to curve and bend metal plates and pipes to exact specifications for custom fabrication jobs.",
  },
];

const team = [
// ... (existing data is unchanged) ...
  { role: "Site Incharge", count: 4 },
  { role: "Supervisors", count: 6 },
  { role: "Blasters", count: 20 },
  { role: "Spray Painters", count: 6 },
  { role: "Helpers", count: 10 },
  { role: "Watch & Ward", count: 4 },
];

// --- REUSABLE CARD COMPONENT (Unchanged) ---
const EquipmentCard = ({ icon: Icon, name, count, description, color = "primary" }) => (
// ... (existing code is unchanged) ...
  <Card className="bg-card/80 backdrop-blur border-border/50 h-full transform transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
    <CardHeader>
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 ${color === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"} rounded-lg flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <CardTitle className={`text-xl ${color === "primary" ? "text-primary" : "text-secondary"}`}>{name}</CardTitle>
          <p className="text-sm font-semibold text-muted-foreground">{count}</p>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const Equipment = () => {
  return (
    <section id="equipment" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
{/* ... (existing code is unchanged) ... */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Equipment & <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade equipment and an experienced workforce for superior results.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
        </div>

        <div className="max-w-6xl mx-auto space-y-24">

          {/* --- SECTION 1: SANDBLASTING --- */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-center">Sandblasting & Surface Preparation</h3>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="w-full h-96 group relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-primary/50 hover:shadow-lg">
                {/* --- NEW IMAGE --- */}
                <img
                  src="https://images.pexels.com/photos/8005396/pexels-photo-8005396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Sandblasting Equipment"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/333/FFF?text=Equipment')}
                />
              </div>
              <div className="grid gap-6">
                {sandblastingEquipment.map((item, index) => (
                  <EquipmentCard key={index} {...item} color="primary" />
                ))}
              </div>
            </div>
          </div>

          {/* --- SECTION 2: INDUSTRIAL PAINTING --- */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-center">Industrial & Marine Painting</h3>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="grid gap-6 lg:order-first"> {/* Text on Left */}
                {industrialPaintingEquipment.map((item, index) => (
                  <EquipmentCard key={index} {...item} color="secondary" />
                ))}
              </div>
              <div className="w-full h-96 group relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-secondary/50 hover:shadow-lg lg:order-last"> {/* Image on Right */}
                {/* --- NEW IMAGE --- */}
                <img
                  src="https://images.pexels.com/photos/8581105/pexels-photo-8581105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Industrial Painting Equipment"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/333/FFF?text=Equipment')}
                />
              </div>
            </div>
          </div>

          {/* --- NEW SECTION 3: WALL PAINTING --- */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-center">Commercial & Residential Wall Painting</h3>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="w-full h-96 group relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-primary/50 hover:shadow-lg">
                {/* --- NEW IMAGE --- */}
                <img
                  src="https://images.pexels.com/photos/41120/paint-roller-paint-bucket-painting-roller-41120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Wall Painting Equipment"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/333/FFF?text=Equipment')}
                />
              </div>
              <div className="grid gap-6">
                {wallPaintingEquipment.map((item, index) => (
                  <EquipmentCard key={index} {...item} color="primary" />
                ))}
              </div>
            </div>
          </div>

          {/* --- SECTION 4: FABRICATION --- */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-center">Fabrication</h3>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="grid gap-6 lg:order-first"> {/* Text on Left */}
                {fabricationEquipment.map((item, index) => (
                  <EquipmentCard key={index} {...item} color="secondary" />
                ))}
              </div>
              <div className="w-full h-96 group relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-secondary/50 hover:shadow-lg lg:order-last"> {/* Image on Right */}
                {/* --- NEW IMAGE --- */}
                <img
                  src="https://images.pexels.com/photos/57024/welding-welder-tool-equipment-57024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Fabrication Equipment"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/333/FFF?text=Equipment')}
                />
              </div>
            </div>
          </div>

          {/* --- SECTION 5: OUR WORKFORCE --- */}
          <div className="space-y-12 pt-12">
            <div className="text-center">
{/* ... (existing code is unchanged) ... */}
              <h3 className="text-3xl font-bold">Our Professional Workforce</h3>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-4">
                Our team is our greatest asset, bringing skill, experience, and safety to every job site.
              </p>
            </div>
            <Card className="bg-card/80 backdrop-blur border-border/50">
              <CardContent className="p-6 md:p-10">
{/* ... (existing code is unchanged) ... */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
                  {team.map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-4 bg-background/50 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                      <span className="text-5xl font-extrabold text-primary">{member.count}</span>
                      <span className="text-lg font-semibold text-foreground mt-2">{member.role}</span>
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