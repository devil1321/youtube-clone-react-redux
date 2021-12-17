import React, { useState, useEffect ,Suspense } from 'react'
import { Link } from 'react-router-dom'
import { State } from '../APIController/reducers'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import { Links } from '../routes'

const VideoImg = React.lazy(() => import('./VideoImg'));

interface VideoProps {
    profile?:string;
    imgUrl:string;
    title:string;
    channelTitle?:string;
    publishedAt:string;
    videoId:string;
    channelId:string;
    minWidth?:string;
}


const Video:React.FC<VideoProps> = ({profile,imgUrl,title,channelTitle,publishedAt,videoId,channelId,minWidth}) => {
    
    // you can activate comments code if max requsets more than 500/month you can use channel picture
    const dispatch = useDispatch()
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)
    const { channelDetails } = useSelector((state:State) => state.youtubeAPI)
    // const { thumbnails } = channelDetails.items[0]?.snippet
    // const [profile,setProfile] = useState(null)

    // useEffect(()=>{
    //     youtubeActions.channelDetails({id:channelId,part="id,snippet"})
    //     setProfile(thumbnails)
    // },[])

    


    return (
        <div className="video" style={{minWidth:minWidth}}>
           <div className="video__img" onClick={()=>{
               youtubeActions.videoDetails({id:videoId,part:"contentDetails,snippet,statistics"})
               youtubeActions.videoComments({part:'snippet',videoId:videoId,maxResults:200})
               youtubeActions.suggestedVideos({relatedToVideoId:videoId,part:'id,snippet',type:'video',maxResults:200})
               }}>
               <Suspense fallback ={<h3>...Loading</h3>}>
                   <Link to={new Links(videoId).withSidebarFixed.details}>
                        <VideoImg imgUrl={imgUrl} />
                   </Link>
               </Suspense>
           </div>
           <div className="video__v-details">
               {profile && 
               <div className="video__profile">
                   {/* thumbnails.default.url */}
                    <img src={profile} alt="" />
               </div>}
                <div className="video__v-details-text">
                    <h3>{title}</h3>
                    {channelTitle && <h5>{channelTitle}</h5>}
                    <p>Published: {publishedAt.slice(0,10)}</p>
                </div>
           </div>
        </div>
    )
}

export default Video