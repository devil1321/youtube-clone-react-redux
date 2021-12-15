import React, { useEffect,useState } from 'react'
import Layout from '../templates/layout'
import Video from '../components/Video'
import PlaylistVideo from '../components/PlaylistVideo'

import axios from 'axios'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import { State } from '../APIController/reducers'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import * as UIActions from '../APIController/actions-creators/uiActions'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BsSearch, BsChevronDoubleRight } from 'react-icons/bs'
import PlaylistAtMain from '../components/PlaylistAtMain'

import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const ChannelDetails = () => {
    const [isLoad,setIsLoad] = useState<boolean>(false)
    const [items,setItems] = useState<any[]>([])
    const [pItems,setPItems] = useState<any>([])
    const [itemCount,setItemCount] = useState<number>(0)
    const [channelVideosCopy,setChannelVideosCopy] = useState<any[]>([])
    const dispatch = useDispatch()
    const { channelDetails, channelVideos, playlistVideos, playlistItems } = useSelector((state:State) => state.youtubeAPI)
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

    const fetchPlaylistItems = async () => {

        if(pItems?.items && !isLoad){
            var tempItems:any[] = []
            await Promise.all(pItems?.items?.slice(0,6).map((playlist:any) =>{
                const { id } = playlist 
                const { title } = playlist.snippet

                var options:any = {
                    method: 'GET',
                    url: 'https://youtube.googleapis.com/youtube/v3/playlistItems',
                    // id need playlistId
                    params: {
                       playlistId: id,
                       part: 'snippet,id',
                       key:'AIzaSyAyi7mG1kw4kFoDaf7E-LlR0NzTT9CApxI',
                    },
                    headers: {
                        'Content-Type':'application/json'
                    }
                };

                 axios.request<any>(options).then(function (response) {
                    let tempItem = {
                        id:id,
                        title:title,
                        items:response.data
                    }
                    tempItems.push(tempItem)
                    setItems([...tempItems])           
                }).catch(function (error) {
                    console.error(error);
                });
            }))
        }
      
    }


    const renderMain = () =>{
        return channelVideos?.items?.map((video:any)=>{
            const { videoId } = video.id
            const { publishedAt,channelId,title, thumbnails } = video.snippet
            return(
                <Video videoId={videoId} publishedAt={publishedAt} channelId={channelId} title={title} imgUrl={thumbnails?.high?.url}  minWidth={'calc(25% - 20px)'}/>
            )
        })
    }

    const renderChannelVideos = () =>{
        return channelVideosCopy?.map((video:any)=>{
            const { videoId } = video.id
            const { publishedAt,channelId,title, thumbnails } = video.snippet
            return(
                <Video videoId={videoId} publishedAt={publishedAt} channelId={channelId} title={title} imgUrl={thumbnails?.high?.url}  />
            )
        }) 
    }


    const renderPlaylistItemsInMain = () =>{
        return items.map((playlist:any) =>{
            const { id, title, items } = playlist
            return <div key={title} className="channel-details__playlist-main-group">
                   <h3>{title}</h3>
                   <div className="channel-details__playlist-main-group-inner">{items?.items?.map((item:any) =>{
                        const { title,thumbnails,channelTitle,publishedAt,videoId,channelId } = item.snippet
                            return <Video key={title} title={title} imgUrl={thumbnails?.high?.url} channelId={channelId} publishedAt={publishedAt} videoId={videoId} minWidth={'calc(25% - 20px)'} />
                    })}</div>
                  </div>
        })
    }

    const renderPlaylist = () =>{
        return playlistVideos?.items?.map((video:any)=>{
            const { id } = video
            const { publishedAt,channelId,title, thumbnails,channelTitle } = video.snippet
            const { itemCount } = video.contentDetails
            return <PlaylistVideo id={id} imgUrl={thumbnails?.high?.url} title={title}  itemCount={itemCount} />
            
        })
    }

    useEffect(() => {
        UI.handleHideTags()
        if(!isLoad){
            fetchPlaylistItems()
        }
        setChannelVideosCopy(channelVideos.items)
        if(playlistVideos?.items?.length > 0){
            setPItems(playlistVideos)
        }    
    }, [playlistVideos,channelVideos,pItems])

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
                            <Swiper
                                // install Swiper modules
                                 spaceBetween={0}
                                 slidesPerView={window.innerWidth < 1024 ?  window.innerWidth < 768 ? 2 : 4 : 7}
                            >
                                <SwiperSlide><h3 onClick={(e)=>{handleTab(e)}} data-tab="1" className="channel-details__tab-link active">Main</h3></SwiperSlide>
                                <SwiperSlide><h3 onClick={(e)=>{handleTab(e)}} data-tab="2" className="channel-details__tab-link">Video</h3></SwiperSlide>
                                <SwiperSlide><h3 onClick={(e)=>{handleTab(e)}} data-tab="3" className="channel-details__tab-link">Society</h3></SwiperSlide>
                                <SwiperSlide><h3 onClick={(e)=>{handleTab(e)}} data-tab="4" className="channel-details__tab-link">Playlist</h3></SwiperSlide>
                                <SwiperSlide><h3 onClick={(e)=>{handleTab(e)}} data-tab="5" className="channel-details__tab-link">Channels</h3></SwiperSlide>
                                <SwiperSlide><h3 onClick={(e)=>{handleTab(e)}} data-tab="6" className="channel-details__tab-link">Info</h3></SwiperSlide>
                                <SwiperSlide><div className="channel-details__tab-link"><BsSearch /> <input type="text" /> </div></SwiperSlide>
                            </Swiper>
                            </div>
                         </div>
                        <div className="channel-details__tabs-main">
                            <div id="1" className="channel-details__tab active">
                                <h3 className="channel-details__tab-header">Sended Videos <BsChevronDoubleRight/>  Play All</h3>
                                <div className="channel-details__sended-videos">
                                    {renderMain()}
                                </div>
                                <div className="channel-details__playlist-videos-main">
                                    {items.length > 0 && renderPlaylistItemsInMain()}
                                </div>
                            </div>
                            <div id="2" className="channel-details__tab">
                                <div className="channel-details__channels-videos-nav"></div>
                                <div className="channel-details__channel-videos-group">
                                    {renderChannelVideos()}
                                </div>
                            </div>
                            <div id="3" className="channel-details__tab">society</div>
                            <div id="4" className="channel-details__tab">
                                <h3 className="channel-details__tab-header">Created Playlists</h3>
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
