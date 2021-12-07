import React, { useEffect,useState } from 'react'
import Layout from '../templates/layout'
import { Link } from 'react-router-dom'
import { State } from '../APIController/reducers'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import * as UIActions from '../APIController/actions-creators/uiActions'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BsSearch } from 'react-icons/bs'


const ChannelDetails = () => {
    const dispatch = useDispatch()
    const { channelDetails, channelVideos } = useSelector((state:State) => state.youtubeAPI)
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)
    const UI = bindActionCreators(UIActions,dispatch)
    
    const handleTab = (e:any) =>{
        const links = document.querySelectorAll('.channel-details__tab-link') as NodeListOf<HTMLHeadingElement>
        links.forEach(link => link.classList.remove('active'))
        e.target.classList.add('active')
        const tabs = document.querySelectorAll('.channel-details__tab') as NodeListOf<HTMLDivElement>
        const tab = document.getElementById(`${e.target.dataset.tab}`) as HTMLDivElement
        tabs.forEach(tab => tab.classList.remove('active'))
        tab.classList.add('active')
        
    }

    useEffect(() => {
        UI.handleHideTags()
    }, [])

    return (
        <Layout>
            {channelDetails?.items?.map((channel:any)=>{
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
                                    <p>{subscriberCount > 1000 ? <span>{subscriberCount.slice(0,subscriberCount.length - 3)} tys subscribers</span> : <span>{subscriberCount > 0 ? subscriberCount : 0 } subscribers</span>}</p>
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
                            <div id="1" className="channel-details__tab active">main</div>
                            <div id="2" className="channel-details__tab">video</div>
                            <div id="3" className="channel-details__tab">society</div>
                            <div id="4" className="channel-details__tab">playlist</div>
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