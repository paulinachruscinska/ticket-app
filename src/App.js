import Header from "./landing_page_js/header";
import HowToBuyTicket from "./landing_page_js/howToBuyTicket";
import Benefits from "./landing_page_js/benefits";
import MainSection from "./landing_page_js/mainsection";
import benefitsItems from "./landing_page_js/benefitsItems";
import AboutUs from "./landing_page_js/aboutUs";
import Numbers from "./landing_page_js/numbers";
import Opinions from "./landing_page_js/opinions";
import opinionsItems from "./landing_page_js/opinionsItems";
import Footer from "./landing_page_js/footer";
import React from "react";

export default function App(){
  return (
      <>
        <Header/>
        <MainSection/>
        <HowToBuyTicket/>
        <Numbers/>
        <Benefits benefits={benefitsItems}/>
        <AboutUs />
        <Opinions opinions={opinionsItems}/>
        <Footer/>
      </>
  );
}
