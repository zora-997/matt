import React, { useEffect, useState } from "react";
import bgFurnishing from "../assets/video/mattFurnishing1.MP4";
import Loader from "../components/Loader";
import MattSchoolVideo from "../components/MattSchoolVideo";

const MattFurnishing = () => {
  const [loading, setLoading] = useState(true);
  const textLine = " -------------------------";
  const charactersLine = textLine.split("");
  const textLine2 = " ------------------------";
  const charactersLine2 = textLine2.split("");

  useEffect(() => {
    const load = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(load);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative w-full h-screen    ">
          <video
            autoPlay
            loop
            muted
            // playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={bgFurnishing} type="video/mp4" />
          </video>
          <div className="relative grid xl:flex xl:justify-start xl:items-center mx-auto  h-full max-w-[1720px] px-3  ">
            {/* lh */}
            <p className=" max-w-3xl text-gray-300 md:text-lg text-sm absolute md:bottom-80 bottom-10 mx-3 xl:mx-0 font-semibold">
                {/*  ---------------- dash border line ---------------------------- */}
      <h1 className="text-white mb-4 text-2xl max-w-md sm:text-4xl sm:max-w-3xl ">
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
           
           {/*  section name */}
            </h1>

              <span className="border-t border-l p-0.5  md:text-5xl text-3xl font-bold text-white ">
               Matt Furnishing
              </span>{" "}
              <br /> <br />
              <p className="border-l border-b p-1">The part of Mat Company that works on the supply and manufacture
              of household appliances by importing from abroad and supplying
              domestically. Through the experienced and professional staff of
              the company. Matt Furnishing works to create a comfortable and
              convenient life for families by building their home with
              attractive quality and design.
          </p>
                   {/*  ---------------- dash border line ---------------------------- */}
      <h1 className="text-white my-1 text-2xl max-w-md sm:text-4xl sm:max-w-3xl ">
              {charactersLine2.map((char, index) => (
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
           
           {/*  section name */}
            </h1>
            </p>
       
          </div>
        </div>
      )}
      <MattSchoolVideo />
    </>
  );
};

export default MattFurnishing;
