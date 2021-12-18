import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Links } from './routes'
import Home from './pages/Home'
import Details from './pages/Details'
import ChannelDetails from './pages/ChannelDetails'
import PlaylistDetails from './pages/PlaylistDetails'
import Explore from './pages/Explore'
import Trending from './pages/Trending'
import Subscriptions from './pages/Subscriptions'
import Library from './pages/Library'
import History  from './pages/History'
import BrowseChannels from './pages/BrowseChannels'
import YoutubePremium from './pages/YoutubePremium'
import ReportHistory from './pages/ReportHistory'

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path={new Links().withSidebar.home} element={<Home />} />
        <Route path={new Links(':id').withSidebarFixed.details} element={<Details />} />
        <Route path={new Links(':id').withSidebarFixed.playlistDetails} element={<PlaylistDetails />} />
        <Route path={new Links(':id').withSidebar.channelDetails} element={<ChannelDetails />} /> 
        <Route path={new Links().withSidebar.explore} element={<Explore />} /> 
        <Route path={new Links().withSidebar.trending} element={<Trending />} />
        <Route path={new Links().withSidebar.subscriptions} element={<Subscriptions />} />
        <Route path={new Links().withSidebar.library} element={<Library />} />
        <Route path={new Links().withSidebar.history} element={<History />} />
        <Route path={new Links().withSidebar.browseChannels} element={<BrowseChannels />} />
        <Route path={new Links().withSidebarFixed.ytPremium} element={<YoutubePremium />} />
        <Route path={new Links().withSidebar.reportHistory} element={<ReportHistory />} />
      </Routes>
    </div>
  );
}

export default App;
