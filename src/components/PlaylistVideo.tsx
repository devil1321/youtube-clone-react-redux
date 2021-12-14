import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { State } from '../APIController/reducers'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BsCollectionPlayFill } from 'react-icons/bs'
import { playlistItems } from '../APIController/actions-creators/youtubeActions'
interface PlaylistVideoProps{
    id:string;
    imgUrl:string;
    title:string;
    itemCount:number;
}

const PlaylistVideo:React.FC<PlaylistVideoProps> = ({id,imgUrl,title,itemCount}) => {
    const navigate = useNavigate()
    const handleVideo = () =>{
        let load = 0
        youtubeActions.playlistItems({playlistId:id,part:'snippet,id,status,contentDetails',maxResults:50})
        while(load < 2){
            load++
            youtubeActions.videoDetails({id:videoId,part:"contentDetails,snippet,statistics"})
            youtubeActions.videoComments({part:'snippet',videoId:videoId,maxResults:200})
        }
        if(load === 2){
            navigate(`/playlist-details/${id}`)
        }   
    }

    const dispatch = useDispatch()
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)
    const { playlistItems } = useSelector((state:State) => state.youtubeAPI)
    if(Object.keys(playlistItems).length > 0){
        var { videoId } = playlistItems.items[0].snippet.resourceId
    }
    return (
        <div className="playlist-video" onClick={()=>{handleVideo()}}>
            <div className="playlist-video__img">
                <div className="playlist-video__overlay">{itemCount} <BsCollectionPlayFill /></div>
                <img src={imgUrl} alt="" />
            </div>
            <h3>{title}</h3>   
            <p>View Full Playlist</p>
        </div>
    )
}

export default PlaylistVideo
