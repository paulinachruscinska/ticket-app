import Header from "../components/Header";
import HomeHowToBuyTicket from "../components/HomeHowToBuyTicket";
import HomeBenefits from "../components/HomeBenefits";
import MainSection from "../components/HomeMain";
import benefitsItems from "../objects/benefitsItems";
import HomeAboutUs from "../components/HomeAboutUs";
import HomeNumbers from "../components/HomeNumbers";
import HomeOpinions from "../components/HomeOpinions";
import opinionsItems from "../objects/opinionsItems";
import Footer from "../components/Footer";
import React from "react";

export default function Home(){
  return (
      <>
        <Header/>
        <MainSection/>
        <HomeHowToBuyTicket/>
        <HomeNumbers/>
        <HomeBenefits benefits={benefitsItems}/>
        <HomeAboutUs />
        <HomeOpinions opinions={opinionsItems}/>
        <Footer/>
      </>
  );
}
