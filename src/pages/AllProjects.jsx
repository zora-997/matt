import React, { useContext, useState } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { dataDigitalBestSeller } from "../data";
import AllProjectImageView from "../components/AllProjectImageView";


function AllProjects() {
  const { texts } = useContext(LanguageContext);
  const [show, setShow] = useState(false)
  const [image, setImage] = useState()
  return (
    <div className="w-full  flex justify-center items-center">
      <AllProjectImageView isVisible={show} onClose={setShow} image={image} />
      <div>

        {/* top image and text */}
        <div className="max-w-[1820px]   h-[600px] bg-cover  mt-24 ">
          <img
            className="w-full h-[600px]  object-cover brightness-50 relative "
            src={dataDigitalBestSeller[0].mainIMG}
            alt="Slideshow"
          />

          <div className="max-w-[1820px] h-[650px] flex flex-col justify-around  absolute top-16 z-[20]">
            <h1 className="text-white mt-5 ml-5 mr-5 text-lg font-semibold">
              <a href="/">{texts.home}</a>
              {" > " + texts.projects}
            </h1>
          <div className=" text-9xl font-bold mt-44  mx-3 ">
            <h1 className="text-white text-3xl md:text-4xl font-bold">{texts.projects}</h1>
            <h1 className="text-white mt-5 text-base md:text-lg xl:text-2xl font-extralight text-start md:w-[60%] w-full">
              {texts.all_project_subtitle}
            </h1>
          </div>
          </div>

        </div>

        <div className="max-w-[1820px] flex flex-wrap items-center md:justify-between justify-center mt-10 mb-10">
          {dataDigitalBestSeller.map((item,i) => (
            // am ankar taga akay ba parent bo image ka la jey aw div xwarawa bo away bche bo sar image kani aw basha
            // <a href={`/all-projects/${item.id}`} className='md:w-72 w-full md:h-[400px] h-[500px] md:m-1 m-5 bg-black hover:bg-opacity-60 relative cursor-pointer'>
            //  {/* </a> */}
            <div key={i} onClick={()=> {setImage(item.mainIMG); setShow(true)}}  className="md:w-72 w-full md:h-[400px] h-[500px] md:m-1 m-5 bg-black hover:bg-opacity-60 relative cursor-pointer">
              <img
              
                src={item.mainIMG}
                alt={item.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full  flex items-end justify-center text-white p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-white font-bold text-xl text-center mb-10">
                  {/* {item.title} */}
                  Matt Company
                </h1>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default AllProjects;
