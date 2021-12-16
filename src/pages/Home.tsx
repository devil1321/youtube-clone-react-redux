import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import { useSelector,  useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { State } from '../APIController/reducers' 
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'

import Layout from '../templates/layout'
import Video from '../components/Video'


const Home:React.FC = () => {
    const [isSet,setIsSet] = useState<boolean>(false)
    const disptach = useDispatch()
    const { getVideos,channelDetails,activeSearch } = useSelector((state:State) => state.youtubeAPI)
    const youtubeActions = bindActionCreators(YoutubeActions,disptach)


    const renderVideos = () =>{
      return getVideos?.items?.map((video:any) => {
          const { publishedAt,channelId,title,channelTitle, thumbnails } = video.snippet
          const { id } = video
          return <Video key={id} profile={thumbnails?.high?.url} imgUrl ={thumbnails?.high?.url} publishedAt={publishedAt} channelId={channelId} videoId={id} title={title} channelTitle={channelTitle} />
    })
    }

    useEffect(()=>{
      youtubeActions.getVideos({part:'snippet,id',chart:'mostPopular',regionCode:'US',maxResults:50})
    },[])

    return (
        <Layout>            
          <div className="home">
            <div className="home__hero">
              <div className="home__hero-bg">
                <img src="/assets/youtube-hero.jpeg" alt="background" />
              </div>
              <div className="home__hero-logo">
                <img src="/assets/main-logo.svg" alt="logo" />
              </div>
              <div className="home__hero-text">
                <h1>Watch everything you love without ads</h1>
                <button>GET IT NOW</button>
              </div>
            </div>
     
            <div className="home__videos">
              {renderVideos()} 
            </div>
        </div>
        </Layout>

    )
}

export default Home