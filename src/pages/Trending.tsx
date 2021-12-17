import React,{ useState,useEffect} from 'react'
import Layout from '../templates/layout'
import PopularVideo from '../components/PopularVideo'
import { useDispatch, useSelector } from 'react-redux'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import * as UIActions from '../APIController/actions-creators/uiActions'
import { State } from '../APIController/reducers'
import { bindActionCreators } from 'redux'
const Trending = () => {
    const dispatch = useDispatch()
    const { getVideos } = useSelector((state:State) => state.youtubeAPI)
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)
    const UI = bindActionCreators(UIActions,dispatch)

    const renderVideos = () =>{
        return getVideos?.items?.map((video:any) => {
            const { publishedAt,channelId,title,channelTitle,thumbnails } = video.snippet
            const { id } = video
            return <PopularVideo key={id} imgUrl={thumbnails?.high?.url}  publishedAt={publishedAt} channelId={channelId} videoId={id} title={title} channelTitle={channelTitle} />
      })
    }
    useEffect(()=>{
        UI.handleHideTags()
        youtubeActions.getVideos({part:'snippet,id',chart:'mostPopular',regionCode:'US',maxResults:50})
    },[])

    return (
        <Layout>
        <div className="trending">
            welcome from trending
            <div className="trending__videos">
                {renderVideos()}
            </div>
        </div>
        </Layout>
    )
}

export default Trending
