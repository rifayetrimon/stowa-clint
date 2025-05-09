import Middleheader from "@/src/components/laypout/header/Middleheader";
import Topheader from "@/src/components/laypout/header/Topheader";
import Navbar from "@/src/components/laypout/header/Navbar";
import React from "react";

const Base = () => {
  return (
    <header className="header_section header-style-no-collapse">
      <Topheader />
      <Middleheader />
      <Navbar />
    </header>
  );
};

export default Base;
