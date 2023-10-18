import React from 'react'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MicIcon from '@mui/icons-material/Mic';
const IconBar = () => {
  return (
    <div className="flex gap-2">
    <button className=" hidden rounded-full  hover:bg-gray-600 px-3 py-3 md:flex items-center"><MicIcon className="text-white text-xl"/></button>
    <button className=" rounded-full hover:bg-gray-600 px-3 py-3 flex items-center "><VideoCallIcon className="text-white text-xl"/></button>
    <button className="hidden  rounded-full hover:bg-gray-600 px-3 py-3 md:flex items-center"><NotificationsActiveIcon  className="text-white text-xl"/></button>
    <button className=" w-[45px] rounded-full hover:bg-gray-600  md:flex items-center"><img src="https://i.pravatar.cc/300" className="w-[100%] h-[100%] object-cover rounded-full" alt="avtaar"  /></button>
    
   </div>
  )
}

export default IconBar