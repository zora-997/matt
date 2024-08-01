import React from "react";

import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";
import LineText from "../components/LineText";
import LineText2 from "../components/LineText2";
import ServiceIcon from "../components/ServiceIcon";

import architectural_design_icon from "../assets/achitectrue.png";
import civil_engineering_icon from "../assets/civil-engneer.png";
import mechanical_and_electrical_icon from "../assets/mechanical.png";
import structural_engineering_icon from "../assets/structural.png";

import construction_management_icon from "../assets/worker.png";
import infrastructure_development_icon from "../assets/infrastructure.png";
import interior_fit_outs_icon from "../assets/interior-design.png";
import renovation_and_remodeling_icon from "../assets/construction.png";

import "aos/dist/aos.css";

function Services() {
  const { texts } = useContext(LanguageContext);

  return (
    <div
      id="services"
      className="flex flex-col max-w-[1820px]  mt-20 m-auto  items-center justify-center  text-center  pr-4 pl-4"
    >
      {/* <hr
        className="border-[#307fc0] w-20 mt-3 sm:mb-16 mb-7"
        data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
        /> */}
      <div className="text-start w-full">
        <h1
          className="text-gray-600 w-full text-start max-w-3xl place-self-start font-semibold sm:text-lg text-sm mb-14"
          data-aos="fade-down"
        >
          <div>
            <h1
              className="text-black font-bold sm:text-3xl text-lg mb-5 text-start "
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              {" "}
              {texts.services}
            </h1>
          </div>
          {texts.services_subtitle}
        </h1>
      </div>

      
      <LineText text={texts.design_title} />

      <div className="w-full flex flex-wrap justify-between md:justify-around md:items-center my-14">
        <ServiceIcon
          text={"architectural_design"}
          icon={architectural_design_icon}
          link={"architectural_design"}
          subtitle={"architectural_design_subtitle"}
          description={"architectural_design_description"}
        />

        <ServiceIcon
          text={"mechanical_and_electrical"}
          icon={mechanical_and_electrical_icon}
          link={"mechanical_and_electrical"}
          subtitle={"mechanical_and_electrical_subtitle"}
          description={"mechanical_and_electrical_description"}
        />

        <ServiceIcon
          text={"structural_engineering"}
          icon={structural_engineering_icon}
          link={"structural_engineering"}
          subtitle={"structural_engineering_subtitle"}
          description={"structural_engineering_description"}
        />

        <ServiceIcon
          text={"civil_engineering"}
          icon={civil_engineering_icon}
          link={"civil_engineering"}
          subtitle={"civil_engineering_subtitle"}
          description={"civil_engineering_description"}
        />
      </div>

      <LineText2 text={texts.general_contracts} />

      <div className="w-full flex flex-wrap justify-between md:justify-around md:items-center mt-14 mb-14">
        <ServiceIcon
          text={"construction_management"}
          icon={construction_management_icon}
          subtitle={"construction_management_subtitle"}
          description={"construction_management_description"}
        />

        <ServiceIcon
          text={"renovation_and_remodeling"}
          icon={renovation_and_remodeling_icon}
          subtitle={"renovation_and_remodeling_subtitle"}
          description={"renovation_and_remodeling_description"}
        />

        <ServiceIcon
          text={"interior_fit_outs"}
          icon={interior_fit_outs_icon}
          subtitle={"interior_fit_outs_subtitle"}
          description={"interior_fit_outs_description"}
        />

        <ServiceIcon
          text={"infrastructure_development"}
          icon={infrastructure_development_icon}
          subtitle={"infrastructure_development_subtitle"}
          description={"infrastructure_development_description"}
        />
      </div>
    </div>
  );
}

export default Services;
