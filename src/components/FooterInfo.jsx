import React from 'react'

function FooterInfo({text,icon,language}) {
  return (
    <div className={`flex  items-start  justify-start m-2 `}>
        <img className={`${language === 'en'?'mr-4':'ml-4'} `} src={icon} alt="icon" />
         <h1 className='text-white  font-semibold ' dir={`${icon === 'location_icon'?'rtl':'ltr'}`}>{text}</h1>
    </div>
  )
}

export default FooterInfo