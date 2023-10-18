import React from 'react'
import VideoCard from './VideoCard'
import ChannelDetails from './ChannelDetails'

const Videos = ({videos}) => {
    // console.log(videos)
    if(!videos){
      console.log("Error in data fetching......")
    }
  return (
    <>
        {videos.map((items,index)=>{
           return <div key={index}>
           {items.id.videoId && <VideoCard video={items} ms={"hiii"}/>}
           {items.id.channelId && <ChannelDetails  channeldetails={items} mt={'10px'}/>}

       </div>
  })}
    </>
  )
}

export default Videos