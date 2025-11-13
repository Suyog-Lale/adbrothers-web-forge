// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Import your new Layout component (we will create this next)
import AppLayout from "@/layouts/AppLayout"; 

// Import all your "page" components
import Index from "./pages/Index"; // Your homepage
import About from "@/components/About";
import Services from "@/components/Services";
import Equipment from "@/components/Equipment";
import Clients from "@/components/Clients";
import QuoteForm from "@/components/QuoteForm";
import NotFound from "./pages/NotFound";
import OurWork from "@/components/OurWork"; 


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* This is the new "Layout Route".
            It renders <AppLayout /> (which contains your Navbar and Footer).
            All the child routes (like About, Services) will be
            rendered *inside* this layout.
          */}
          <Route path="/" element={<AppLayout />}>

            {/* 'index' means this is the default component for "/" */}
            <Route index element={<Index />} /> 

            {/* Your new pages */}
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="equipment" element={<Equipment />} />
            <Route path="our-work" element={<OurWork />} /> 
            <Route path="clients" element={<Clients />} />
            <Route path="get-quote" element={<QuoteForm />} />

            {/* This catch-all 404 route MUST be last */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;