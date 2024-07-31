import React from "react";

const AllProjectImageView = ({ isVisible, onClose, image }) => {
  if (!isVisible) return null;
  return (
    <div onClick={()=> onClose(false)} className="hidden  fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm   lg:flex justify-center   items-start z-50">
      <div className="w-[800px] h-[300px] mt-20   ">
        <img src={image} alt="show" className="w-[1000px] h-[800px]  " />
      </div>
    </div>
  );
};

export default AllProjectImageView;
