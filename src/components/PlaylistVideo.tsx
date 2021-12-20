import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BsCollectionPlayFill } from 'react-icons/bs'
import { Links } from '../routes'

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
   
       
    const handleVideo = () =>{
            youtubeActions.playlistItems({playlistId:id,part:'snippet,id,status,contentDetails',maxResults:50})
            navigate(new Links(id).withSidebarFixed.playlistDetails)
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
