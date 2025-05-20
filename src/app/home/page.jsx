import React from "react";
import Base from "../Base/Base";
import Banner from "@/src/components/laypout/banner/Banner";
import Newsletter from "../../components/laypout/newsletter/Newsletter";

const Home_one = ({ children }) => {
  return (
    <Base>
      {children}
      <Banner />
      <Newsletter />
    </Base>
  );
};

export default Home_one;
