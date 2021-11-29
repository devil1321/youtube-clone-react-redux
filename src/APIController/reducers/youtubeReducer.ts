import { ActionTypes } from '../types/actionTypes'
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
                ...state
            }
        case ActionTypes.Search:
            return {
                ...state
            }
        case ActionTypes.VideoComments:
            return {
                ...state
            }
        case ActionTypes.VideoDetails:
            return {
                ...state
            }
        case ActionTypes.ChannelDetails:
            return {
                ...state
            }
        case ActionTypes.ChannelVideos:
            return {
                ...state
            }
        case ActionTypes.PlaylistVideos:
            return {
                ...state
            }
        case ActionTypes.PlaylistDetails:
            return {
                ...state
            }
    }
}