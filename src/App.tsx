import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Links } from './routes'
import Home from './pages/Home'
import Details from './pages/Details'
import ChannelDetails from './pages/ChannelDetails'
import PlaylistDetails from './pages/PlaylistDetails'
import Explore from './pages/Explore'
import Trending from './pages/Trending'

const App = () => {

  return (
    <div className="App">
      <Routes>
          <Route  path={new Links().withSidebar.home} element={<Home />} />
          <Route  path={new Links(':id').withSidebarFixed.details} element={<Details />} />
          <Route  path={new Links(':id').withSidebarFixed.playlistDetails} element={<PlaylistDetails />} />
          <Route  path={new Links(':id').withSidebar.channelDetails} element={<ChannelDetails />} /> 
          <Route  path={new Links().withSidebar.explore} element={<Explore />} /> 
          <Route  path={new Links().withSidebar.trending} element={<Trending />} />
      </Routes>
    </div>
  );
}

export default App;
