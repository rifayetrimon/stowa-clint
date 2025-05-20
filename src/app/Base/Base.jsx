import Middleheader from "@/src/components/laypout/header/Middleheader";
import Topheader from "@/src/components/laypout/header/Topheader";
import Navbar from "@/src/components/laypout/header/Navbar";
import React from "react";
import Footer from "@/src/components/laypout/footer/Footer";

const Base = ({ children }) => {
  return (
    <div>
      <header className="header_section header-style-no-collapse">
        <Topheader />
        <Middleheader />
        <Navbar />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default Base;
