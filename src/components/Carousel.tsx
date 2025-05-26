'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
};

const images = [
  'https://res.cloudinary.com/dhrvenmlj/image/upload/v1748230605/IMG_8552_nfar7z.heic',
  'https://res.cloudinary.com/dhrvenmlj/image/upload/v1748230548/IMG_2312_gxfway.jpg',
  'https://res.cloudinary.com/dhrvenmlj/image/upload/v1748230605/IMG_8519_jnw4ab.heic',
];

export default function CustomCarousel() {
  return (
    <div style={{ padding: '1rem' }}>
      <Slider {...sliderSettings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Proyecto ${index + 1}`}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                objectPosition: 'center center',
                borderRadius: '16px',
              }}
              className="carousel-img"
            />
          </div>
        ))}
      </Slider>

      {/* Extra responsive height tweak for larger screens */}
      <style jsx>{`
        @media (min-width: 768px) {
          .carousel-img {
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
}
