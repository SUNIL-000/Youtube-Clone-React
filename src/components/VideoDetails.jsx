import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useParams } from 'react-router-dom';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedIcon from "@mui/icons-material/Verified";
import ReactPlayer from "react-player";
import { fetchFromApi } from "../utils/fetchData";
import VideoCard from "./VideoCard";
const VideoDetails = () => {
  const [videoDetails, setvideoDetails] = useState(null);
  const [suggestedVideo, setSuggestedVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setvideoDetails(data.items[0])
    );
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setSuggestedVideo(data.items)
    );
  }, [id]);
  if(!videoDetails) return "Loading.."

  console.log(suggestedVideo);
  return (
    <>
      <div className="grid  grid-cols-1 sm:grid-cols-8 md:grid-cols-7 relative w-full gap-2 ">
        <div className="md:col-span-5 sm:col-span-8 sticky  px-7 mt-5 ">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player "
            height={30}
            controls={true}
          />
          <div>
            <p className="text-white md:text-2xl font-semibold sm:text-xl">
              {videoDetails?.snippet?.title}
            </p>
            <div>
              <h4 className="text-gray-500 flex items-center font-semibold ">
                {videoDetails?.snippet?.channelTitle}
                <span className="ml-2">
                  <VerifiedIcon size="small" />
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 mx-10 sm:col-span-3 md:mx-9">
          {suggestedVideo.map((items, index) => {
            return <VideoCard key={index} video={items} />;
          })}
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
