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
interface GetVideos{
    type:ActionTypes.GetVideos,
    getVideos:any;
}

interface GetVideoCategories{
    type:ActionTypes.GetVideoCategories,
    videoCategories:any;
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
interface PlaylistItems{
    type:ActionTypes.PlaylistItems;
    playlistItems:any;
}
interface ChannelSubscriptions{
    type:ActionTypes.ChannelSubscriptions;
    channelSubscriptions:any;
}



export type Action = SetActiveSearch | SuggestedVideos | Search | VideoComments | VideoDetails | ChannelDetails | ChannelVideos | PlaylistVideos | PlaylistItems | ChannelSubscriptions | GetVideos | GetVideoCategories