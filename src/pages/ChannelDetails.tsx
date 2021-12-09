import React, { useEffect,useState } from 'react'
import Layout from '../templates/layout'
import Video from '../components/Video'
import PlaylistVideo from '../components/PlaylistVideo'

import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import { State } from '../APIController/reducers'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import * as UIActions from '../APIController/actions-creators/uiActions'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BsSearch, BsChevronDoubleRight } from 'react-icons/bs'

const ChannelDetails = () => {
    const dispatch = useDispatch()
    const { channelDetails, channelVideos, playlistVideos } = useSelector((state:State) => state.youtubeAPI)
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)
    const UI = bindActionCreators(UIActions,dispatch)
    
    const handleTab = (e:any) =>{
        const tl = gsap.timeline()
        const links = document.querySelectorAll('.channel-details__tab-link') as NodeListOf<HTMLHeadingElement>
        links.forEach(link => link.classList.remove('active'))
        e.target.classList.add('active')
        const tabs = document.querySelectorAll('.channel-details__tab') as NodeListOf<HTMLDivElement>
        const tab = document.getElementById(`${e.target.dataset.tab}`) as HTMLDivElement
        tabs.forEach(tab => tab.classList.remove('active'))
        tab.classList.add('active')
        tl.fromTo(tab,{opacity:0},{opacity:1,duration:0.3})

        
    }

    const renderMain = () =>{
        return channelVideos?.items?.map((video:any)=>{
            const { videoId } = video.id
            const { publishedAt,channelId,title, thumbnails,channelTitle } = video.snippet
            return(
                <Video videoId={videoId} publishedAt={publishedAt} channelId={channelId} title={title} imgUrl={thumbnails?.high?.url} channelTitle={channelTitle} minWidth={'calc(25% - 20px)'}/>
            )
        })
    }

    const renderPlaylist = () =>{
        return playlistVideos?.items?.map((video:any)=>{
            const { id } = video
            const { publishedAt,channelId,title, thumbnails,channelTitle } = video.snippet
            const { itemCount } = video.contentDetails
            return(
                <PlaylistVideo id={id} imgUrl={thumbnails?.high?.url} title={title}  itemCount={itemCount} />
            )
        })
    }

    useEffect(() => {
        UI.handleHideTags()
    }, [])

    return (
        <Layout>
            {channelDetails?.items?.map((channel:any)=>{
                const { id } = channel
                const { title, description,customUrl, publishedAt, thumbnails} = channel.snippet
                const { viewCount, subscriberCount, videoCount} = channel.statistics
                const { image } = channel.brandingSettings
                return(
                    <div className="channel-details" >
                    {image?.bannerExternalUrl && 
                        <div className="channel-details__banner">
                            <img src={image?.bannerExternalUrl} alt="" />
                        </div>}
                        <div className="channel-details__header">
                             <div className="channel-details__info">
                                 <div className="channel-details__img">
                                    <img src={thumbnails?.default.url} alt="logo" />
                                 </div>
                                 <div>
                                    <h2>{title}</h2>
                                    <p>{subscriberCount > 1000 && subscriberCount < 1000000  
                                        ? <span>{subscriberCount.slice(0,subscriberCount.length - 3)} tys subscribers</span> 
                                        : subscriberCount > 1000000 
                                        ? <span>{subscriberCount.slice(0,subscriberCount.length - 6)},{subscriberCount.slice(subscriberCount.length-6,subscriberCount.length-3)} mln subscribers</span>
                                        : <span>{subscriberCount > 0 && subscriberCount < 1000 ? subscriberCount : 0}</span> 
                                    }</p>
                                 </div>
                             </div>
                             <div className="channel-details__btn-group">
                                 <button>Support</button>
                                 <button>Subscribe</button>
                             </div>
                        </div>
                         <div className="channel-details__tabs-wrapper">
                            <div className="channel-details__tabs-nav">
                                <h3 onClick={(e)=>{handleTab(e)}} data-tab="1" className="channel-details__tab-link active">Main</h3>
                                <h3 onClick={(e)=>{handleTab(e)}} data-tab="2" className="channel-details__tab-link">Video</h3>
                                <h3 onClick={(e)=>{handleTab(e)}} data-tab="3" className="channel-details__tab-link">Society</h3>
                                <h3 onClick={(e)=>{handleTab(e)}} data-tab="4" className="channel-details__tab-link">Playlist</h3>
                                <h3 onClick={(e)=>{handleTab(e)}} data-tab="5" className="channel-details__tab-link">Channels</h3>
                                <h3 onClick={(e)=>{handleTab(e)}} data-tab="6" className="channel-details__tab-link">Info</h3>
                                <div className="channel-details__tab-link"><BsSearch /> <input type="text" /> </div>
                            </div>
                         </div>
                        <div className="channel-details__tabs-main">
                            <div id="1" className="channel-details__tab active">
                                <h3 className="channel-details__tab-header">Sended Videos <BsChevronDoubleRight/>  Play All</h3>
                                <div className="channel-details__sended-videos">
                                    {renderMain()}
                                </div>
                            </div>
                            <div id="2" className="channel-details__tab">video</div>
                            <div id="3" className="channel-details__tab">society</div>
                            <div id="4" className="channel-details__tab">
                                <div className="channel-details__tab-header">Created Playlists</div>
                                    <div className="channel-details__playlist-group">
                                        {renderPlaylist()}
                                    </div>
                                </div>
                            <div id="5" className="channel-details__tab">channels</div>
                            <div id="6" className="channel-details__tab">info</div>
                        </div>
                    </div>
                )
            })}
        </Layout>
    )
}

export default ChannelDetails
