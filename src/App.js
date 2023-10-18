import React from 'react'
// import {} from "react"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import VideoDetails from './components/VideoDetails'
// import ChannelDetails from './components/ChannelDetails'
import SearchDetails from './components/SearchDetails'
import ChannelCardDetails from './components/ChannelCardDetails'

const App = () => {
  return (
    <Router>
        <div className='sticky top-0'>
            <Navbar  />
        </div>


        <Routes>
            <Route path="/" exact element={<Feed />}/>
            <Route path="/video/:id"  element={<VideoDetails />}/>
            <Route path="/channel/:id"  element={<ChannelCardDetails />}/>
            <Route path="/search/:searchterm"  element={<SearchDetails />}/>

        </Routes>
    </Router>
  )
}

export default App