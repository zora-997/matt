import React from "react";

const AllProjectImageView = ({ isVisible, onClose, image }) => {
  if (!isVisible) return null;
  return (
    <div onClick={()=> onClose(false)} className=" fixed inset-0  bg-black bg-opacity-25 md:backdrop-blur-md backdrop-blur-sm   flex justify-center   items-center z-50">
      
        <img src={image} alt="show" className="lg:w-[1000px] lg:h-[800px]    object-cover  lg:px-5 " />
     
    </div>
  );
};

export default AllProjectImageView;
