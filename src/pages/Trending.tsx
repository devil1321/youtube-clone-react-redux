import React,{ useState,useEffect} from 'react'
import Layout from '../templates/layout'
import PopularVideo from '../components/PopularVideo'
import { useDispatch, useSelector } from 'react-redux'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import * as UIActions from '../APIController/actions-creators/uiActions'
import { State } from '../APIController/reducers'
import { bindActionCreators } from 'redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const Trending = () => {
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

    const handleTabsFixed = (e:any) =>{
        let scroll = e.target.scrollTop
        const header = document.querySelector('.trending__header') as HTMLDivElement
        if(scroll > 158){ 
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
        }
    }

    useEffect(()=>{
        
        UI.handleHideTags()
        youtubeActions.getVideos({part:'snippet,id',chart:'mostPopular',regionCode:'US',maxResults:50})
    },[])

    return (
        <Layout>
        <div className="trending" onScroll={(e)=>handleTabsFixed(e)}>
            <div className="trending__header">
                <div className="trending__header-heading">
                    <img src="/assets/trending-logo.png" alt="" />
                    <h2>Trending</h2>
                </div>
                <div className="channel-details__tabs-nav trending__tabs-nav">
                   <Swiper
                        spaceBetween={0}
                        slidesPerView={4}
                   >
                       <SwiperSlide><h3 onClick={(e)=>{
                           UI.handleTab(e,'trending__tab')
                           youtubeActions.getVideos({part:'snippet,id',chart:'mostPopular',regionCode:'US',maxResults:50})
                           }} data-tab="1" className="channel-details__tab-link trending__tab-link active">Now</h3></SwiperSlide>
                       <SwiperSlide><h3 onClick={(e)=>{
                           UI.handleTab(e,'trending__tab')
                           youtubeActions.getVideos({part:'snippet,id',videoCategoryId:10,chart:'mostPopular',regionCode:'US',maxResults:50})
                           }} data-tab="2" className="channel-details__tab-link trending__tab-link">Music</h3></SwiperSlide>
                       <SwiperSlide><h3 onClick={(e)=>{
                           UI.handleTab(e,'trending__tab')
                           youtubeActions.getVideos({part:'snippet,id',videoCategoryId:20,chart:'mostPopular',regionCode:'US',maxResults:50})
                           }} data-tab="3" className="channel-details__tab-link trending__tab-link">Gaming</h3></SwiperSlide>
                       <SwiperSlide><h3 onClick={(e)=>{
                           UI.handleTab(e,'trending__tab')
                           youtubeActions.getVideos({part:'snippet,id',videoCategoryId:23,chart:'mostPopular',regionCode:'US',maxResults:50})

                           }} data-tab="4" className="channel-details__tab-link trending__tab-link">Comedy</h3></SwiperSlide>
                   </Swiper>
                   </div>
                </div>
                <div className="trending__tabs">
                    <div id="1" className="trending__tab active">
                        {renderVideos()}
                    </div>
                    <div id="2" className="trending__tab ">
                        {renderVideos()}
                    </div>
                    <div id="3" className="trending__tab ">
                        {renderVideos()}
                    </div>
                    <div id="4" className="trending__tab ">
                        {renderVideos()}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Trending
