import React, { useEffect ,useState} from 'react'
import { State } from '../APIController/reducers'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BsFillPlayFill } from 'react-icons/bs'
const Playlist:React.FC = () => {
    const [index,setIndex] = useState<number>(0)
    const [pTitle,setPTitle] = useState<string>('')
    const [channelTitle,setChannelTitle] = useState<string>('')
    const dispatch = useDispatch()
    const { playlistItems,playlistVideos } = useSelector((state:State) => state.youtubeAPI)
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)

    const handleTitles = () =>{
        if(Object.keys(playlistItems).length > 0){
            var id = playlistItems?.items[0]?.snippet?.playlistId
        }
        const title = playlistVideos?.items?.filter((video:any) => video.id === id).map((video:any) => {
            return video?.snippet?.title
        })
        setPTitle(title)
        if(Object.keys(playlistItems).length > 0){
            setChannelTitle(playlistItems?.items[0]?.snippet?.channelTitle)
        }
    }

    const handleActive = (e:any) =>{
        const videos = document.querySelectorAll('.details__suggested-video.playlist__video')
        videos.forEach((video:any) => video.classList.remove('active'))
        e.target.parentElement.parentElement.classList.add('active')
    }

    useEffect(()=>{
        handleTitles()
    },[playlistItems])

    return (
        <div className="playlist">
            <div className="playlist__header">
                <h3>{pTitle}</h3>
                <p>{channelTitle} {index + 1} / {playlistItems?.items?.length}</p>
                <div className="playlist__header-inner">
                    <div className="playlist__header-inner-features"></div>
                </div>
            </div>
            <div className="playlist__videos">
                {playlistItems?.items?.map((video:any,index:number)=>{
                        if(video?.snippet !== undefined){
                            const  videoId  = video?.snippet?.resourceId?.videoId
                            const { publishedAt, channelId, channelTitle, title, thumbnails, position} = video?.snippet
                            // high
                            if(thumbnails?.high?.url !== undefined){
                                return(
                                    <div className={`details__suggested-video playlist__video ${index === 0 ? 'active' : ''}`} onClick={(e)=>{
                                        handleActive(e)
                                        setIndex(position)
                                        youtubeActions.videoDetails({id:videoId,part:"contentDetails,snippet,statistics"})
                                        youtubeActions.videoComments({part:'snippet',videoId:videoId,maxResults:50})
                                        youtubeActions.suggestedVideos({relatedToVideoId:videoId,part:'id,snippet',type:'video',maxResults:50})
                                    }}>
                                    <div className="details__suggested-video-img">
                                        <div className="details__suggested-video-overlay"><BsFillPlayFill /></div>
                                        <img src={thumbnails?.medium?.url} alt="" />
                                    </div>
                                    <div className="details__suggested-video-text">
                                        <h3>{title}</h3>
                                        <p>{channelTitle}</p>
                                        <p>{publishedAt.slice(0,10)}</p>
                                    </div>
                                </div>
                            )
                        }
                    }
                    })}
            </div>
        </div>
    )
}

export default Playlist
