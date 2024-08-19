import React, {
  useContext,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useState,
} from "react";
import { LanguageContext } from "../Context/LanguageContext";

import bg_1 from "../assets/BG/BG1.jpg";
import bg_2 from "../assets/BG/BG2.jpg";
import bg_4 from "../assets/BG/BG4.jpg";
import bg_5 from "../assets/BG/BG5.jpg";
import bg_3 from "../assets/BG/BG3.jpg";
import bg_6 from "../assets/BG/BG6.jpg";
import bg_7 from "../assets/BG/BG7.jpg";

// import bg_5 from "../assets/BG/IMG_1658.jpg";
// import bg_6 from "../assets/BG/IMG_3647.jpg";
// import bg_7 from "../assets/BG/IMG_4198.jpg";
// import bg_8 from "../assets/BG/IMG_5560.jpg";
// import bg_9 from "../assets/BG/IMG_9876.jpg";

import "aos/dist/aos.css";
import Loader from "../components/Loader";
const Hero = () => {
  const { texts } = useContext(LanguageContext);
  const imageRef = useRef(null);
  const currentIndexRef = useRef(0);
  const text = texts.hero_title;
  const characters = text.split("");
  const textLine = " -----------------------------------------------------";
  const charactersLine = textLine.split("");

  const images = useMemo(
    //  bg_6, bg_7, bg_8, bg_9
    () => [bg_1, bg_5, bg_7, bg_2, bg_4, bg_3, bg_6],
    []
  );
  // const textReveal = () => {
  //   return(<h1 className="text-3xl font-bold text-white">
  //   {characters.map((char, index) => (
  //     <span
  //       key={index}
  //       className={`inline-block ${
  //         index === 0 ? "" : "animate-text-reveal"
  //       }`}
  //       style={{ animationDelay: `${index * 0.1}s` }}
  //     >
  //       {char}
  //     </span>
  //   ))}
  // </h1>)
  // }

  // loading page
  const [isLoading, setIsLoading] = useState(true);
  const imagesMemo = useMemo(() => images, [images]);
  const nextImage = useCallback(() => {
    currentIndexRef.current = (currentIndexRef.current + 1) % imagesMemo.length;
    if (imageRef.current) {
      // Check if imageRef.current is not null
      imageRef.current.src = imagesMemo[currentIndexRef.current];
    }
    if (imagesMemo.length === 7) {
      setIsLoading(false);
    }
  }, [imagesMemo]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [nextImage]);

  //  useEffect(() => {
  //      // Simulate data fetching
  //      setTimeout(() => {
  //          setIsLoading(false);
  //      }, 9000); // Replace with your actual data fetching logic
  //  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full   h-[100%]  ">
          <img
            className="w-screen  h-screen object-cover brightness-50 "
            ref={imageRef}
            src={images[0] && images[0]}
            alt="Slideshow"
          />

          <div className="absolute  top-0 left-0  bottom-0 right-0 text-start z-10 px-2 flex flex-col justify-center items-center  ">
            {/* text title hero */}
            {/* <h1
          className="text-white font-bold text-5xl max-w-3xl  "
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          
          
        >
          {texts.hero_title}
        </h1> */}

            {/*  ---------------- dash border line ---------------------------- */}
            <h1 className="text-white  text-2xl max-w-md sm:text-4xl sm:max-w-3xl ">
              {charactersLine.map((char, index) => (
                <span
                  key={index}
                  className={`inline-block ${
                    index === 0 || char === "" ? "" : "animate-text-reveal"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </h1>

            {/* ------------------- text title hero ----------------------------------*/}
            <h1 className="text-white font-bold border-l-2 border-t-2 p-2 text-2xl max-w-md sm:text-5xl sm:max-w-3xl 2xl:text-7xl 2xl:max-w-6xl ">
              {characters.map((char, index) => (
                <span
                  key={index}
                  className={`inline-block ${
                    index === 0 || char === "" ? "" : "animate-text-reveal pr-1"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </h1>

            {/*  ------------------ subtitle ---------------------------- */}
            <h1
              className="text-white text-sm md:text-lg max-w-md sm:max-w-3xl  p-2  mt-5"
              data-aos="fade-down"
            >
              {texts.hero_subtitle}
            </h1>
            {/* <a
          href="about"
          className="mt-14 bg-[#307fc0] flex justify-center items-center text-black font-bold rounded w-56 h-12 hover:bg-gray-700 hover:text-white hover:border-white hover:border"
          data-aos="fade-up"
        >
          {texts.about_us}
        </a> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
