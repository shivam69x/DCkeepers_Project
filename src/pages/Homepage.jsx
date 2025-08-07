import React from "react";
import HeroImg from "../assets/4103163_1032.jpg";
import Hero from "../components/Hero";
import Faqnav from "../components/Faqnav";
import DCK from "../components/DCK";
import Midhero from "../components/Midhero";
import Offers from "../components/Offers";
import Products from "../components/Products";
import AboutUs from "../components/Aboutus";
import Whyus from "../components/Whyus";
import Aim from "../components/Aim";
import Clients from "../components/Clients";
import Faqsection from "../components/Faqsectionone";

const Homepage = () => {
  return (
    <>
      <div className="bg-slate-200 -mt-[1px] relative  ">
        <Hero />
        <Faqnav />
        <DCK />

        <div className="max-w-[1400px] flex justify-center flex-col mx-auto px-0 py-1 ">
          <Midhero />

          <Offers />

          <Products />
          <AboutUs />
          <Whyus />
          <Aim />
        </div>
        <Faqsection />
        <div className="mt-20">
          <Clients />
        </div>
      </div>
    </>
  );
};

export default Homepage;
