import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import AppLayout from "@/layouts/AppLayout"; 

// Pages
import Index from "./pages/Index";
import About from "@/components/About";
import Services from "@/components/Services";
import Equipment from "@/components/Equipment";
import Clients from "@/components/Clients";
import OurWork from "@/components/OurWork";
import QuoteForm from "@/components/QuoteForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Layout Route */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="equipment" element={<Equipment />} />
            <Route path="clients" element={<Clients />} />
            <Route path="our-work" element={<OurWork />} />
            <Route path="get-quote" element={<QuoteForm />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;