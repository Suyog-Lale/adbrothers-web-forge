import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Equipment from "@/components/Equipment";
import Clients from "@/components/Clients";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Equipment />
      <Clients />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default Index;
