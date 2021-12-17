import React,{ useState,useEffect } from 'react'
import { Links } from '../routes'
import Layout from '../templates/layout'
import { useDispatch, useSelector } from 'react-redux'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import * as UIActions from '../APIController/actions-creators/uiActions'
import { State } from '../APIController/reducers'
import { bindActionCreators } from 'redux'
import PopularVideo from '../components/PopularVideo'
import { Link } from 'react-router-dom'
const Explore = () => {

    const dispatch = useDispatch()
    const { getVideos } = useSelector((state:State) => state.youtubeAPI)
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)
    const UI = bindActionCreators(UIActions,dispatch)
    
    const renderVideos = () =>{
        return getVideos?.items?.map((video:any) => {
            const { publishedAt,channelId,title,channelTitle,thumbnails } = video.snippet
            const { id } = video
            return <PopularVideo key={id} imgUrl={thumbnails?.high?.url}  publishedAt={publishedAt} channelId={channelId} videoId={id} title={title} channelTitle={channelTitle} />
      })
    }
    useEffect(() => {
        UI.handleHideTags()
        youtubeActions.getVideos({part:'snippet,id',chart:'mostPopular',regionCode:'US',maxResults:50})
    },[])

    return (
        <Layout>
            <div className="explore">
                <div className="explore__nav">
                    <Link to={new Links().withSidebar.trending} className="explore__nav-item">
                        <img src={`/assets/icons/trending.png`} alt="" />
                        <h3>Trending</h3>
                    </Link>
                    <Link to={new Links('UC-9-kyTW8ZkZNDHQJ6FgpwQ').withSidebar.channelDetails} className="explore__nav-item"
                    onClick={()=>{
                        youtubeActions.channelDetails({part:'snippet,statistics,brandingSettings',channelId:'UC-9-kyTW8ZkZNDHQJ6FgpwQ'})
                        youtubeActions.channelVideos({channelId:'UC-9-kyTW8ZkZNDHQJ6FgpwQ',part:'snippet,id',order:'date',maxResults:50})
                        youtubeActions.playlistVideos({channelId:'UC-9-kyTW8ZkZNDHQJ6FgpwQ',part:'snippet,contentDetails,id',maxResults:50})
                        }}>
                        <img src={`/assets/icons/music.png`} alt="" />
                        <h3>Music</h3>
                    </Link>
                    <Link to={new Links('UCwBV-eg1dAkzrdjqJfyEj0w').withSidebar.channelDetails} className="explore__nav-item" 
                    onClick={()=>{
                        youtubeActions.channelDetails({part:'snippet,statistics,brandingSettings',channelId:'UCwBV-eg1dAkzrdjqJfyEj0w'})
                        youtubeActions.channelVideos({channelId:'UCwBV-eg1dAkzrdjqJfyEj0w',part:'snippet,id',order:'date',maxResults:50})
                        youtubeActions.playlistVideos({channelId:'UCwBV-eg1dAkzrdjqJfyEj0w',part:'snippet,contentDetails,id',maxResults:50})
                        }}>
                        <img src={`/assets/icons/movies.png`} alt="" />
                        <h3>Movies</h3>
                    </Link>
                    <Link to={new Links('UC4R8DWoMoI7CAwX8_LjQHig').withSidebar.channelDetails} className="explore__nav-item"
                    onClick={()=>{
                        youtubeActions.channelDetails({part:'snippet,statistics,brandingSettings',channelId:'UC4R8DWoMoI7CAwX8_LjQHig'})
                        youtubeActions.channelVideos({channelId:'UC4R8DWoMoI7CAwX8_LjQHig',part:'snippet,id',order:'date',maxResults:50})
                        youtubeActions.playlistVideos({channelId:'UC4R8DWoMoI7CAwX8_LjQHig',part:'snippet,contentDetails,id',maxResults:50})
                        }}>
                        <img src={`/assets/icons/live.png`} alt="" />
                        <h3>Live</h3>
                    </Link>
                    <Link to={new Links('UCaA8TUWM6TJ5wj-DH60VEFg').withSidebar.channelDetails} className="explore__nav-item"
                    onClick={()=>{
                        youtubeActions.channelDetails({part:'snippet,statistics,brandingSettings',channelId:'UCaA8TUWM6TJ5wj-DH60VEFg'})
                        youtubeActions.channelVideos({channelId:'UCaA8TUWM6TJ5wj-DH60VEFg',part:'snippet,id',order:'date',maxResults:50})
                        youtubeActions.playlistVideos({channelId:'UCaA8TUWM6TJ5wj-DH60VEFg',part:'snippet,contentDetails,id',maxResults:50})
                        }}>
                        <img src={`/assets/icons/gaming.png`} alt="" />
                        <h3>Gaming</h3>
                    </Link>
                    <Link to={new Links('UCYfdidRxbB8Qhf0Nx7ioOYw').withSidebar.channelDetails} className="explore__nav-item"
                    onClick={()=>{
                        youtubeActions.channelDetails({part:'snippet,statistics,brandingSettings',channelId:'UCYfdidRxbB8Qhf0Nx7ioOYw'})
                        youtubeActions.channelVideos({channelId:'UCYfdidRxbB8Qhf0Nx7ioOYw',part:'snippet,id',order:'date',maxResults:50})
                        youtubeActions.playlistVideos({channelId:'UCYfdidRxbB8Qhf0Nx7ioOYw',part:'snippet,contentDetails,id',maxResults:50})
                        }}>
                        <img src={`/assets/icons/news.png`} alt="" />
                        <h3>News</h3>
                    </Link>
                    <Link to={new Links('UCEgdi0XIXXZ-qJOFPf4JSKw').withSidebar.channelDetails} className="explore__nav-item"
                    onClick={()=>{
                        youtubeActions.channelDetails({part:'snippet,statistics,brandingSettings',channelId:'UCEgdi0XIXXZ-qJOFPf4JSKw'})
                        youtubeActions.channelVideos({channelId:'UCEgdi0XIXXZ-qJOFPf4JSKw',part:'snippet,id',order:'date',maxResults:50})
                        youtubeActions.playlistVideos({channelId:'UCEgdi0XIXXZ-qJOFPf4JSKw',part:'snippet,contentDetails,id',maxResults:50})
                        }}>
                        <img src={`/assets/icons/sports.png`} alt="" />
                        <h3>Sports</h3>
                    </Link>
                </div>
                <div className="explore__popular-videos">
                    <h3>Trendig Videos</h3>
                    {renderVideos()}
                </div>
            </div>
        </Layout>
    )
}

export default Explore
