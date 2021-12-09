import { ActionTypes } from '../types'
import { InitState } from '../interfaces'
import { Action } from '../actions'

const initData:InitState = {
    activeSearch:'All',
    suggestedVideos:[],
    globalSearch:[],
    videoComments:[],
    videoDetails:[],
    channelDetails:[],
    channelVideos:[],
    playlistVideos:[],
    playlistItems:[]
}


export default (state = initData ,action:Action) =>{
    switch(action.type){
        case ActionTypes.SetActiveSearch:
            return {
                ...state,
                activeSearch:action.activeSearch
            }
        case ActionTypes.SuggestedVideos:
            return {
                ...state,
                suggestedVideos:action.suggestedVideos
            }
        case ActionTypes.GlobalSearch:
            return {
                ...state,
                globalSearch:action.globalSearch
            }
        case ActionTypes.VideoComments:
            return {
                ...state,
                videoComments:action.videoComments
            }
        case ActionTypes.VideoDetails:
            return {
                ...state,
                videoDetails:action.videoDetails
            }
        case ActionTypes.ChannelDetails:
            return {
                ...state,
                channelDetails:action.channelDetails
            }
        case ActionTypes.ChannelVideos:
            return {
                ...state,
                channelVideos:action.channelVideos
            }
        case ActionTypes.PlaylistVideos:
            return {
                ...state,
                playlistVideos:action.playlistVideos
            }
        case ActionTypes.PlaylistItems:
            return {
                ...state,
                playlistItems:action.playlistItems
            }
        default:
            return{
                ...state
            }

    }
}