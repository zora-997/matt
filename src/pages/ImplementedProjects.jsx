import React, { useEffect, useState } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import img_3 from "../assets/ImplementedProjects/3.jpg";
import img_4 from "../assets/ImplementedProjects/4.jpg";
import img_5 from "../assets/ImplementedProjects/5.jpg";
import img_6 from "../assets/ImplementedProjects/6.jpg";
import img_7 from "../assets/ImplementedProjects/7.jpg";
import img_8 from "../assets/ImplementedProjects/8.jpg";
import img_9 from "../assets/ImplementedProjects/9.jpg";
import img_10 from "../assets/ImplementedProjects/10.jpg";

function ImplementedProjects() {
  const { texts } = useContext(LanguageContext);
  let images = [
    {
      src: img_3,
    },
    {
      src: img_4,
    },
    {
      src: img_5,
    },
    {
      src: img_6,
    },
    {
      src: img_7,
    },
    {
      src: img_8,
    },
    {
      src: img_9,
    },
    {
      src: img_10,
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    slidesPerRow: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const [index, setIndex] = useState(-1);
  const [isOpen, setModalOpen] = useState(false);
  const setIsOpen = (state, i) => {
    setIndex(i);
    setModalOpen(state);
  };

  return (
    <div
      id="projects"
      className="flex flex-col max-w-[1820px] m-auto items-center justify-center mt-10 pb-10 text-center pr-4 pl-4 sm:mb-56 mb-20"
    >
      <h1
        className="text-black font-bold sm:text-3xl text-lg "
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        {texts.our_implemented_projects}
      </h1>
      <hr
        className="border-[#307fc0] w-20 mt-3 sm:mb-16 mb-7"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      />
      <h1
        className="text-black font-semibold sm:text-lg text-sm mb-14"
        data-aos="fade-down"
      >
        {texts.our_implemented_projects_subtitle}
      </h1>

      <div className="w-[95%] h-32 relative ">
        <Slider {...settings}>
          {images.map((item, i) => (
            <div key={i} className="card w-full">
              <div className="flex justify-center items-cente object-cover w-full h-56 ">
                <img
                  src={item.src}
                  alt={item.alt}
                  onClick={() => setIsOpen(true, i)}
                  className="flex  justify-center items-cente object-cover w-full h-56"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Lightbox
        index={index}
        slides={images}
        open={isOpen}
        plugins={[Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
        close={() => setIsOpen(false)}
        styles={{
          thumbnail: {
            borderColor: "#FCD34D",
          },
        }}
      />
    </div>
  );
}

export default ImplementedProjects;
