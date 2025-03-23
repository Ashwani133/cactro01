import React from "react";
import Navbar from "@/components/Navbar";
import TopInfo from "@/components/TopInfo";
import Hero from "@/components/Hero";

const Landing = () => {
  return (
    <div className="px-[5px] py-[32px] flex flex-col gap-y-[16px]">
      <Navbar />
      <TopInfo />
      <Hero />
    </div>
  );
};

export default Landing;
