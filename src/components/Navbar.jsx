import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";
import IconBar from "./IconBar";
import LogoBar from "./LogoBar";

const Navbar = () => {
  

  return (
    <>
      <div className="sticky z-10 flex flex-row justify-between items-center h-[65px] px-4 md:px-5 bg-white dark:bg-[#000]">
        <LogoBar />
        <SearchBar />
        <IconBar />
      </div>
    </>
  );
};

export default Navbar;
