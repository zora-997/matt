import React from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";
import FooterInfo from "../components/FooterInfo";
import location_icon from "../assets/gps.png";
import mail_icon from "../assets/mail.png";
import tel_icon from "../assets/telephone-call.png";
import facebook_icon from "../assets/facebook (1).png";
import instagram_icon from "../assets/instagram-logo.png";
import footer from "../assets/BG/footer.jpg";
import logo from "../assets/matt-projects/matt-company-logo.png";

export const Footer = () => {
  const { texts, language } = useContext(LanguageContext);

  return (
    //  <footer id='contact' class="p-4 bg-gray-500  md:pr-6 md:pl-6 mt:pr-6 md:pb-4 md:py-8 w-full m-auto text-white">
    //     <div class="max-w-[1300px] m-auto flex flex-col items-center justify-center">
    //            <h1 className='font-semibold text-lg md:w-[800px] text-center w-full mt-5'>{texts.footer_text}</h1>
    //            <div className=' flex  flex-wrap md:w-[800px] w-full items-center  justify-center  mt-12 mb-10'>
    //               <FooterInfo text={texts.location} icon={location_icon} language={language}/>
    //               <FooterInfo text={'info@mattiraq.com'} icon={mail_icon} language={language}/>
    //               <FooterInfo text={'+9647725286029'} icon={tel_icon} language={language}/>
    //               <div className={`flex  items-center  justify-items-center m-4 `}>
    //                <img className={`${language === 'en'?'mr-4':'ml-4'} `} src={facebook_icon} alt="icon" />
    //               <a target="_blank" rel="noreferrer" href='https://www.facebook.com/profile.php?id=100063985397590&mibextid=ZbWKwL'  className='text-white text-lg font-semibold '>Matt Company</a>
    //     </div>
    //               <div className={`flex  items-center  justify-items-center m-4 `}>
    //                <img className={`${language === 'en'?'mr-4':'ml-4'} `} src={instagram_icon} alt="icon" />
    //               <a target="_blank" rel="noreferrer" href='https://www.instagram.com/matt_company?igsh=MWVmZDFkN3RhdXM2Mw=='  className='text-white text-lg font-semibold '>matt_company</a>
    //     </div>
    //            </div>
    //     </div>

    //     <hr class=" border-[#307fc0] sm:mx-auto max-w-[1300px]  mt-5 mb-5" />

    //       <div class="max-w-[1300px] m-auto flex  items-center justify-center">
    //          <span class="block   sm:text-center text-md font-serif" dir='ltr'>
    //            ©{(new Date().getFullYear())} <a target="_blank" rel="noreferrer" href="https://mattiraq.com" class="hover:underline">MattIraq</a>. All Rights Reserved.
    //          </span>
    //       </div>

    // </footer>

    <footer
      id="contact"
      className="relative m-auto  flex  items-center justify-center brightness-75 text-white"
    >
      <img
        src={footer}
        alt="footer"
        className="object-cover brightness-50 w-full h-[60rem] relative "
      />
      <img
        src={logo}
        alt="logo"
        className="absolute top-[10%] md:top-[0%] lg:w-[90rem] md:w-[70rem] w-fit  lg:h-[55rem] md:h-[40rem] h-fit "
      />

      <div class="max-w-[1300px] m-auto   absolute bottom-6">
        <h1 className=" text-base md:text-lg md:w-[800px] text-center w-full px-2">
          {texts.footer_text}
        </h1>
        <div className=" flex  flex-wrap md:w-[800px] w-full items-center md:justify-center  justify-start  mt-12 mb-10">
          <FooterInfo
            text={"+9647725286029"}
            icon={tel_icon}
            language={language}
          />
          <div className={`flex  items-center  justify-items-center m-4 `}>
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
          <div className={`flex  items-center  justify-items-center m-4 `}>
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

      <div class=" absolute bottom-2  ">
        <span class="block   sm:text-center text-md font-serif" dir="ltr">
          ©{new Date().getFullYear()}{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mattiraq.com"
            class="hover:underline"
          >
            MattIraq
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
