import React, { useEffect, useState } from "react";
// import background from "../assets/matt-projects/matt 4.png";
import MattSchoolVideo from "../components/MattSchoolVideo";
// import background2 from "../assets/matt-projects/matt-company-logoo.png";
import web from "../assets/video/mattschoolvideo1.MP4";
import Loader from "../components/Loader";

const MattSchool = () => {
  const [loading, setLoading] = useState(true);
  const textLine = " -------------------------";
  const charactersLine = textLine.split("");
  const textLine2 = " ------------------------";
  const charactersLine2 = textLine2.split("");

  useEffect(() => {
    const load = setTimeout(() => {
      setLoading(false);
    }, 5000);

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
            <source src={web} type="video/mp4" />
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
              <span className="border-t border-l p-1.5  md:text-5xl text-3xl font-bold text-white ">
                Matt School
              </span>{" "}
              <br /> <br />
              <p className="border-l border-b p-2">
                The part of Matt company, the first architecture school in Iraq,
                It is an educational and scientific department of architecture
                Working to create a healthy environment in a cultured and
                developed society through providing courses on the principles
                and components of design, children's architecture courses,
                mastering design programs, working on the understanding of
                society to create a peaceful life.
              </p>
              {/*  ---------------- dash border line ---------------------------- */}
              <h1 className="text-white mb-2.5 text-2xl max-w-md sm:text-4xl sm:max-w-3xl ">
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

export default MattSchool;
