import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Banner from "../Banner";
import Carousel from "react-bootstrap/Carousel";
import Slider from "../Slider";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      {/* <Banner style={{ marginBottom: "30px" }} /> */}
      <div>
        <Slider style={{ marginTop: "30px" }} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
