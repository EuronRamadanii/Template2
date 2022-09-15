import React from "react";
import "../../App.css";
import Footer from "../Footer";
import PartnerSlider from "../PartnerSlider";

export default function Partners() {
  return (
    <>
      <h1 className="products">Partners</h1>
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <PartnerSlider />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
