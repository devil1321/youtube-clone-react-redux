import React,{useState, useEffect} from 'react'
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
    const dispatch = useDispatch()
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)
    const { playlistItems } = useSelector((state:State) => state.youtubeAPI)
   
       
    const handleVideo = () =>{
            youtubeActions.playlistItems({playlistId:id,part:'snippet,id,status,contentDetails',maxResults:50})
            navigate(`/playlist-details/${id}`)
    }

    return (
        <div className="playlist-video" onClick={()=>{
            handleVideo()
        }}>
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
