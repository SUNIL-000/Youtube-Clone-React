import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchData";

import VideoCard from "./VideoCard";


const ChannelCardDetails = () => {
  const [channeldetails, setChannelDetails] = useState(null);
  const [channelvideos, setchannelvideos] = useState([]);
  const { id } = useParams();
  // console.log(channeldetails);
  console.log(channelvideos);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setchannelvideos(data.items)
    );
  }, [id]);
  return (
    <div className="bg-black ">
      <div className="bg-gradient-to-r   from-[#e36565] via-[#e20d0d] to-[#e36565] h-[160px] "></div>
      <div className="mx-auto flex justify-center items-center mt-[-100px]  ">
        <div className=" w-[300px]  flex flex-col justify-center items-center">
          <img
            className="rounded-full w-[50%] h-[50%]"
            src={channeldetails?.snippet?.thumbnails?.high?.url}
            alt="logo"
          />
        <div className="text-center">
          <h1 className="font-bold uppercase text-white">{channeldetails?.snippet?.title}</h1>
          <h3 className="text-gray-600 font-semibold uppercase">
            {"Subscriber: "}
            {channeldetails?.statistics?.subscriberCount}
          </h3>
        </div>
        </div>
      </div>


      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-[60px] md:mx-[12px]  gap-7">
       {
        channelvideos.map((items)=>{
          return  <VideoCard video={items}/>
        }  )       
        }
        
      </div>
    </div>
  );
};

export default ChannelCardDetails;
// channelvideos.map((video,index)=>{
//   return <div className="block md:w-[360px] h-[350px] mt-5  border shadow-sm rounded-xl dark:bg-[#000] dark:border-black dark:shadow-slate-700/[.7]">
//   <Link
//     className=""
//     to={video?.id?.videoId ? `/video/${video?.id?.videoId}` : demoVideoUrl}
//   >
//     <img
//       className="w-full h-[70%] rounded-t-xl"
//       src={video?.snippet ? `${video?.snippet?.thumbnails?.high?.url}` : demoThumbnailUrl}
//       alt={video?.snippet?.title}
//     />
//   </Link>
//   <div className="p-2 md:p-1">
//     <Link
//       to={video?.id.videoId ? `/video/${video?.id.videoId}` : demoVideoUrl}
//       className="text-white py-7"
//     >
//       <p className=" text-[#e3d9d920] dark:text-white font-bold x">
//         {video?.snippet?.title.slice(0, 90) + "..."}
//       </p>
//     </Link>
//     <Link
//       to={
//         video?.snippet?.channelId
//           ? `/channel/${video?.snippet?.channelId}`
//           : demoChannelUrl
//       }
//     >
//       <p className=" text-lg text-[#fff] dark:text-gray-500 flex items-center ">
//         {video?.snippet ? `${video?.snippet?.channelTitle}` : demoVideoTitle}{" "}
//         <span className="text-[10px] ml-2  font-bold">
//           <CheckCircleIcon />
//         </span>
//       </p>
//     </Link>
//   </div>
// </div>
// })