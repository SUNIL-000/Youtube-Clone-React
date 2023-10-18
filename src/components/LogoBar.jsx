import React from 'react'
import ytlogo from "../images/youtube.png";

const LogoBar = () => {
  return (
    <div className="flex h-5 items-center">
      
          <div className="flex items-center">
            <img src={ytlogo} className="w-10 h-10" alt="logo" />
            <span className="hidden sm:hidden  md:block  text-white ml-2 text-2xl font-semibold font-mono">YouTube</span>
          </div>
         
         </div>
  )
}

export default LogoBar