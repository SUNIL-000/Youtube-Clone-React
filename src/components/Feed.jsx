import React, { useEffect } from "react";
import FeedLeft from "./FeedLeft";
import { fetchFromApi } from "../utils/fetchData";
import { useState } from "react";
import Videos from "./Videos";

// const category = "New";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("T-series");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <>
      <div className=" flex flex-row gap-2 bg-black ">
        {/* left feed  */}
        <div className="h-[100%-65px] w-[250px]  hidden border-r-2 border-white/[0.1] md:flex py-2 bg-black transition-all flex-col">
          <FeedLeft
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        {/* video section  */}
        <div className=" w-[100%] md:w-[100%-240px] bg-black flex flex-col">
          <div className="text-white font-semibold text-3xl mx-auto font-sans py-3 px-2">
            {"Showing " + selectedCategory}{" "}
            <span className="text-[#ffffff] ">Videos</span>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-[60px] md:mx-[12px]  gap-7 ">
            <Videos videos={videos} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
