import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Card from "react-bootstrap/Card";
import pic from "../../assets/images/1stProject.webp";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import TeamCard from "../TeamCard";
import "../ourTeam.css";
import Banner from "../Banner";

export default function OurTeam() {
  return (
    <>
      <h1 className="services">Our Team</h1>
      <div>
        {/* <h1>Our Team</h1> */}
        <br />
        <br />
        <br />
        <div className="team">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
        <div style={{ marginTop: "30px", marginBottom: "30px" }}>
          <Banner />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
