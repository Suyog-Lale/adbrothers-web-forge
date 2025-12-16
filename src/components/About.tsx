import { CheckCircle, Award, Users, Briefcase, ArrowRight } from "lucide-react";
// Import your images
import fabricationImg from "../assets/fabrication img.jpg";
import sandblastingImg from "../assets/Sandblasting img.jpg";
import paintingImg from "../assets/wall painting img.webp";

const services = [
  {
    id: 1,
    img: fabricationImg,
    title: "Precision Fabrication",
    desc: "Structural integrity meets engineering excellence. We build strong foundations.",
  },
  {
    id: 2,
    img: sandblastingImg,
    title: "Expert Sandblasting",
    desc: "Surface preparation to SA 2.5 & SA 3 standards for maximum coating adhesion.",
  },
  {
    id: 3,
    img: paintingImg,
    title: "Industrial Painting",
    desc: "Advanced coating systems protecting your assets against corrosion and wear.",
  },
];

const stats = [
  { icon: Award, value: "8+", label: "Years of Excellence" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Briefcase, value: "100+", label: "Skilled Workforce" },
];

const About = () => {
  return (
    <section id="about" className="bg-background min-h-screen">
      
      {/* --- 1. HERO SECTION --- */}
      <div className="relative pt-32 pb-16 px-4 container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Redefining <span className="text-primary">Industrial Standards</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Delivering world-class coating and fabrication solutions with precision, safety, and passion.
          </p>
        </div>

        {/* EXPANDING CARDS CONTAINER */}
        <div className="flex flex-col md:flex-row h-[600px] gap-4 w-full max-w-7xl mx-auto">
           {services.map((service) => (
             <div
               key={service.id}
               className="group relative flex-1 hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer overflow-hidden rounded-3xl"
             >
                {/* Background Image - REMOVED GRAYSCALE */}
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-lg max-w-md opacity-0 max-h-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-700 delay-100 overflow-hidden">
                        {service.desc}
                      </p>
                    </div>
                    {/* Arrow Icon appears on hover */}
                    <div className="bg-primary p-3 rounded-full opacity-0 translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 hidden md:block">
                      <ArrowRight className="text-primary-foreground w-6 h-6" />
                    </div>
                  </div>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* --- 2. MODERN STATS STRIP --- */}
      <div className="bg-card/50 border-y border-border/50 py-16 backdrop-blur-sm">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {stats.map((stat, idx) => (
                 <div key={idx} className="flex items-center justify-center gap-6 p-6 rounded-2xl hover:bg-background/80 transition-all duration-300 group cursor-default border border-transparent hover:border-border/50 hover:shadow-lg">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                       <stat.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-left">
                       <h4 className="text-5xl font-black text-foreground tracking-tight">{stat.value}</h4>
                       <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm mt-1 group-hover:text-primary transition-colors">{stat.label}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>

      {/* --- 3. DETAILED CONTENT GRID --- */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div className="space-y-10">
              <div className="relative pl-8 border-l-4 border-primary/50">
                <h3 className="text-3xl font-bold text-foreground mb-6">Who We Are</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  A&D Brothers is a premier service provider established to meet the growing demands of the <strong>Industrial & Marine Coating</strong> sector. Headquartered in Koparkhirane, Navi Mumbai, we have built a reputation for reliability, precision, and excellence across Maharashtra.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Commitment</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  We pledge to deliver best-in-class appearance and efficiency using skilled manpower and improved application techniques.
                </p>
                <div className="flex items-center gap-3 text-foreground font-medium">
                  <div className="bg-primary/20 p-2 rounded-full"><CheckCircle className="w-5 h-5 text-primary" /></div>
                  <span>Quality Planning & Issue Resolution</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-card/30 p-8 rounded-3xl border border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-8">Our Core Capabilities</h3>
                <div className="space-y-6">
                  {[
                    "Expert Blasting & Painting of Ships, Tanks & Hulls",
                    "Pipeline Coating (Internal & External)",
                    "Industrial Storage Tank Maintenance",
                    "Specialized Power Tooling & High-Pressure Washing",
                    "Structural Steel Fabrication & Protection"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="mt-1">
                        <CheckCircle className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;