import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { useLocation, Link } from "react-router-dom";
import logo_image from "../assets/matt-company.png";
import logo_matt_school from "../assets/matt 4.png";


const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const [nav, setNav] = useState(false);
  // const [scrollMove, setScrollMove] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("graytext-gray-300");

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -100; // Adjust this value to set the margin
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      handleNav(); // Close the mobile menu after navigation
    }
  };

  useEffect(() => {
    if (path === "/" || path === "/mattschool") {
      setTextColor("text-gray-300");
    } else {
      setTextColor("black");
    }
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("rgba(0, 0, 0, 0.5)");
        setTextColor("text-gray-300");
      } else {
        setColor("transparent");
        if (path !== "/" || path !== "/mattschool") {
          // setTextColor("black");
        } else {
          setTextColor("text-gray-300");
        }
      }
    };

    const handleScroll = () => {
      changeColor();
      // setScrollMove(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [path]);

  const { texts, language } = useContext(LanguageContext);

  // "changeLanguage" am functiona la useContext abe bank bkretawa bo gorini zmanakan
  // const toggleLanguage = (lang) => {
  //   changeLanguage(lang);
  // };


  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-40 ease-in duration-300  "
    >
      <div className="max-w-[1820px] m-auto  flex justify-between items-center p-7    text-gray-300">
        <a href="/">
          <img
            src={path === "/mattschool" ? logo_matt_school :logo_image}
            alt="log"
            className = {path === "/mattschool" ?"w-42 h-20": "w-56 h-36 scale-150 absolute md:left-0 -left-7 -top-7 md:-top-6"}
          />
        </a>

        <ul
          style={{ color: `${textColor}` }}
          className="hidden lg:flex items-center "
        >
          <li className="p-4 text-md tracking-widest  font-arfont hover:text-[#307fc0]">
            {path !== "/" ? (
              <a href="/">{texts.home}</a>
            ) : (
              <Link onClick={() => scrollToSection("/")}>{texts.home}</Link>
            )}
          </li>

         

          <li className="p-4 text-md tracking-widest  font-arfont hover:text-[#307fc0]">
            {path !== "/" ? (
              <a href="/about">{texts.about}</a>
            ) : (
              <Link onClick={() => scrollToSection("about")}>
                {texts.about}
              </Link>
            )}
          </li>

{/* matt school */}
<li className="p-4 text-md tracking-widest  font-arfont hover:text-[#307fc0]">
            
              <Link to="/mattschool">
                {texts.matt_school}
              </Link>

          </li>
{/* matt funishing */}
<li className="p-4 text-md tracking-widest  font-arfont hover:text-[#307fc0]">
           
              <Link to="/mattfurnishing">
                {texts.matt_furnishing}
              </Link>

          </li>

          <li className="p-4 text-md tracking-widest  font-arfont hover:text-[#307fc0]">
            {path !== "/" ? (
              <a href="/">{texts.services}</a>
            ) : (
              <Link onClick={() => scrollToSection("services")}>
                {texts.service}
              </Link>
            )}
          </li>
          <li className="p-4 text-md tracking-widest  font-arfont hover:text-[#307fc0]">
            {path !== "/" ? (
              <a href="/all-projects">{texts.projects}</a>
            ) : (
              <Link onClick={() => scrollToSection("projects")}>
                {texts.projects}
              </Link>
            )}
          </li>
          <li className="p-4 text-md tracking-widest  font-arfont hover:text-[#307fc0]">
            <Link onClick={() => scrollToSection("contact")}>
              {texts.contact}
            </Link>
          </li>
          {/* button en ar bo laptop */}
          {/* <li className={`${language === "en" ? "ml-2" : "mr-2"}`}>
            <button
              className={`border border-[#307fc0]  font-bold w-14 h-8 ${
                language === "en"
                  ? "bg-[#307fc0] rounded-l-md text-gray-300"
                  : `rounded-r-md text-${textColor}`
              } `}
              onClick={() => toggleLanguage("en")}
            >
              EN
            </button>

            <button
              className={`border border-[#307fc0]  font-bold w-14 h-8 ${
                language === "ar"
                  ? "bg-[#307fc0] rounded-l-md text-gray-300"
                  : `rounded-r-md text-${textColor}`
              }`}
              onClick={() => toggleLanguage("ar")}
            >
              AR
            </button>
          </li> */}
        </ul>

        {/* Mobile Button */}
        <div className="flex lg:hidden z-10 items-center justify-center">
          {/* Language buttons en */}
          {/* <button
            className={`border border-[#307fc0]  font-bold w-10 h-8 textColor ${
              language === "en"
                ? "bg-[#307fc0] rounded-l-md text-gray-300"
                : `rounded-r-md ${nav ? `text-gray-300` : `text-${textColor}`}`
            }`}
            onClick={() => toggleLanguage("en")}
          >
            EN
          </button> */}
          {/* Language buttons ar */}
          {/* <button
            className={`border border-[#307fc0] font-bold w-10 h-8  ${
              language === "ar"
                ? "bg-[#307fc0] rounded-l-md text-gray-300"
                : `rounded-r-md ${nav ? `text-gray-300` : `text-${textColor}`} `
            }`}
            onClick={() => toggleLanguage("ar")}
          >
            AR
          </button> */}

          {/* Mobile navigation button */}
          <button
            onClick={handleNav}
            className={`${language === "en" ? "ml-4" : "mr-4"}`}
          >
            {nav ? (
              <AiOutlineClose
                size={32}
                style={{ color: `graytext-gray-300` }}
              />
            ) : (
              <AiOutlineMenu size={32} style={{ color: `${textColor}` }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? `sm:hidden absolute top-0 ${
                  language === "en" ? "left-0" : "right-0"
                } w-full h-screen bg-black text-center ease-in duration-300 flex justify-center items-center`
              : `sm:hidden absolute top-0 ${
                  language === "en" ? "left-[-100%]" : "right-[-100%]"
                } w-full h-screen bg-black text-center ease-in duration-300 flex justify-center items-center`
          }
        >
          <ul>
            <li className="p-4 text-lg font-bold hover:text-[#307fc0]">
              {path !== "/" ? (
                <a href="/">{texts.home}</a>
              ) : (
                <Link onClick={() => scrollToSection("/")}>{texts.home}</Link>
              )}
            </li>
            <li className="p-4 text-lg font-bold hover:text-[#307fc0]">
              {path !== "/" ? (
                <a href="/about">{texts.about}</a>
              ) : (
                <Link>
                  {texts.about}
                </Link>
              )}
            </li>
            <li className="p-4 text-lg font-bold hover:text-[#307fc0]">
              {path !== "/" ? (
                <a href="/">{texts.services}</a>
              ) : (
                <Link onClick={() => scrollToSection("services")}>
                  {texts.services}
                </Link>
              )}
            </li>
            <li className="p-4 text-lg font-bold hover:text-[#307fc0]">
              {path !== "/" ? (
                <a href="/all-projects">{texts.projects}</a>
              ) : (
                <Link onClick={() => scrollToSection("projects")}>
                  {texts.projects}
                </Link>
              )}
            </li>
            <li className="p-4 text-lg font-bold hover:text-[#307fc0]">
              <Link onClick={() => scrollToSection("contact")}>
                {texts.contact}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
