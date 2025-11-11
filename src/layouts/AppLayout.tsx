// src/layouts/AppLayout.tsx

import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      
      {/* ADD THIS CLASSNAME TO PUSH CONTENT DOWN: */}
      <main className="pt-28"> 
        <Outlet />
      </main>
      
      <Footer />
    </>
  );
};

export default AppLayout;