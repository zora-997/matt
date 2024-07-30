import React, { useEffect, useState } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
// import QF_107_4 from "../assets/ProjectAssets/QF-107/1 (12).jpg"
import QF_107_4 from "../assets/matt-projects/project-3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "../data";
import { dataInteriorImage } from "../data";

function ServicesItem() {
  const { texts } = useContext(LanguageContext);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("text");
  const subtitle = queryParams.get("subtitle");
  const description = queryParams.get("description");

  const [finalTitle, setFinalTitle] = useState(`${title}`);
  const [finalSubtitle, setFinalSubtitle] = useState(`${subtitle}`);
  const [finalDescription, setFinalDescription] = useState(`${description}`);

  // pshsan dani interior image
  const [showInteriorSlider, setShowInteriorSlider] = useState(false);

  useEffect(() => {
    if (title === "architectural_design") {
      setFinalTitle(texts.architectural_design);
      setFinalSubtitle(texts.architectural_design_subtitle);
      setFinalDescription(texts.architectural_design_description);
      setShowInteriorSlider(false);
    } else if (title === "structural_engineering") {
      setFinalTitle(texts.structural_engineering);
      setFinalSubtitle(texts.structural_engineering_subtitle);
      setFinalDescription(texts.structural_engineering_description);
      setShowInteriorSlider(false);
    } else if (title === "mechanical_and_electrical") {
      setFinalTitle(texts.mechanical_and_electrical);
      setFinalSubtitle(texts.mechanical_and_electrical_subtitle);
      setFinalDescription(texts.mechanical_and_electrical_description);
      setShowInteriorSlider(false);
    } else if (title === "civil_engineering") {
      setFinalTitle(texts.civil_engineering);
      setFinalSubtitle(texts.civil_engineering_subtitle);
      setFinalDescription(texts.civil_engineering_description);
      setShowInteriorSlider(false);
    } else if (title === "construction_management") {
      setFinalTitle(texts.construction_management);
      setFinalSubtitle(texts.construction_management_subtitle);
      setFinalDescription(texts.construction_management_description);
      setShowInteriorSlider(false);
    } else if (title === "renovation_and_remodeling") {
      setFinalTitle(texts.renovation_and_remodeling);
      setFinalSubtitle(texts.renovation_and_remodeling_subtitle);
      setFinalDescription(texts.renovation_and_remodeling_description);
      setShowInteriorSlider(false);
    } else if (title === "interior_fit_outs") {
      setFinalTitle(texts.interior_fit_outs);
      setFinalSubtitle(texts.interior_fit_outs_subtitle);
      setFinalDescription(texts.interior_fit_outs_description);
      setShowInteriorSlider(true);
    } else if (title === "infrastructure_development") {
      setFinalTitle(texts.infrastructure_development);
      setFinalSubtitle(texts.infrastructure_development_subtitle);
      setFinalDescription(texts.infrastructure_development_description);
      setShowInteriorSlider(false);
    }
  }, [
    title,
    texts.architectural_design,
    texts.architectural_design_subtitle,
    texts.architectural_design_description,
    texts.structural_engineering,
    texts.structural_engineering_subtitle,
    texts.structural_engineering_description,
    texts.mechanical_and_electrical,
    texts.mechanical_and_electrical_subtitle,
    texts.mechanical_and_electrical_description,
    texts.civil_engineering,
    texts.civil_engineering_subtitle,
    texts.civil_engineering_description,
    texts.construction_management,
    texts.construction_management_subtitle,
    texts.construction_management_description,
    texts.renovation_and_remodeling,
    texts.renovation_and_remodeling_subtitle,
    texts.renovation_and_remodeling_description,
    texts.interior_fit_outs,
    texts.interior_fit_outs_subtitle,
    texts.interior_fit_outs_description,
    texts.infrastructure_development,
    texts.infrastructure_development_subtitle,
    texts.infrastructure_development_description,
  ]);

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
    <div className="w-full  bg-white flex  justify-center items-center">
      <div className=" ">
        <div className="w-full  h-[400px] md:h-[600px] bg-cover relative mt-24">
          <img
            className=" w-full  h-[400px] md:h-[600px] z-[1] brightness-50 object-cover  absolute"
            src={QF_107_4}
            alt="Slideshow"
          />

          <div className="max-w-[1250px] h-full flex flex-col justify-between relative z-[2]">
            <h1 className="text-white mt-5 ml-5 mr-5 text-lg font-semibold">
              <a href="/">{texts.services}</a>
              {" > " + finalTitle}
            </h1>
            <div className="flex flex-col place-self-start  justify-center items-center mb-5 ml-5 mr-5">
              <h1 className="text-white mt-5 ml-5 text-3xl font-bold">
                {finalTitle}
              </h1>
              <h1 className="text-white mt-5 text-lg font-semibold text-center md:w-[50%] w-full">
                {finalSubtitle}
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-[1250px]  flex flex-col  items-center justify-center mt-9 ml-2 mr-2 mb-20">
          <h1 className="text-gray-700 mt-5 ml-5 mr-5 md:text-lg font-semibold text-center max-w-[900px]">
            {finalDescription}
          </h1>
        </div>

        <div className="max-w-[1820px] h-96 flex flex-col items-center justify-center ">
          {/* pshan dani hamu image kan */}
          <Slider
            {...settings}
            className="lg:w-[1200px]  xsm:w-80 2xsm:w-72 w-52"
          >
            {showInteriorSlider ? dataDigitalBestSeller.map((item) => (
              <div className="card w-full ">
                <div className="">
                  <img
                    src={item.mainIMG}
                    alt={item.title}
                    className="w-[100%] h-[200px] object-cover"
                  />
                </div>
              </div>
            )):  dataInteriorImage.map((item,index) => (
              <div className="card w-full ">
                <div className="">
                  <img
                    src={item}
                    alt={`${index}`}
                    className="w-[100%] h-[200px] object-cover"
                  />
                </div>
              </div>
            ))}
            
          </Slider>

       

          <a
            href="/all-projects"
            className="flex w-full justify-center items-center text-black text-lg font-semibold mt-14 hover:underline cursor-pointer "
          >
            {texts.all_projects}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServicesItem;
