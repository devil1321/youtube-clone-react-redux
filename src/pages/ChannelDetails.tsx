import React, { useEffect,useState } from 'react'
import Layout from '../templates/layout'
import { State } from '../APIController/reducers'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import * as UIActions from '../APIController/actions-creators/uiActions'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'


const ChannelDetails = () => {
    const dispatch = useDispatch()
    const { channelDetails, channelVideos } = useSelector((state:State) => state.youtubeAPI)
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)
    const UI = bindActionCreators(UIActions,dispatch)
    
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
                         <div className="channel-details__banner">
                             <img src={image?.bannerExternalUrl} alt="" />
                         </div>
                         <div className="channel-details__main">
                             <div className="channel-details__header">
                                 <div className="channel-details__info">
                                     <div className="channel-details__img">
                                        <img src={thumbnails?.default.url} alt="logo" />
                                     </div>
                                     <div>
                                        <h2>{title}</h2>
                                        <p>{subscriberCount > 1000 ? <span>{subscriberCount.slice(0,subscriberCount.length - 3)} tys subscribers</span> : <span>{subscriberCount} subscribers</span>}</p>
                                     </div>
                                 </div>
                             </div>
                             <div className="channel-details__tabs-wrapper">
                                <div className="chanel-details__tabs">
                                    <div className="channel-details__tab">Slide 1</div>
                                    <div className="channel-details__tab">Slide 2</div>
                                    <div className="channel-details__tab">Slide 3</div>
                                    <div className="channel-details__tab">Slide 4</div>
                                    <div className="channel-details__tab"> <input type="text" /> </div>
                                </div>
                             </div>
                        </div>
                    </div>
                )
            })}
        </Layout>
    )
}

export default ChannelDetails
