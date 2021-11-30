import { ActionTypes } from '../types'
import { InitState } from '../interfaces'
import { Action } from '../actions'

const initData:InitState = {
    suggestedVideos:[],
    search:[],
    videoComments:[],
    videoDetails:[],
    channelDetails:[],
    channelVideos:[],
    playlistVideos:[],
    playlistDetails:[]
}


export default (state = initData ,action:Action) =>{
    switch(action.type){
        case ActionTypes.SuggestedVideos:
            return {
                ...state,
                suggestedVideos:action.suggestedVideos
            }
        case ActionTypes.Search:
            return {
                ...state,
                search:action.search
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
        case ActionTypes.PlaylistDetails:
            return {
                ...state,
                playlistDetails:action.playlistDetails
            }
    }
}