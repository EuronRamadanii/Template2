import React from "react";
import "../../App.css";
import "../aboutUs.css";
import Footer from "../Footer";

export default function AboutUs() {
  return (
    <>
      <h1 className="products">AboutUs</h1>
      <body id="main">
        <div class="container">
          <section class="about-container container">
            <div class="about-sections animate__animated animate__fadeInLeftBig">
              <img
                style={{ width: "100%" }}
                class="offer-image"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
              />
              <div class="description">
                <h3>
                  <b> About Us</b>
                </h3>
                <p class="first">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  quis nihil consectetur porro optio distinctio dignissimos, quo
                  ratione eius ipsa libero quia necessitatibus? Quis id ut in
                  tenetur. Officia neque unde consequuntur ad recusandae ratione
                  hic cumque corporis deleniti esse maiores voluptatum, dolorem
                  beatae rerum voluptas assumenda aspernatur? Nam facilis
                  eveniet consequuntur nesciunt neque minus, ex hic esse eos
                  magni? Dolorem ipsa amet in nostrum.
                </p>
              </div>
            </div>
            <div class="about-sections animate__animated animate__fadeInRightBig">
              <div class="description">
                <h3>
                  <b> Our Mission </b>
                </h3>
                <p class="second">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias quos reprehenderit corporis quaerat vitae, eaque
                  sapiente mollitia. Quos officiis maiores ab sint temporibus
                  eveniet nobis id reprehenderit possimus quibusdam ipsum
                  nesciunt, expedita repudiandae provident! Et doloremque natus
                  consequuntur est illo sit quo itaque in facere qui amet neque
                  id deserunt accusamus illum, voluptatem accusantium cupiditate
                  ipsum quos autem eaque officia?
                </p>
              </div>
              <img
                style={{ width: "100%" }}
                class="offer-image"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
              />
            </div>
            <div class="about-sections animate__animated animate__fadeInLeftBig">
              <img
                style={{ width: "100%" }}
                class="offer-image"
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt=""
              />
              <div class="description">
                <h3>
                  <b> Experience </b>
                </h3>
                <p class="third">
                  remains an experience to remember. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Nam excepturi quas, illum
                  nesciunt cum, nisi itaque voluptatibus delectus, assumenda
                  praesentium magnam. Quaerat corrupti cupiditate reprehenderit
                  vitae culpa consequuntur id dolores cum mollitia vero
                  repellendus quod eius at, inventore dolor praesentium tempora
                  provident nemo? Officia facilis fuga ratione magni numquam
                  suscipit.
                </p>
              </div>
            </div>
          </section>
        </div>
      </body>
      <Footer />
    </>
  );
}
