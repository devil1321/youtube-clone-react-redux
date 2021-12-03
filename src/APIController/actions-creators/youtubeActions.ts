import axios from 'axios'
import { AxiosOptions } from '../interfaces'
import { Dispatch } from 'redux'
import { Action } from '../actions'
import { ActionTypes } from '../types'

import { SuggestedVideosParams, SearchParams, VideoCommentsParams, VideoDetailsParams, ChannelDetailsParams, ChannelVideosParams, PlaylistVideosParams,PlaylistDetails} from '../interfaces'

export const suggestedVideos = ({relatedToVideoId,part="id,snippet",type="video",maxResults=50}:SuggestedVideosParams) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          relatedToVideoId: relatedToVideoId,
          part: part,
          type: type,
          maxResults: maxResults
        },
        headers: {
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      await axios.request(options).then(function (response) {
          dispatch({
              type:ActionTypes.SuggestedVideos,
              suggestedVideos:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}

export const search = ({q,part="snippet,id",regionCode="US",maxResults=50,order="date"}:SearchParams) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          q: q,
          part: part,
          regionCode: regionCode,
          maxResults:maxResults,
          order: order
        },
        headers: {
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      await axios.request<AxiosOptions>(options).then(function (response) {
            dispatch({
                type:ActionTypes.Search,
                search:response.data
            })
      }).catch(function (error) {
          console.error(error);
      });
}
export const videoComments = ({part="snippet",videoId,maxResults=100}:VideoCommentsParams) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/commentThreads',
        params: {part: part, videoId: videoId, maxResults: maxResults},
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
export const videoDetails= ({part="contentDetails,snippet,statistics",id}:VideoDetailsParams) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/videos',
        params: {part: part, id: id},
        headers: {
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
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

export const channelDetails = ({part="snippet,statistics",id}:ChannelDetailsParams) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/channels',
        params: {part: part, id: id},
        headers: {
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
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
export const channelVideos = ({channelId,part="snippet,id",order="date",maxResults=50}:ChannelVideosParams) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          channelId: channelId,
          part: part,
          order: order,
          maxResults: maxResults
        },
        headers: {
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
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
export const playlistVideos = ({playlistId,part="snippet",maxResults=50}:PlaylistVideosParams) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/playlistItems',
        params: {playlistId:playlistId, part: part, maxResults:maxResults},
        headers: {
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
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
export const playlistDetails = ({id,part="snippet"}:PlaylistDetails) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/playlists',
        params: {id: 'RDZiQo7nAkQHU', part: 'snippet'},
        headers: {
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
          'x-rapidapi-key': 'ee01db358fmshf866f3732da81eap1aa530jsnb32207469154'
        }
      };
      
      await axios.request<AxiosOptions>(options).then(function (response) {
          dispatch({
              type:ActionTypes.PlaylistDetails,
              playlistDetails:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}