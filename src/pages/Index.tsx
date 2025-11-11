// src/pages/Index.tsx

import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* This renders ONLY the About component as your homepage */}
      <About />
    </div>
  );
};

export default Index;