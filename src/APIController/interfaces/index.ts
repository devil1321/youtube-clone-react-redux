export interface InitState {
    activeSearch:string;
    suggestedVideos:any[];
    globalSearch:any[];
    videoComments:any[];
    videoDetails:any[];
    channelDetails:any[];
    channelVideos:any[];
    playlistVideos:any[];
    playlistItems:any[];
    channelSubscriptions:any[];
}

export interface UIState {
    isMobile:boolean;
}

export interface AxiosOptions {
    method:any;
    url:string;
    params:{
        key?:string;
        q?:string;
        relatedToVideoId?:string;
        part?:string;
        type?:string;
        id?:string;
        videoId?:string;
        channelId?:string;
        playlistId?:string;
        maxResults?:number;
        regionCode?:string;
        order?:string;
        pageToken?:string;
    }
    headers:{
        'x-rapidapi-host'?:string;
        'x-rapidapi-key'?:string;
        'Content-Type'?:string;
    }
}

export interface SuggestedVideosParams{
    relatedToVideoId:string;
    part:string;
    type:string;
    maxResults:number;
    regionCode?:string;
    order?:string;
    pageToken?:string;
}

export interface SearchParams{
    q:string;
    part?:string;
    regionCode?:string;
    maxResults?:number;
    order?:string;
    type?:string;
    pageToken?:string;
}

export interface VideoCommentsParams{
    part:string;
    videoId:string;
    maxResults:number;
    pageToken?:string;
}

export interface VideoDetailsParams{
    part:string;
    id:string;
}

export interface ChannelDetailsParams{
    part:string;
    channelId:string;
}

export interface ChannelVideosParams{
    channelId:string;
    part:string;
    order?:string;
    maxResults?:number;
    pageToken?:string;
}


export interface PlaylistVideosParams{
    channelId:string;
    part:string;
    maxResults?:number;
    pageToken?:string;
}

export interface PlaylistDetailsParams{
    playlistId:string;
    videoId?:string;
    part:string;
    pageToken?:string;
}

export interface ChannelSubscriptionsParams{
    channelId:string;
    part:string;
    pageToken?:string;
}