import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchItems, setsearchItems] = useState('');
  const navigate = useNavigate();

  

  const searchQueryHandler = (e) => {
    if (
      (e?.key === "Enter" || e === "searchButton") && searchItems?.length > 0
    ) {
      navigate(`/search/${searchItems}`);
      setsearchItems("");
    }
  };
  const searchvideos = () => {
    if (searchItems.length > 0) {
      navigate(`/search/${searchItems}`);
      setsearchItems("");
    }
  };
  return (
    <div className="flex items-center">
      <input
        className="w-[full] lg:w-[40rem] outline-none py-3  text-lg font-sans rounded-l-full px-5 bg-transparent focus:border-blue-500 text-white border border-[#c0c0c07d] placeholder:text-lg"
        type="text"
        placeholder="Search.."
        values={searchItems}
        onKeyPress={searchQueryHandler}
        
        onChange={(e) => {
          setsearchItems(e.target.value);
        }}
      />

      <span>
        <button
          onClick={searchvideos}
          className="py-3  border-gray-500 border-2 outline-none bg-gray-500  px-5 rounded-r-full  "
        >
          <SearchIcon className="text-white text-lg font-bold" />
        </button>
      </span>
    </div>
  );
};

export default SearchBar;
