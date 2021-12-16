import React,{ useState,useEffect } from 'react'
import Layout from '../templates/layout'
import { useDispatch, useSelector } from 'react-redux'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import * as UIActions from '../APIController/actions-creators/uiActions'
import { State } from '../APIController/reducers'
import { bindActionCreators } from 'redux'
import PopularVideo from '../components/PopularVideo'
const Explore = () => {

    const dispatch = useDispatch()
    const { getVideos } = useSelector((state:State) => state.youtubeAPI)
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)
    const UI = bindActionCreators(UIActions,dispatch)
    
    const [navItems,setNavItems] = useState<string[]>([
        'trending',
        'music',
        'movies',
        'live',
        'gaming',
        'news',
        'sports'
    ])

    const renderNav = () =>{
        return navItems.map((title:string)=>{
            return(
                <div className="explore__nav-item">
                    <img src={`/assets/icons/${title}.png`} alt="" />
                    <h3>{title.slice(0,1).toUpperCase() + title.slice(1,title.length)}</h3>
                </div>
            )
        })
    }

    const renderVideos = () =>{
        return getVideos?.items?.map((video:any) => {
            const { publishedAt,channelId,title,channelTitle,thumbnails } = video.snippet
            const { id } = video
            return <PopularVideo key={id} imgUrl={thumbnails?.high?.url}  publishedAt={publishedAt} channelId={channelId} videoId={id} title={title} channelTitle={channelTitle} />
      })
    }

    useEffect(() => {
        UI.handleHideTags()
        youtubeActions.getVideos({part:'snippet,id',chart:'mostPopular',regionCode:'US',maxResults:50})
    },[])

    return (
        <Layout>
            <div className="explore">
                <div className="explore__nav">
                    {renderNav()}
                </div>
                <div className="explore__popular-videos">
                    <h3>Trendig Videos</h3>
                    {renderVideos()}
                </div>
            </div>
        </Layout>
    )
}

export default Explore
