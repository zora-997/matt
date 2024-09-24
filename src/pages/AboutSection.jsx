import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import icon from "../assets/about-section-3-1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  const { texts } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-gradient-to-b from-gray-300 via-white to-white  w-full">

    <div
      id="about"
      className="flex flex-col max-w-[1820px] m-auto items-center justify-center   pr-4 pl-4 md:text-start text-center "
    >
     
      {/* <hr
        className="border-[#307fc0] w-20 mt-3 sm:mb-16 mb-7"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      /> */}

      <div className="w-full  lg:flex items-center justify-between">
        
        <div className="lg:w-[45%]  w-full flex flex-col items-start">
        <h1
        className="text-black font-bold sm:text-3xl text-lg leading-10 my-5 "
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        {texts.about_us}
      </h1> 
          <h1
            className="text-gray-600 text-start font-semibold sm:text-lg  w-full text-sm"
            data-aos="fade-down"
          >
            {texts.about_section_text}
          </h1>
          <a
            href="/about"
            className="mt-5 text-[#307fc0]  font-semibold text-start rounded h-8  hover:text-gray-500 "
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            {texts.read_more}
          </a>
        </div>
        <img
          className="lg:w-[45%] w-full md:mt-0 object-cover "
          src={icon}
          alt="icon"
          data-aos="fade-down"
        />
      </div>
    </div>
    </div>
  );
};

export default AboutSection;
