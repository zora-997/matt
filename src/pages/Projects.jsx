import React, { useState } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import "aos/dist/aos.css";
import { dataDigitalBestSeller } from "../data";


function Projects() {
  const { texts } = useContext(LanguageContext);


  // Create a new array to store the extracted images and IDs
const images = dataDigitalBestSeller.map((item) => ({
  id: item.id,
  src: item.mainIMG,
}));

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
      className=" bg-white flex flex-col max-w-[1820px]  m-auto  items-center justify-center my-16 pb-10  p-4 "
    >
      <h1
        className="text-black  place-self-start font-bold sm:text-3xl text-lg "
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        {texts.projects}
      </h1>

      <h1
        className="text-gray-500 max-w-3xl place-self-start font-semibold my-5 sm:text-lg text-sm mb-14"
        data-aos="fade-up"
      >
        {texts.projects_subtitle}
      </h1>

      <div className="xl:w-[97%] w-[95%] h-fit text-center  flex flex-col gap-y-16">
        <Slider {...settings} className="w-full ">
          {dataDigitalBestSeller &&
            dataDigitalBestSeller.map((item, i) => (
              <div key={i} className="card w-full ">
                <div className="card-top ">
                  <img
                    onClick={() => setIsOpen(true, i)}
                    className="w-[100%] md:h-[400px] h-[250px] object-cover"
                    src={item.mainIMG}
                    alt={item.title}
                  />
                </div>
              </div>
            ))}
        </Slider>

        <a
          href="/all-projects"
          className=" text-black text-lg font-semibold  hover:underline cursor-pointer "
          data-aos="fade-down"
        >
          {texts.all_projects}
        </a>
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

export default Projects;
