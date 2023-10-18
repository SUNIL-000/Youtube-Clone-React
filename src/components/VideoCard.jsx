import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";


import { Link } from "react-router-dom";
// import { Card } from "@mui/material";
const VideoCard = ({ video }) => {
  // console.log(video);
  if (!video) {
    console.log("Error in video data fetching.....");
  }

  return (
    <div className=" h-[400px]  shadow-sm  dark:bg-[#000000] ">
      <Link className="" to={`/video/${video?.id?.videoId}`}>
        <img
          className="w-full h-[65%] rounded-xl"
          src={`${video?.snippet?.thumbnails?.high?.url}`}
          alt={video?.snippet?.title}
        />
      </Link>
      <div className="  md:p-1  relative ">
      
        
        
        <Link to={`/video/${video?.id.videoId}`} className="text-white py-7">
          <p className=" text-[#e3d9d920] dark:text-white font-bold x">
            {video?.snippet?.title }
          </p>
        </Link>
        <Link className="absolute mt-3" to={`/channel/${video?.snippet?.channelId}` }>
          <div className=" text-sm text-[#fff]  font-semibold dark:text-[#eae8e8ec] flex items-center ">
            {`${video?.snippet?.channelTitle}`}{" "}

            <span className="text-[7px] ml-2 flex text-gray-400 font-bold">
              
              <VerifiedIcon  className="text-sm"/>
            </span>            
          </div>
          
        </Link>
        
      </div>
    </div>
  );
};

export default VideoCard;
