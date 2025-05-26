'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <Slider {...sliderSettings}>
      <div>
        <img src="https://res.cloudinary.com/dhrvenmlj/image/upload/v1748230605/IMG_8552_nfar7z.heic" className="rounded-xl w-full h-[400px] object-cover" alt="Proyecto 1" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dhrvenmlj/image/upload/v1748230605/IMG_8552_nfar7z.heic" className="rounded-xl w-full h-[400px] object-cover" alt="Proyecto 2" style={{ objectFit: 'contain', objectPosition: 'center' }}/>
      </div>
      <div>
        <img style={{ objectFit: 'contain', objectPosition: 'center' }}  src="https://res.cloudinary.com/dhrvenmlj/image/upload/v1748230605/IMG_8552_nfar7z.heic" className="rounded-xl w-full h-[400px] object-cover" alt="Proyecto 3" />
      </div>
    </Slider>
  )
}

export default Carousel
