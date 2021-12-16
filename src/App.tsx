import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import Home from './pages/Home'
import Details from './pages/Details'
import ChannelDetails from './pages/ChannelDetails'
import PlaylistDetails from './pages/PlaylistDetails'
import Explore from './pages/Explore'

const App = () => {


  return (
    <div className="App">
      <Routes>
          <Route  path={routes.withSidebar.home} element={<Home />} />
          <Route  path={routes.withSidebarFixed.details} element={<Details />} />
          <Route  path={routes.withSidebarFixed.playlistDetails} element={<PlaylistDetails />} />
          <Route  path={routes.withSidebar.channelDetails} element={<ChannelDetails />} /> 
          <Route  path={routes.withSidebar.explore} element={<Explore />} /> 
      </Routes>
    </div>
  );
}

export default App;
