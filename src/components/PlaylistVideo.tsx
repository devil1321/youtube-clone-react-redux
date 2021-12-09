import React from 'react'
import { Link } from 'react-router-dom'
import { State } from '../APIController/reducers'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

interface PlaylistVideoProps{
    id:string;
    imgUrl:string;
    title:string;
    itemCount:number;
}

const PlaylistVideo:React.FC<PlaylistVideoProps> = ({id,imgUrl,title,itemCount}) => {

    const dispatch = useDispatch()
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)

    return (
        <div className="playlist-video">
            <div className="playlist-video__img">
                <div className="playlist-video__overlay">{itemCount}</div>
                <img src={imgUrl} alt="" />
            </div>
            <h3>{title}</h3>
            <Link to={`/details/${id}`} onClick={()=>{
                // needs playlistId and need to set it in youtubeActions
                youtubeActions.playlistItems()
                }}>View Full Playlist</Link>
        </div>
    )
}

export default PlaylistVideo
