"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mt-16"> 

      <Slider {...settings} className="w-full max-w-screen-xl flex justify-center mt-0">
        <div className="p-12 flex justify-center items-center">
          <Image
            src="/logo-slider/slider_ass-tech.png"
            alt="Logo Ass Tech"
            width={320}
            height={180}
          />
        </div>
        <div className="p-12 flex justify-center items-center">
          <Image
            src="/logo-slider/slider_baeumer.png"
            alt="Logo Baeumer"
            width={320}
            height={180}
          />
        </div>
        <div className="p-12 flex justify-center items-center">
          <Image
            src="/logo-slider/slider_brand.png"
            alt="Logo Brand"
            width={320}
            height={180}
          />
        </div>
        <div className="p-12 flex justify-center items-center">
          <Image
            src="/logo-slider/slider_emba-protec.png"
            alt="Logo Emba Protec"
            width={320}
            height={180}
          />
        </div>
        <div className="p-12 flex justify-center items-center">
          <Image
            src="/logo-slider/slider_gchb.png"
            alt="Logo GCHB"
            width={320}
            height={180}
          />
        </div>
        <div className="p-12 flex justify-center items-center">
          <Image
            src="/logo-slider/slider_harig-kuechen.png"
            alt="Logo Harig Küchen"
            width={320}
            height={180}
          />
        </div>
        <div className="p-12 flex justify-center items-center">
          <Image
            src="/logo-slider/slider_ibd-wicjeltechnik.png"
            alt="Logo IBD Wicjeltechnik"
            width={320}
            height={180}
          />
        </div>
        <div className="p-12 flex justify-center items-center">
          <Image
            src="/logo-slider/slider_koertner.png"
            alt="Logo Koertner"
            width={320}
            height={180}
          />
        </div>
        <div className="p-12 flex justify-center items-center">
          <Image
            src="/logo-slider/slider_max-container.png"
            alt="Logo Max Container"
            width={320}
            height={180}
          />
        </div>
        <div className="p-12 flex justify-center items-center">
          <Image
            src="/logo-slider/slider_radio-westfalica.png"
            alt="Logo Radio Westfalica"
            width={320}
            height={180}
          />
        </div>
        <div className="p-12 flex justify-center items-center">
          <Image
            src="/logo-slider/slider_samaritano.png"
            alt="Logo Samaritano"
            width={320}
            height={180}
          />
        </div>
        <div className="p-12 flex justify-center items-center">
          <Image
            src="/logo-slider/slider_wiese.png"
            alt="Logo Wiese"
            width={320}
            height={180}
          />
        </div>
      </Slider>
    </div>
  );
}
