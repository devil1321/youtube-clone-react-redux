import { ActionTypes } from '../types'
interface SuggestedVideos{
    type:any
}
interface Search{
    type:any
}
interface VideoComments{
    type:any
}
interface VideoDetails{
    type:any
}
interface ChannelDetails{
    type:any
}
interface ChannelVideos{
    type:any
}
interface PlaylistVideos{
    type:any
}
interface PlaylistDetails{
    type:any
}



export type Action = SuggestedVideos | Search | VideoComments | VideoDetails | ChannelDetails | ChannelVideos | PlaylistVideos | PlaylistDetails