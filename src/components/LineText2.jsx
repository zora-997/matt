import React from 'react'

import 'aos/dist/aos.css';
function LineText2({text}) {
  return (
    <div className='w-full flex justify-start items-center '>
      {/* <div className='bg-gray-700 rounded-3xl md:w-[80%] w-[0%] h-0.5 mt-2'
        data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"

      /> */}
       <h1 className='text-gray-800 font-bold md:text-2xl text-lg mx-1 min-w-fit'
        data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"

       >{text}</h1>
       <div className='bg-gradient-to-l from-white via-gray-100 to-gray-400 rounded-3xl md:w-[90%] w-[0%] h-0.5 mt-2'
        data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"

       />
    </div>
  )
}

export default LineText2