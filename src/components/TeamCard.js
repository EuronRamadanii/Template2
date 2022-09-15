import React from "react";
// import "../../App.css";
// import Footer from "../Footer";
import Card from "react-bootstrap/Card";
import pic from "../assets/images/1stProject.webp";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TeamCard() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>firstName Lastname</Card.Title>
          <Card.Text>lorem ipsum</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </>
  );
}
