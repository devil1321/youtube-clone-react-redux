import React from 'react'

interface VideoImageProps {
    imgUrl:string;
}

const VideoImg:React.FC<VideoImageProps> = ({imgUrl}) => {
    return (
        <img src={imgUrl} alt="video" />
    )
}

export default VideoImg
