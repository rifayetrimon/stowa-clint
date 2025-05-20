import React, { Children } from "react";
import Base from "../Base/Base";
import Banner from "@/src/components/laypout/banner/Banner";

const Home_one = ({ Children }) => {
  return <Base>{Children}</Base>;
  <Banner />;
};

export default Home_one;
