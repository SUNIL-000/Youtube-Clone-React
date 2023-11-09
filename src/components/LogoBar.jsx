import React from "react";
import ytlogo from "../images/youtube.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const LogoBar = () => {
  return (
    <div className="flex h-5 gap-2 justify-center items-center ">
      <div >
      <Link to={"/"}  className="mr-5">
        <GiHamburgerMenu style={{ color: "gray",fontSize:"25px" }} />
      
      </Link></div>
      <div className="flex justify-center items-center">
        <img src={ytlogo} className="w-10 h-10" alt="logo" />
        <span className="hidden sm:hidden  md:block  text-white ml-2 text-2xl font-semibold font-mono">
          YouTube
        </span>
      </div>
    </div>
  );
};

export default LogoBar;
