import React,{useState,useEffect} from 'react'
import Layout from '../templates/layout'
import Comment from '../components/Comment'

import { gsap } from 'gsap'
import { State } from '../APIController/reducers'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { BsFillPlayFill,BsThreeDots,BsBell } from 'react-icons/bs'
import { GiNextButton } from 'react-icons/gi'
import { AiFillSound } from 'react-icons/ai'
import { FiChevronRight } from 'react-icons/fi'
import { IoIosSwitch } from 'react-icons/io'
import { RiKeyboardBoxFill,RiTerminalWindowFill,RiSettings5Fill, RiShareForwardLine, RiScissorsFill } from 'react-icons/ri'
import { BiWindow } from 'react-icons/bi'
import { MdDesktopWindows, MdLibraryAdd } from 'react-icons/md'
import { BiLike,BiDislike,BiMenuAltLeft } from 'react-icons/bi'


const Details = () => {
    const dispatch = useDispatch()
    const { videoDetails,videoComments,suggestedVideos,channelDetails } = useSelector((state:State) => state.youtubeAPI)
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)

    const [isDescription,setIsDescription] = useState<boolean>(false)
    const [isSortBy,setIsSortBy] = useState<boolean>(false)

    const handleSetContainersAndHideElements = ():void =>{
        const container = document.querySelector('.container') as HTMLDivElement
        const containerInner = document.querySelector('.container-inner') as HTMLDivElement
        const tagsWrapper = document.querySelector('.search__tags-wrapper') as HTMLDivElement
        container.style.width = '100%'
        containerInner.style.width = '100%'
        tagsWrapper.style.display = 'none'
    }

    const handleSortBy = ():void =>{
        const tl = gsap.timeline()
        if(!isSortBy){
            tl.fromTo('.details__comments-sort-by-menu',{y:10,opacity:0},{y:0,opacity:1,duration:0.5})
            setIsSortBy(true)
        }
        else{
            tl.fromTo('.details__comments-sort-by-menu',{y:0,opacity:1},{y:10,opacity:0,duration:0.5})
            setIsSortBy(false)
        }
    }
 

    useEffect(()=>{
        handleSetContainersAndHideElements()
    },[])

    return (
       <Layout>
           <div className="details">
                <div className="details__left-content">
                    {videoDetails?.items?.map((video:any) =>{
                        const { id } = video 
                        const { duration } = video.contentDetails
                        const { publishedAt,channelId,title,description,thumbnails, channelTitle ,tags } = video.snippet
                        const { viewCount, likeCount, dislikeCount, favoruiteCount } = video.statistics
                        const months = ['January','Febuary','March','April','May','June','July','August','September','November','December']
                        return(
                            <div onLoad={()=>{youtubeActions.channelDetails({part:'snippet,statistics',id:channelId})}} key={id} className="details__video">
                                <div className="details__video-img">
                                    <img src={thumbnails.maxres?.url} alt="video" />
                                    <div className="details__taskbar-imagination">
                                        <div className="details__taskbar-left">
                                            <BsFillPlayFill />
                                            <GiNextButton />
                                            <AiFillSound />
                                            <span className="details__taskbar-chapters">00:00/59:11 <span className="details__dot"></span> Chapters<FiChevronRight /></span>
                                        </div>
                                        <div className="details__taskbar-right">
                                            <IoIosSwitch />
                                            <RiKeyboardBoxFill />
                                            <RiSettings5Fill />
                                            <BiWindow />
                                            <RiTerminalWindowFill />
                                            <MdDesktopWindows />
                                        </div>
                                    </div>
                                </div>
                                <div className="details__video-description">
                            <p>{tags?.map((tag:string,index:number)=>`#${tag} ${index === tags.length ? ' ' : ', '}`)}</p>
                            <h3>{title}</h3>
                            <div className="details__video-info">
                                <p className="details__description-p">
                                    {viewCount} <span>views</span> 
                                    <div className="details__dot"></div> 
                                    <span>{publishedAt.slice(9,10)} </span>
                                    <div className="details__dot"></div>  
                                    <span>{months[parseInt(publishedAt.slice(6,7)) - 1]}</span>
                                    <div className="details__dot"></div>  
                                    <span>{publishedAt.slice(0,4)}</span>
                                </p>
                                <div className="details__video-menu">
                                    <span><BiLike />{likeCount > 0 ? likeCount : 'Like'}</span>
                                    <span><BiDislike />{dislikeCount > 0 ? dislikeCount : 'Dislike'} </span>
                                    <span><RiShareForwardLine />Share</span>
                                    <span><RiScissorsFill />Clip</span>
                                    <span><MdLibraryAdd />Save</span>
                                    <span><BsThreeDots /></span>
                                </div>
                            </div>
                            <div className="details__channel-details">
                                {channelDetails?.items?.map((detail:any) => {
                                const { title,description,thumbnails } = detail.snippet
                                const { subscriberCount } = detail.statistics
                                return(
                                    <React.Fragment>
                                        <div className="details__channel-info">
                                            <div className="details__channel-info-inner">
                                                <div className="details__channel-img">
                                                    <img src={thumbnails?.default?.url} alt="" />
                                                </div>
                                
                                                <div className="details__channel-title">
                                                    <h3>{title}</h3>
                                                    <p>{subscriberCount} subscribes</p>
                                                </div>
                                            </div>
                                            <button>Subscribe</button>
                                        </div>
                                        <p className="details__channel-details-info">
                                            {description}
                                        </p>
                                    </React.Fragment>)})}
                            </div>
                            <hr />
                            <p className="details__show-desc" onClick={()=>{setIsDescription(true)}}>Show More</p>
                            {isDescription && <p className="details__video-main-description">{description}</p>}
                            <hr />
                    </div>
                    <div className="details__comments">
                        <div className="details__comments-header">
                            <h3>{videoComments?.items?.length} Comments</h3>
                            <span onClick={()=>{handleSortBy()}} className="details__sort-by"><BiMenuAltLeft />SORT BY</span>
                            <div className="details__comments-sort-by-menu">
                                <p>Top Comments</p>
                                <p>Newest First</p>
                            </div>
                        </div>
                        <form action="" className="details__comments-form">
                            <img src="/assets/profile.png" alt="" />
                            <input type="text" />
                        </form>  
                        <div className="details__main-comments">
                            {videoComments?.items?.map((comment:any) => {
                                return(
                                    <div className="details__comment">
                                       <Comment comment={comment} />
                                    </div>
                                )}
                            )}
                            </div>
                    </div>
                </div>)})}
            </div>               
            <div className="details__right-content"></div>
           </div>
       </Layout>
    )
}

export default Details
