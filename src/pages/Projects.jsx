import React from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import { useContext } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import 'aos/dist/aos.css';
import { dataDigitalBestSeller } from '../data';

function Projects() {
  const { texts } = useContext(LanguageContext);

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


  return (
    <div  id='projects' className=" bg-white flex flex-col max-w-[1820px]  m-auto text-start items-start justify-start mt-10 pb-10  pr-4 pl-4 mb-56">
      <h1 className="text-black font-bold sm:text-3xl text-lg "
        data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
      >{texts.projects}</h1>
        
      <h1 className="text-gray-500 max-w-3xl place-self-start font-semibold my-5 sm:text-lg text-sm mb-14"
        data-aos='fade-up'
      >
        {texts.projects_subtitle}
      </h1>

      <div className="w-[95%] h-fit text-center  flex flex-col gap-y-16">
        <Slider {...settings} className="w-full ">
          {dataDigitalBestSeller.map((item) => (
            <div className="card w-full ">
              <div className="card-top ">
                <img id='zorab' className='w-[100%] md:h-[400px] h-[250px] object-cover'
                  src={item.mainIMG}
                  alt={item.title}
                  
                />
              </div>
            </div>
          ))}
        </Slider>

        <a href='/all-projects' className=' text-black text-lg font-semibold  hover:underline cursor-pointer '
            data-aos='fade-down'
        >
          {texts.all_projects}
        </a>
      </div>
    </div>
  );
}

export default Projects;
