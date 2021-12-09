import React from 'react'

interface PlaylistAtMainProps{
    title:string;
    playlistItems:any;
}

const PlaylistAtMain:React.FC<PlaylistAtMainProps> = ({title,playlistItems}) => {
    return (
        <div className="channel-details__playlist-video-main">
        <h3>{title}</h3>
        <div className="channel-details__playlist-group">
            {playlistItems?.items?.map((video:any)=>{
                const { publishedAt, title } = video.snippet
                return(
                    <div>{title},{publishedAt}</div>
                )
            })}
        </div>
    </div>
    )
}

export default PlaylistAtMain
