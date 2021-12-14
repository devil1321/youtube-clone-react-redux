import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import ChannelDetails from './pages/ChannelDetails'
import PlaylistDetails from './pages/PlaylistDetails'

const App = () => {


  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/details/:id" element={<Details />} />
        <Route  path={`/playlist-details/:id`} element={<PlaylistDetails />} /> 
        <Route  path={`/channel-details/:id`} element={<ChannelDetails />} /> 
      </Routes>
    </div>
  );
}

export default App;
