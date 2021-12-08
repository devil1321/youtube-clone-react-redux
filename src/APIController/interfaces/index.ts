export interface InitState {
    activeSearch:string;
    suggestedVideos:any[];
    globalSearch:any[];
    videoComments:any[];
    videoDetails:any[];
    channelDetails:any[];
    channelVideos:any[];
    playlistVideos:any[];
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
}

export interface SearchParams{
    q:string;
    part?:string;
    regionCode?:string;
    maxResults?:number;
    order?:string;
    type?:string;
}

export interface VideoCommentsParams{
    part:string;
    videoId:string;
    maxResults:number;
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
}


export interface PlaylistVideosParams{
    channelId:string;
    part:string;
    maxResults?:number;
}

export interface PlaylistDetails{
    id:string;
    part:string;
}