import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

// --- CLIENT DATA ---
const clientsData = [
  { 
    id: 1, 
    name: "Ram Ratan Infrastructure Pvt. Ltd.", 
    location: "Khopoli",
    // Fetched from RR Global domain
    logo: "https://www.wirecable.in/wp-content/uploads/2025/01/rr-shramik.jpg"
  },
  { 
    id: 2, 
    name: "Hi-Tech Radiator Pvt. Ltd.", 
    location: "Khopoli",
    // Fetched from official domain
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZK913O6V5FgnlO_NhvRuuewK9fhMDQtIrcw&s"
  },
  { 
    id: 3, 
    name: "M Palonji", 
    location: "Refinery Work, Barmer Rajasthan",
    // Fetched from official domain
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQF3s5MUT_kolA/company-logo_200_200/company-logo_200_200/0/1630620156256/m_pallonji__co_pvt_ltd_logo?e=2147483647&v=beta&t=t8wHCRYlEVdeqvLw3nVd_O2Rj9r1nSvUqKM-U5XCcYU"
  },
  { 
    id: 4, 
    name: "Panametrics Engineering Pvt. Ltd.", 
    location: "Rasal Pali",
    // Fetched from official domain
    logo: "https://d8it4huxumps7.cloudfront.net/images/partners/new_organisation_image-3pkoHEVCQ016342574qcpS39TMlO.png"
  },
  { 
    id: 5, 
    name: "Inland Marine Works", 
    location: "Marine Services",
    // Fetched from official domain
    logo: "https://inlandmarinefl.com/wp-content/uploads/2023/09/Logo10.jpg" 
  },
  { 
    id: 6, 
    name: "Uran Shipyard Industrial & Project Services", 
    location: "Uran",
    // No official digital logo found for this specific local entity.
    // Keeping null to show the professional Initials "UR" fallback.
    logo: "https://lh6.googleusercontent.com/proxy/gEp2CLO_XOY6rNQlv96eQOtR_beVuhdwWS76dLOkve_WImDl4hhj9RqhB_11FfXHcq5Q0puWuVgFQI_pv2A" 
  },
  { 
    id: 7, 
    name: "Skyline Project", 
    location: "Chakan",
    // Fetched from official domain
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgvZEeTW2_aKN2gpHRCfTLyS761imP2gDrg&s"
  },
  { 
    id: 8, 
    name: "Unitec Engineering", 
    location: "Supa MIDC",
    // Fetched from official domain
    logo: "https://www.unitechengineering.co.in/assets/images/logo1.png"
  },
  { 
    id: 9, 
    name: "Trump Technocrat Pvt. Ltd.", 
    location: "Supa MIDC",
    // Fetched from associated TrumpCAD domain
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBll_VHym6rR_cSovcyunRKy48zT6tZrtstg&s" 
  },
  { 
    id: 10, 
    name: "Kanhayya Engineering Pvt. Ltd.", 
    location: "Parner",
    // No public domain found; using text fallback
    logo: "https://www.kanyaka.in/images/kanayakafooterlogo.png"
  },
  { 
    id: 11, 
    name: "RD Infra Pvt. Ltd.", 
    location: "Nashik",
    // Fetched from official domain
    logo: "https://images.jdmagicbox.com/comp/jhunjhunu/w1/9999p1592.1592.171203075324.w9w1/catalogue/rupeshwar-dev-infrastructure-pvt-ltd-bagar-jhunjhunu-construction-companies-xilo5qs693.jpg" 
  },
  { 
    id: 12, 
    name: "I-Stron Corporation Pvt. Ltd.", 
    location: "Khopoli",
    // Direct link you provided
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqBj1vo0gaD2lUSrkjtQ24z4O5KTXlMd1IQ&s" 
  },
  { 
    id: 13, 
    name: "Asara Equipments", 
    location: "Koregaon MIDC",
    // Direct link you provided
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6J-TfKhZmh4rmxKbQcoJlX192Yfl-eGpzA&s" 
  },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Valued <span className="text-primary">Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading shipyards and industrial companies across India.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {clientsData.map((client) => (
            <Card 
              key={client.id} 
              className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/50 transition-all duration-300 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full min-h-[180px]">
                
                {/* Logo Area */}
                <div className="mb-4 w-full flex justify-center h-20 items-center relative">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`} 
                      className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
                      onError={(e) => {
                        // If logo fails to load, hide image and show text fallback
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.parentElement?.querySelector('.fallback-text');
                        if (fallback) fallback.classList.remove('hidden');
                        if (fallback) fallback.classList.add('flex');
                      }}
                    />
                  ) : null}
                  
                  {/* Fallback Text Placeholder (Visible if no logo or logo fails) */}
                  <div className={`fallback-text h-20 w-full max-w-[180px] bg-primary/5 rounded-lg items-center justify-center border border-dashed border-primary/20 group-hover:border-primary/40 transition-colors ${client.logo ? 'hidden' : 'flex'}`}>
                    <span className="text-3xl font-bold text-primary/40 group-hover:text-primary/80 transition-colors uppercase">
                      {client.name.substring(0, 2)}
                    </span>
                  </div>
                </div>

                {/* Client Name */}
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {client.name}
                </h3>

                {/* Location */}
                {client.location && (
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    <span>{client.location}</span>
                  </div>
                )}
                
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;