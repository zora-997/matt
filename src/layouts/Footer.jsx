import React from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";
import FooterInfo from "../components/FooterInfo";
import location_icon from "../assets/map-location.png";
import mail_icon from "../assets/mail (1).png";
import tel_icon from "../assets/phone-call (1).png";
import facebook_icon from "../assets/facebook.png";
import instagram_icon from "../assets/instagram-logo (1).png";
// import footer from "../assets/BG/footer.jpg";
import bg from "../assets/matt-projects/project-2.jpg";
import logo from "../assets/matt-projects/matt-company-logo.png";

export const Footer = () => {
  const { texts, language } = useContext(LanguageContext);

  return (
    <footer
      id="contact"
      className="relative m-auto w-full flex  items-center justify-center  text-white"
    >
      <img
        src={bg}
        alt="footer"
        className="object-cover brightness-50 w-full  lg:h-[50rem] h-[42rem] relative "
      />
      <img src={logo} alt="logo" className="absolute md:hidden top-2   " />

      <div className="max-w-[1300px] m-auto   absolute bottom-6">
        <h1 className=" text-base md:text-lg md:w-[800px] text-center w-full px-2">
          {texts.footer_text}
        </h1>
        <div className=" flex text-base md:text-lg flex-wrap md:w-[800px] w-full items-center md:justify-center  justify-start  my-12">
          <FooterInfo
            text={"+9647725286029"}
            icon={tel_icon}
            language={language}
          />
          <div className={`flex  items-center  justify-items-center m-2 `}>
            <img
              className={`${language === "en" ? "mr-4" : "ml-4"} `}
              src={facebook_icon}
              alt="icon"
            />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100063985397590&mibextid=ZbWKwL"
              className="text-white text-lg font-semibold "
            >
              Matt Company
            </a>
          </div>
          <div className={`flex  items-center  justify-items-center m-2 `}>
            <img
              className={`${language === "en" ? "mr-4" : "ml-4"} `}
              src={instagram_icon}
              alt="icon"
            />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/matt_company?igsh=MWVmZDFkN3RhdXM2Mw=="
              className="text-white text-lg font-semibold "
            >
              matt_company
            </a>
          </div>
          <FooterInfo
            text={"info@mattiraq.com"}
            icon={mail_icon}
            language={language}
          />
          <FooterInfo
            text={texts.location}
            icon={location_icon}
            language={language}
          />
        </div>
      </div>

      <div className=" absolute bottom-2  ">
        <span className="block   sm:text-center text-md font-serif" dir="ltr">
          ©{new Date().getFullYear()}{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://bluesoft.team"
            className="hover:underline"
          >
            BLUE SOFT
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
