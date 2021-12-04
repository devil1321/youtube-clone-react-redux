import React, {useEffect} from 'react'
import Layout from '../templates/layout'
import { State } from '../APIController/reducers'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import * as UIActions from '../APIController/actions-creators/uiActions'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

const ChannelDetails = () => {
    const dispatch = useDispatch()
    const { channelDetails, channelVideos } = useSelector((state:State) => state.youtubeAPI)
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)
    const UI = bindActionCreators(UIActions,dispatch)
    return (
        <Layout>
            <div onClick={()=>{youtubeActions.playlistVideos({channelId:channelDetails?.items[0]?.id,part:'snippet',maxResults:200})}}>
                welcome from channel details
            </div>
        </Layout>
    )
}

export default ChannelDetails
