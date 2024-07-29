import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import 'aos/dist/aos.css';


function ServiceIcon({ text, icon, link, subtitle ,description}) {
  // Encode the additional data as query parameters
  const queryParams = new URLSearchParams({ text, subtitle , description }).toString();

  const handleClick = () => {
     window.location.href = `/services/${link}?${queryParams}`;
  };
  const { texts } = useContext(LanguageContext);
  const [finalTitle, setFinalTitle] = useState(text); 

  useEffect(()=>{
   if(text === 'architectural_design'){
     setFinalTitle(texts.architectural_design);
   }else if(text === 'structural_engineering'){
     setFinalTitle(texts.structural_engineering);
   }else if(text === 'mechanical_and_electrical'){
     setFinalTitle(texts.mechanical_and_electrical);
   }else if(text === 'civil_engineering'){
     setFinalTitle(texts.civil_engineering);
   }else if(text === 'construction_management'){
     setFinalTitle(texts.construction_management);
   }else if(text === 'renovation_and_remodeling'){
     setFinalTitle(texts.renovation_and_remodeling);
   }else if(text === 'interior_fit_outs'){
     setFinalTitle(texts.interior_fit_outs);
   }else if(text === 'infrastructure_development'){
     setFinalTitle(texts.infrastructure_development);
   }
  },[text, texts.architectural_design, texts.structural_engineering, texts.mechanical_and_electrical, texts.civil_engineering, texts.construction_management, texts.renovation_and_remodeling, texts.interior_fit_outs, texts.infrastructure_development]);


  return (
    <div
      onClick={handleClick}
      className='flex  flex-col items-center justify-between mb-5 md:w-72 w-40 cursor-pointer'
    >
      <img className={`md:w-32  md:h-32 `}
        data-aos='fade-down'
      src={icon} alt="icon" />
      <h1 
      className='text-gray-800 md:text-lg  mt-5'
      data-aos='fade-down'
      >{finalTitle}</h1>
    </div>
  );
}

export default ServiceIcon;
