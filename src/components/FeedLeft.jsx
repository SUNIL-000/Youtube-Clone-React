import React from "react";
import { categories } from "../utils/constant";


const FeedLeft = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      {categories.map((items) => {
        return (
          <button
            key={items.name}
            onClick={()=>{setSelectedCategory(items.name)}}
            className={`mx-2 my-1 flex py-2 px-2 items-center cursor-pointer 
            hover:bg-white/[0.4] rounded-xl transition-all ${items.name===selectedCategory ?"bg-white/[0.4]":""}`}
          >
            <span className="flex justify-center mr-3 items-center text-white">
              {items.icon}
            </span>
            <span className="text-white font-semibold font-sans text-xl">
              {items.name}
            </span>
          </button>
        );
      })}
      </>
  );
    };

export default FeedLeft
