import React from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";
import GoalSubtitle from "../components/GoalSubtitle";

function About() {
  const { texts } = useContext(LanguageContext);
  return (
    <div className="w-full  bg-white flex  justify-center items-center">
      <div className="">
        <div className="max-w-[1250px] h-[750px] about-bg-img bg-cover relative mt-24">
          <div className="absolute left-0 right-0 top-0 bottom-0 z-[1]">
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/20" />
          </div>

          <div className="max-w-[1250px] h-full flex flex-col justify-between relative z-[2]">
            <h1 className="text-white mt-5 ml-5 mr-5 text-lg font-semibold">
              <a href="/">{texts.home}</a>
              {" > " + texts.about_us}
            </h1>

            <div className="flex flex-col justify-center items-center mb-5 ml-5 mr-5">
              <h1 className="text-white mt-5 ml-5 text-3xl font-bold">
                {texts.about_us}
              </h1>
              <h1 className="text-white mt-5 text-lg font-semibold text-center md:w-[75%] w-full">
                {texts.about_section_text}
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-[1250px]  flex flex-col  items-center justify-center mt-9 ml-2 mr-2">
          <h1 className="text-black mt-14 ml-5 mr-5 mb-5 md:text-2xl text-xl font-bold text-center max-w-[900px]">
            {texts.who_are_we}
          </h1>
          <h1 className="text-gray-700 md:text-lg font-semibold text-center max-w-[900px] w-full mb-20">
            {texts.who_are_we_subtitle}
          </h1>

          <h1 className="text-black mb-5 ml-5 mr-5 md:text-2xl text-xl font-bold text-center max-w-[900px]">
            {texts.why_choose_us}
          </h1>
          <h1 className="text-gray-700 md:text-lg font-semibold text-center max-w-[900px] w-full mb-20">
            {texts.why_choose_us_subtitle}
          </h1>

          <h1 className="text-black  ml-5 mr-5 mb-5 md:text-2xl text-xl font-bold text-center max-w-[900px]">
            {texts.goal}
          </h1>
          <GoalSubtitle
            title={texts.client_atisfaction}
            subtitle={texts.client_atisfaction_subtitle}
          />
          <GoalSubtitle
            title={texts.innovation_and_creativity}
            subtitle={texts.innovation_and_creativity_subtitle}
          />
          <GoalSubtitle
            title={texts.growth_and_expansion}
            subtitle={texts.growth_and_expansion_subtitle}
          />

          <h1 className="text-black mt-9 ml-5 mr-5 mb-5 md:text-2xl text-xl font-bold text-center max-w-[900px]">
            {texts.mission}
          </h1>
          <h1 className="text-gray-700 md:text-lg font-semibold text-center max-w-[900px] w-full">
            {texts.mission_subtitle}
          </h1>

          <h1 className="text-black mt-14 ml-5 mr-5 mb-5 md:text-2xl text-xl font-bold text-center max-w-[900px]">
            {texts.vision}
          </h1>
          <h1 className="text-gray-700 md:text-lg font-semibold text-center max-w-[900px] w-full mb-20">
            {texts.vision_subtitle}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;
