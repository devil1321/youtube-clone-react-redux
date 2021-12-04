import { ActionTypes } from '../types'

interface SetActiveSearch{
    type:ActionTypes.SetActiveSearch;
    activeSearch:string;
}
interface SuggestedVideos{
    type:ActionTypes.SuggestedVideos;
    suggestedVideos:any;
}
interface Search{
    type:ActionTypes.GlobalSearch;
    globalSearch:any;
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
    videoDetails:any;
}



export type Action = SetActiveSearch | SuggestedVideos | Search | VideoComments | VideoDetails | ChannelDetails | ChannelVideos | PlaylistVideos | PlaylistDetails