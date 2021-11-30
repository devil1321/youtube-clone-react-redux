import { ActionTypes } from '../types'

interface SuggestedVideos{
    type:ActionTypes.SuggestedVideos;
    suggestedVideos:any;
}
interface Search{
    type:ActionTypes.Search;
    search:any;
}
interface VideoComments{
    type:ActionTypes.VideoComments;
    videoComments:any;
}
interface VideoDetails{
    type:ActionTypes.VideoDetails;
    videoDetails:any;
}
interface ChannelDetails{
    type:ActionTypes.ChannelDetails;
    channelDetails:any;
}
interface ChannelVideos{
    type:ActionTypes.ChannelVideos;
    channelVideos:any;
}
interface PlaylistVideos{
    type:ActionTypes.PlaylistVideos;
    playlistVideos:any;
}
interface PlaylistDetails{
    type:ActionTypes.PlaylistDetails;
    playlistDetails:any;
}



export type Action = SuggestedVideos | Search | VideoComments | VideoDetails | ChannelDetails | ChannelVideos | PlaylistVideos | PlaylistDetails