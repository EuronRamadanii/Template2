import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import pic from "../assets/images/1stProject.webp";

export default function Partners() {
  return (
    <>
      {/* <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br /> */}
      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img
          variant="bottom"
          // style={{ backgroundColor: "gray" }}
          src="https://cdn4.vectorstock.com/i/1000x1000/76/53/group-coworkers-teamwork-concept-vector-27767653.jpg"
          height={1000}
        />
      </Card>
    </>
  );
}
