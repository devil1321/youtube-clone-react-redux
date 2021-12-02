import React,{useState,useEffect} from 'react'
import Layout from '../templates/layout'
import { State } from '../APIController/reducers'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { BsFillPlayFill } from 'react-icons/bs'
import { GiNextButton } from 'react-icons/gi'
import { AiFillSound } from 'react-icons/ai'
import { FiChevronRight } from 'react-icons/fi'
import { IoIosSwitch } from 'react-icons/io'
import { RiKeyboardBoxFill,RiTerminalWindowFill,RiSettings5Fill } from 'react-icons/ri'
import { BiWindow } from 'react-icons/bi'
import { MdDesktopWindows } from 'react-icons/md'

const Details = () => {
    const dispatch = useDispatch()
    const { videoDetails,videoComments,suggestedVideos } = useSelector((state:State) => state.youtubeAPI)
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)

    const [isDescription,setIsDescription] = useState<boolean>(false)

    const handleSetContainersAndHideElements = ():void =>{
        const container = document.querySelector('.container') as HTMLDivElement
        const containerInner = document.querySelector('.container-inner') as HTMLDivElement
        const tagsWrapper = document.querySelector('.search__tags-wrapper') as HTMLDivElement
        container.style.width = '100%'
        containerInner.style.width = '100%'
        tagsWrapper.style.display = 'none'
    }
 
   

    const renderVideo = () =>{
        return videoDetails?.items?.map((video:any) =>{
            const { id } = video 
            const { duration } = video.contentDetails
            const { publishedAt,channelId,title,description,thumbnails, channelTitle ,tags } = video.snippet
            const { viewCount, likeCount, dislikeCount, favoruiteCount } = video.statistics
            const months = ['January','Febuary','March','April','May','June','July','August','September','November','December']
            console.log(video)
            return(
                <div key={id} className="details__video">
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
                        <h4>{tags?.map((tag:string,index:number)=>`#${tag} ${index === tags.length ? ' ' : ', '}`)}</h4>
                        <h3>{title}</h3>
                        <p className="details__description-p">
                            {viewCount} <span>views</span> 
                            <div className="details__dot"></div> 
                            <span>{publishedAt.slice(9,10)} </span>
                            <div className="details__dot"></div>  
                            <span>{months[parseInt(publishedAt.slice(6,7)) - 1]}</span>
                            <div className="details__dot"></div>  
                            <span>{publishedAt.slice(0,4)}</span>
                            <span>This is {title} {tags?.map((tag:string,index:number)=>`#${tag} ${index === tags.length ? '' : ','}`)}</span>
                        </p>
                        <p className="details__show" onClick={()=>{setIsDescription(true)}}>Show More</p>
                        {isDescription && <p className="details__video-main-description">{description}</p>}
                    </div>
                </div>
            )
        })
    }

    useEffect(()=>{
        handleSetContainersAndHideElements()
    },[])

    return (
       <Layout>
           <div className="details">
                <div className="details__left-content">
                    {renderVideo()}
                </div>
                <div className="details__right-content"></div>
           </div>
       </Layout>
    )
}

export default Details
