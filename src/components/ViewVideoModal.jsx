import React from 'react'

const ViewVideoModal = ({ isVisible, onClose, video }) => {

    console.log(video);
    const nameVideo1 = "/static/media/mattschoolvideo5.8efbd62fde3a55728ff4.MP4";
    const nameVideo2 = "/static/media/mattschoolvideo6.836c644642bcaeea3af3.MP4";
    const nameVideo3 = "/static/media/mattschoolvideo7.c511861a0c700e711bea.MP4";
    const nameVideo4 = "/static/media/mattschoolvideo8.6833e4b72feddfa1a68b.MP4";
    
    if (!isVisible) return null;
    return (
      <div onClick={()=> onClose(false)} className="  fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm   flex justify-center    z-50">
        <div className={`${video === nameVideo1 || video === nameVideo2 || video === nameVideo3 || video === nameVideo4   ? 'w-[1500px] place-self-center ': 'w-[520px] '} p-3   `} >
        <video autoPlay loop className="border border-[#307fc0] ">
                  <source
                    src={video}
                    type="video/mp4"
                    className=""
                  />
                </video>
        </div>
      </div>
    );
}

export default ViewVideoModal
