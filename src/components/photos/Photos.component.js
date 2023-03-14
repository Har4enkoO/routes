import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Photos() {
  return (
    <Carousel className="justify-content-center">
      <Carousel.Item>
        <img
          src="https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Nature</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Nature</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Nature</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Photos;
