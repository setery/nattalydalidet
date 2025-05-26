"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...sliderSettings}>
      <div>
        <img
          src="https://res.cloudinary.com/dhrvenmlj/image/upload/v1748230605/IMG_8552_nfar7z.heic"
          alt="Proyecto"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            objectPosition: "center top", // centra hacia arriba
            borderRadius: "16px",
          }}
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dhrvenmlj/image/upload/v1748230548/IMG_2312_gxfway.jpg"
          alt="Proyecto"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            objectPosition: "center top", // centra hacia arriba
            borderRadius: "16px",
          }}
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dhrvenmlj/image/upload/v1748230605/IMG_8519_jnw4ab.heic"
          alt="Proyecto"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            objectPosition: "center top", // centra hacia arriba
            borderRadius: "16px",
          }}
        />
      </div>
    </Slider>
  );
};

export default Carousel;
