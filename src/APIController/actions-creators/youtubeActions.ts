import axios from 'axios'
import { AxiosOptions } from '../interfaces'
import { Dispatch } from 'redux'
import { Action } from '../actions'
import { ActionTypes } from '../types'

import { SuggestedVideosParams, SearchParams, VideoCommentsParams, VideoDetailsParams, ChannelDetailsParams, ChannelVideosParams, PlaylistVideosParams, PlaylistDetailsParams, ChannelSubscriptionsParams} from '../interfaces'

export const setActiveSearch = (e:any) => (dispatch:Dispatch<Action>):void =>{
  dispatch({
    type:ActionTypes.SetActiveSearch,
    activeSearch:e.target.dataset.q
  })
}


export const suggestedVideos = ({relatedToVideoId,part,regionCode,maxResults,order,type,pageToken}:SuggestedVideosParams = {relatedToVideoId:'',part:'snippet,id',regionCode:'US',maxResults:50,order:'date',type:'video'}) => async (dispatch:Dispatch<Action>) =>{
  var options:AxiosOptions = {
      method: 'GET',
      url: 'https://youtube.googleapis.com/youtube/v3/search/',
      params: {
        relatedToVideoId:relatedToVideoId,
        part: part,
        regionCode: regionCode,
        maxResults:maxResults,
        order: order,
        type:type,
        pageToken:pageToken,
        key:'AIzaSyC1lvsWKN7FXjV9eh2kFseCFMy-wcky6kY',
      },
      headers: {
        'Content-Type':'application/json'
      }
    };
    
    await axios.request<AxiosOptions>(options).then(function (response) {
          dispatch({
              type:ActionTypes.SuggestedVideos,
              suggestedVideos:response.data
          })
    }).catch(function (error) {
        console.error(error);
    });
}

export const globalSearch = ({q,part,regionCode,maxResults,order,type,pageToken}:SearchParams = {q:'All',part:'snippet,id',regionCode:'US',maxResults:50,order:'date',type:'video'}) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://youtube.googleapis.com/youtube/v3/search/',
        params: {
          q: q,
          part: part,
          regionCode: regionCode,
          maxResults:maxResults,
          order: order,
          type:type,
          pageToken:pageToken,
          key:'AIzaSyC1lvsWKN7FXjV9eh2kFseCFMy-wcky6kY',
        },
        headers: {
          'Content-Type':'application/json'
        }
      };
      
      await axios.request<any>(options).then(function (response) {
            dispatch({
                type:ActionTypes.GlobalSearch,
                globalSearch:response.data
            })
      }).catch(function (error) {
          console.error(error);
      });
}
export const videoComments = ({part,videoId,maxResults,pageToken}:VideoCommentsParams = {part:'id,snippet',videoId:'',maxResults:50}) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        // url: 'https://www.googleapis.com/youtube/v3/comments',
        url: 'https://youtube-v31.p.rapidapi.com/commentThreads',
        params: {
          part: part, 
          // id:videoId,
          videoId: videoId,
          maxResults: maxResults,
          pageToken:pageToken
          // key:'AIzaSyB7mPanJc9puF96k7siK03J2fOF47-9CB4',
        },
        headers: {
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      await axios.request<AxiosOptions>(options).then(function (response) {
         dispatch({
           type:ActionTypes.VideoComments,
           videoComments:response.data
         })
      }).catch(function (error) {
          console.error(error);
      });
}
export const videoDetails= ({part,id}:VideoDetailsParams = {part:'contentDetails,snippet,statistics',id:''}) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/videos',
        params: {
          part: part, 
          id: id,
          key:'AIzaSyC1lvsWKN7FXjV9eh2kFseCFMy-wcky6kY',
        },
        headers: {
          'Content-Type':'application/json'
        }
      };
      
      await axios.request(options).then(function (response) {
          dispatch({
              type:ActionTypes.VideoDetails,
              videoDetails:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const channelDetails = ({part,channelId}:ChannelDetailsParams = {part:'snippet,statistics,brandingSettings',channelId:''}) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://youtube.googleapis.com/youtube/v3/channels',
        params: {
          part: part, 
          id: channelId,
          key:'AIzaSyC1lvsWKN7FXjV9eh2kFseCFMy-wcky6kY',
        },
        headers: {
          'Content-Type':'application/json'
        }
      };
      
      await axios.request<AxiosOptions>(options).then(function (response) {
          dispatch({
              type:ActionTypes.ChannelDetails,
              channelDetails:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}
export const channelVideos = ({channelId,part,order,maxResults,pageToken}:ChannelVideosParams = {channelId:'',part:'snippet,id',order:'date',maxResults:50}) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://youtube.googleapis.com/youtube/v3/search',
        params: {
          channelId: channelId,
          part: part,
          order: order,
          maxResults: maxResults,
          pageToken:pageToken,
          key:'AIzaSyC1lvsWKN7FXjV9eh2kFseCFMy-wcky6kY',
        },
        headers: {
          'Content-Type':'application/json'
        }
      };
      
      await axios.request<AxiosOptions>(options).then(function (response) {
          dispatch({
              type:ActionTypes.ChannelVideos,
              channelVideos:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}
export const playlistVideos = ({channelId,part,maxResults,pageToken }:PlaylistVideosParams = {channelId:'',part:"snippet,contentDetails",maxResults:50}) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://youtube.googleapis.com/youtube/v3/playlists',
        params: {
          channelId:channelId,
          part: part, 
          maxResults:maxResults,
          pageToken:pageToken,
          key:'AIzaSyC1lvsWKN7FXjV9eh2kFseCFMy-wcky6kY',
        },
        headers: {
          'Content-Type':'application/json'
        }
      };
      
      await axios.request<AxiosOptions>(options).then(function (response) {
          dispatch({
              type:ActionTypes.PlaylistVideos,
              playlistVideos:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}
export const playlistItems = ({playlistId,videoId,part,maxResults,pageToken}:PlaylistDetailsParams = {playlistId:'',videoId:'',part:'snippet,id,status,contentDetails',maxResults:50}) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://youtube.googleapis.com/youtube/v3/playlistItems',
        // id need playlistId
        params: {
           playlistId: playlistId,
           part: part,
           videoId:videoId,
           pageToken:pageToken,
           maxResults:maxResults,
           key:'AIzaSyC1lvsWKN7FXjV9eh2kFseCFMy-wcky6kY',
          },
        headers: {
          'Content-Type':'application/json'
        }
      };
      
      await axios.request<AxiosOptions>(options).then(function (response) {
          dispatch({
              type:ActionTypes.PlaylistItems,
              playlistItems:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const getChannelSubscriptions = ({part,channelId,pageToken}:ChannelSubscriptionsParams = {part:'id,snippet',channelId:''}) => async (dispatch:Dispatch<Action>) =>{
      var options:AxiosOptions = {
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/subscriptions',
        params: {
           channelId: channelId,
           part: part,
           pageToken:pageToken,
           key:'AIzaSyC1lvsWKN7FXjV9eh2kFseCFMy-wcky6kY',
          },
        headers: {
          'Content-Type':'application/json'
        }
      };

      await axios.request<AxiosOptions>(options).then(function (response) {
          dispatch({
              type:ActionTypes.ChannelSubscriptions,
              channelSubscriptions:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}