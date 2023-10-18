import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl, demoVideoTitle } from '../utils/constant'

import VerifiedIcon from "@mui/icons-material/Verified";


const ChannelDetails = ({channeldetails}) => {
  console.log(channeldetails)
  return (
    <div>
      <div className={` text-white flex  items-center justify-center mt-[100px] w-96 ` }>
        <Link className='flex flex-col gap-2 justify-center items-center ' to={`/channel/${channeldetails.snippet?.channelId}`} >
            <img className='rounded-full w-[40%] h-[40%]' src={channeldetails ?`${channeldetails?.snippet?.thumbnails?.high?.url}`:demoThumbnailUrl}alt="thumbnail"  />
            <h1 className='text-gray-400 flex items-center font-bold'>{ channeldetails? `${channeldetails.snippet.channelTitle}` : demoVideoTitle}{<VerifiedIcon className='ml-2 text-[10px]'/>}</h1>
        </Link>
       
      </div>
    </div>
  )
}

export default ChannelDetails