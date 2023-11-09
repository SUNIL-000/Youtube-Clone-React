import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchData";
// import VideoCard from './VideoCard';
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VideoCard from "./VideoCard";

const SearchDetails = () => {
  const { searchterm } = useParams();
  console.log(searchterm);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchterm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchterm]);

  console.log(videos);
  return (
    <div >
      
        <div className="text-white flex justify-center py-5 items-center text-2xl font-bold capitalize mx-auto">
          Showing video related to{" "}
          <span className="text-red-500 ml-3">{searchterm}</span>
        </div>
        <div className="mx-[50px] md:mx-[60px] bg-black grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
          {videos.map((items, index) => {
            return <VideoCard key={index} video={items} />;
          })}
    
      </div>
    </div>
  );
};

export default SearchDetails;
