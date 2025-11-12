import { CheckCircle, Award, Users, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react"; // --- 1. IMPORT HOOKS ---

// Import your images
import fabricationImg from "../assets/fabrication img.jpg";
import sandblastingImg from "../assets/Sandblasting img.jpg";
import paintingImg from "../assets/wall painting img.webp";

// --- 2. DEFINE IMAGES ARRAY (outside component) ---
const images = [
  { src: fabricationImg, alt: "Fabrication", title: "Fabrication" },
  { src: sandblastingImg, alt: "Sandblasting", title: "Sandblasting" },
  { src: paintingImg, alt: "Wall Painting", title: "Painting" },
];

const About = () => {
  // --- 3. ADD STATE AND EFFECT FOR SLIDESHOW ---
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the image index
    const interval = setInterval(() => {
      // Move to the next index, looping back to 0 at the end
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []); // Empty dependency array so this runs only once on mount
  // --- END OF NEW LOGIC ---

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* --- 4. NEW SLIDESHOW SECTION --- */}
          <div className="mb-20">
            {/* Centering wrapper for the slideshow */}
            <div className="max-w-3xl mx-auto">
              <div
                className="group relative overflow-hidden rounded-xl shadow-2xl
                           transform transition-all duration-500 ease-in-out
                           hover:-translate-y-2 hover:shadow-primary/50 hover:shadow-lg
                           w-full h-96" // Taller container for a hero-like feel
              >
                {/* Map over all images, but control visibility with opacity */}
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center
                                 transform transition-transform duration-500 ease-in-out
                                 group-hover:scale-110" // Zoom effect on image
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black to-transparent 
                                 opacity-80 group-hover:opacity-100 
                                 transition-opacity duration-500 
                                 flex items-end justify-start p-6"
                    >
                      {/* The text also fades/slides in and out */}
                      <span
                        className={`text-white text-3xl font-extrabold 
                                    transition-all duration-700 ease-out ${
                                      index === currentIndex
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-full opacity-0"
                                    }`}
                      >
                        {image.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* --- END OF SLIDESHOW SECTION --- */}


          {/* --- IMPROVED TRUST/STATS SECTION (Unchanged) --- */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Award, value: "5+", label: "Years Experience" },
                { icon: Users, value: "50+", label: "Happy Clients" },
                { icon: Briefcase, value: "40+", label: "Skilled Employees" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur border-border/50 p-6 flex flex-col items-center text-center
                             transform transition-all duration-500 ease-in-out
                             hover:scale-105 hover:bg-card hover:border-primary hover:shadow-xl"
                >
                  <stat.icon className="w-16 h-16 text-primary mb-4 animate-bounce-slow" />
                  <span className="text-5xl font-extrabold text-white mb-2">{stat.value}</span>
                  <span className="text-lg text-muted-foreground mt-1 font-semibold">{stat.label}</span>
                </Card>
              ))}
            </div>
          </div>
          {/* --- END OF STATS SECTION --- */}


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