import React from "react";
// import background from "../assets/matt-projects/matt 4.png";
import MattSchoolVideo from "../components/MattSchoolVideo";
// import background2 from "../assets/matt-projects/matt-company-logoo.png";
import web from "../assets/video/mattschoolvideo1.MP4";

const MattSchool = () => {
  return (
    <div id="mattschool">
    <div className=" h-screen xl:mt-0 mt-56  ">
      <video
    autoPlay
    loop
    muted
    // playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src={web} type="video/mp4"  />
  </video>
      <div className="relative grid xl:flex xl:justify-start xl:items-center mx-auto  h-full max-w-[1720px] px-3  ">
      {/* lh */}
        <p className="max-w-3xl text-gray-300 md:text-lg text-sm absolute bottom-80 mx-3 xl:mx-0 font-semibold">
          <span className=" md:text-5xl text-3xl font-bold text-white ">Matt School</span> <br/> <br/> The part of Matt company, the first architecture school in
          Iraq, It is an educational and scientific department of architecture
          Working to create a healthy environment in a cultured and developed
          society through providing courses on the principles and components of
          design, children's architecture courses, mastering design programs,
          working on the understanding of society to create a peaceful life.
        </p>
        {/* <img
          src={background}
          alt="background"
          className=" lg:w-[1000px] lg:h-[500px]   w-full mx-auto "
        /> */}
        {/* <img
          src={background}
          alt="background"
          className="absolute lg:left-60 lg:bottom-20 bg-white/5 opacity-5 "
        /> */}

      </div>
    </div>


     <MattSchoolVideo />
      </div>
  );
};

export default MattSchool;
