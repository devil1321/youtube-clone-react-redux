import { ActionTypes } from '../types'
import { InitState } from '../interfaces'
import { Action } from '../actions'

const initData:InitState = {
    activeSearch:'All',
    suggestedVideos:[],
    videoCategories:[],
    globalSearch:[],
    getVideos:[],
    videoComments:[],
    videoDetails:[],
    channelDetails:[],
    channelVideos:[],
    playlistVideos:[],
    playlistItems:[],
    channelSubscriptions:[]
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
        case ActionTypes.GetVideoCategories:
            return {
                ...state,
                videoCategories:action.videoCategories
            }
        case ActionTypes.GlobalSearch:
            return {
                ...state,
                globalSearch:action.globalSearch
            }
        case ActionTypes.GetVideos:
            return {
                ...state,
                getVideos:action.getVideos
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
        case ActionTypes.ChannelSubscriptions:
            return {
                ...state,
                channelSubscriptions:action.channelSubscriptions
            }
        default:
            return{
                ...state
            }

    }
}