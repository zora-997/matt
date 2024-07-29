import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { LanguageContext } from '../Context/LanguageContext';
import { useContext } from 'react';
import { dataDigitalBestSeller } from '../data';
import Slider from 'react-slick';
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

function ProjectItem() {
  const location = useLocation(); 
  const url = location.pathname
  const id = url.slice(url.lastIndexOf('/') + 1);


  const { texts ,language} = useContext(LanguageContext);

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


  const [isExteriorOpen, setExteriorModalOpen] = useState(false);
  const [isInteriorOpen, setInteriorModalOpen] = useState(false);
  const [isLandscapOpen, setLandscapModalOpen] = useState(false);


  const ExteriorImages = dataDigitalBestSeller[id].exterior.map((imageName) => {
    return {
      src: imageName,
    };
  });

  const InteriorImages = dataDigitalBestSeller[id].interior.map((imageName) => {
    return {
      src: imageName,
    };
  });



  const LandscapImages = dataDigitalBestSeller[id].landscap.map((imageName) => {
    return {
      src: imageName,
    };
  });



  const [index, setIndex] = useState(-1);
  const isModalOpen = (state,place,index) => {
      setIndex(index)
      if (place === 'LandscapImages') {
        setLandscapModalOpen(state);
        setExteriorModalOpen(false); // Close other Lightboxes if open
        setInteriorModalOpen(false);
      } else if (place === 'ExteriorImages') {
        setExteriorModalOpen(state);
        setInteriorModalOpen(false); // Close other Lightboxes if open
        setLandscapModalOpen(false);
      } else {
        setInteriorModalOpen(state);
        setExteriorModalOpen(false); // Close other Lightboxes if open
        setLandscapModalOpen(false);
      }
  };


  
  return (
    <div className='w-[100%] bg-white flex justify-center items-center'>
      <div className=''>
        <div className='w-full  h-[600px] bg-cover relative mt-24'>
        <img className=" w-full h-[600px] z-[1]  object-cover brightness-50 absolute"  src={dataDigitalBestSeller[id].mainIMG} alt="Slideshow" />

          <div className='h-full flex flex-col justify-between relative z-[2]'>
            <h1 className=' flex md:items-start md:justify-start items-start justify-stretch text-white mt-5 ml-5 mr-5 text-lg font-semibold'>
            <a href='/'>{texts.home}</a> &nbsp; {'>'} &nbsp; <a href='/all-projects'>{texts.projects}</a> &nbsp; {' > '+dataDigitalBestSeller[id].title}</h1>

            <div className='flex flex-col justify-center items-center mb-5 ml-5 mr-5'>
              <h1 className='text-white mt-5 ml-5 text-3xl font-bold'>{dataDigitalBestSeller[id].title}</h1>
            </div>
          </div>

        </div>

        <div className='flex flex-col items-center justify-center mt-9 ml-2 mr-2  '>
          <h1 className='text-gray-700 mt-5 md:text-lg font-semibold text-center '>{language === 'en'?dataDigitalBestSeller[id].english:dataDigitalBestSeller[id].arabic}</h1>

          {dataDigitalBestSeller[id].interior.length === 0?'':<h1 className='text-black font-bold md:text-2xl text-lg mb-10 w-full flex justify-center items-center mt-8'>{texts.interior}</h1>}
{          <Slider {...settings} className="lg:w-[1200px] xsm:w-80 2xsm:w-72 w-52 mb-10  ">
            {dataDigitalBestSeller[id].interior.map((item,index) => (

                <div className='flex justify-center items-center object-cover w-full h-56 card'>
                  <img src={item} alt={item} onClick={() => isModalOpen(true, 'InteriorImages',index) }className='flex  justify-center items-cente object-cover w-full h-56'/>
                </div>
             

            ))}
          </Slider>}

          {dataDigitalBestSeller[id].exterior.length === 0?'':<h1 className='text-black font-bold md:text-2xl text-lg mt-10 w-full flex justify-center items-center'>{texts.exterior}</h1>}
          <Slider {...settings} className="lg:w-[1200px] xsm:w-80 2xsm:w-72 w-52 mb-10 mt-10">
            {dataDigitalBestSeller[id].exterior.map((item,index) => (

                <div className='flex justify-center items-center object-cover w-full h-56 card'>
                  <img src={item} alt={item} onClick={() => isModalOpen(true,'ExteriorImages',index)} className='flex  justify-center items-cente object-cover w-full h-56'/>
                </div>
   
            ))}
          </Slider> 

          {dataDigitalBestSeller[id].landscap.length === 0?'':<h1 className='text-black font-bold md:text-2xl text-lg mt-10 w-full flex justify-center items-center'>{texts.landscap}</h1>}
          <Slider {...settings} className="lg:w-[1200px] xsm:w-80 2xsm:w-72 w-52 mb-32 mt-10">
            {dataDigitalBestSeller[id].landscap.map((item,index) => (

                <div className='flex justify-center items-center object-cover w-full h-56 card'>
                  <img src={item} alt={item} onClick={() => isModalOpen(true, 'LandscapImages',index)} className='flex  justify-center items-cente object-cover w-full h-56'  />
                </div>
             
 
            ))}
          </Slider> 
        </div>
      </div>

      <Lightbox
        index={index}
        slides={
          isExteriorOpen
            ? ExteriorImages
            : isInteriorOpen
            ? InteriorImages
            : LandscapImages
        }
        open={isExteriorOpen || isInteriorOpen || isLandscapOpen}
        plugins={[ Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
        close={() => isModalOpen(false)}
       styles={{ 
        thumbnail:{
          borderColor: '#FCD34D', 
        },}
       }
      /> 

    </div>
  );
}

export default ProjectItem;
