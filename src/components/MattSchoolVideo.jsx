import React, { useState } from "react";
import web from "../assets/video/mattschoolvideo1.MP4";
import web2 from "../assets/video/mattschoolvideo2.MP4";
import web3 from "../assets/video/mattschoolvideo3.MP4";
import web4 from "../assets/video/mattschoolvideo4.MP4";
import web5 from "../assets/video/mattschoolvideo5.MP4";
import web6 from "../assets/video/mattschoolvideo6.MP4";
import web7 from "../assets/video/mattschoolvideo7.MP4";
import web8 from "../assets/video/mattschoolvideo8.MP4";
import ViewVideoModal from "./ViewVideoModal";

const MattSchoolVideo = () => {

const [video, setVideo] = useState()
const [showVideo, setShowVideo] = useState(false)

  const videoData = [
    {
      id: 2,
      h1: "Matt Companyy is the best architecture comapny in iraq form kurdistan",
      video: web2,
    },
    {
      id: 1,
      h1: "Matt Companyy is the best architecture comapny in iraq form kurdistan",
      video: web4,
    },
    {
      id: 4,
      h1: "Matt Companyy is the best architecture comapny in iraq form kurdistan",
      video: web,
    },
    {
      id: 3,
      h1: "Matt Companyy is the best architecture comapny in iraq form kurdistan",
      video: web3,
    },
    {
      id: 5,
      h1: "Matt Companyy is the best architecture comapny in iraq form kurdistan",
      video: web5,
    },
    {
      id: 6,
      h1: "Matt Companyy is the best architecture comapny in iraq form kurdistan",
      video: web6,
    },
    {
      id: 7,
      h1: "Matt Companyy is the best architecture comapny in iraq form kurdistan",
      video: web7,
    },
    {
      id: 8,
      h1: "Matt Companyy is the best architecture comapny in iraq form kurdistan",
      video: web8,
    },
   
   
  ];

  return (
    <div className="max-w-[1720px] mx-auto  px-3 my-10">
     {showVideo ? <ViewVideoModal video={video} isVisible={showVideo} onClose={setShowVideo} />: null} 
      <h1 className="text-black font-bold text-4xl my-8">
        Matt School Our Course
      </h1>
      <div className="grid md:grid-cols-2  w-full   ">
        {videoData.map((videos) => {
          return (
            <div key={videos.id} className="w-fullscale-90  ">
              
              <h1 className="  text-xl text-gray-400 pl-3 py-16  ">{videos.h1}</h1>
                <video onClick={()=> {setVideo(videos.video); setShowVideo(true)}} autoPlay loop muted className="cursor-pointer w-full p-3">
                  <source
                    src={videos.video}
                    type="video/mp4"
                    className="w-full opacity-5 "
                  />
                </video>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MattSchoolVideo;
