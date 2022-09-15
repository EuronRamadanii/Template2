import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Banner from "../Banner";

function Home() {
  return (
    <>
      <HeroSection />
      <div></div>
      <Cards />
      <div>
        <Banner />
      </div>
      <Footer />
    </>
  );
}

export default Home;
