export interface InitState {
    suggestedVideos:any[];
    search:any[];
    videoComments:any[];
    videoDetails:any[];
    channelDetails:any[];
    channelVideos:any[];
    playlistVideos:any[];
    playlistDetails:any[];
}

export interface AxiosOptions {
    method:any;
    url:string;
    params:{
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
        'x-rapidapi-host':string;
        'x-rapidapi-key':string;
    }
}

export interface SuggestedVideosParams{
    relatedToVideoId:string;
    part:string;
    type:string;
    maxResults:number;
}

export interface SearchParams{
    q:string;
    part:string;
    regionCode?:string;
    maxResults?:number;
    order?:string;
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
    id:string;
}

export interface ChannelVideosParams{
    channelId:string;
    part:string;
    order?:string;
    maxResults?:number;
}


export interface PlaylistVideosParams{
    playlistId:string;
    part:string;
    maxResults?:number;
}

export interface PlaylistDetails{
    id:string;
    part:string;
}