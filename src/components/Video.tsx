import React, { useState, Suspense } from 'react'

const VideoImg = React.lazy(() => import('./VideoImg'));

interface VideoProps {
    imgUrl:string;
    profile:string;
    title:string;
    channelTitle:string;
    publishedAt:string;
    videoId:string;
    channelId:string;
}


const Video:React.FC<VideoProps> = ({profile,imgUrl,title,channelTitle,publishedAt,videoId,channelId}) => {
  
    return (
        <div className="video">
           <div className="video__img">
               <Suspense fallback ={<h3>...Loading</h3>}>
                    <VideoImg imgUrl={imgUrl} />
               </Suspense>
           </div>
           <div className="video__v-details">
               <div className="video__profile">
                    <img src={profile} alt="" />
               </div>
                <div className="video__v-details-text">
                    <h3>{title}</h3>
                    <h5>{channelTitle}</h5>
                    <p>Published: {publishedAt.slice(0,10)} / {publishedAt.slice(11,19)}</p>
                </div>
           </div>
        </div>
    )
}

export default Video