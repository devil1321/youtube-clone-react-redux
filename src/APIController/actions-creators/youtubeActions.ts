import axios from 'axios'
import { AxiosOptions } from '../interfaces'
import { Dispatch } from 'redux'
import { Action } from '../actions'
import { ActionTypes } from '../types'

import { SuggestedVideosParams, SearchParams, VideoCommentsParams, VideoDetailsParams, ChannelDetailsParams, ChannelVideosParams, PlaylistVideosParams,PlaylistDetails} from '../interfaces'

export const setActiveSearch = (e:any) => (dispatch:Dispatch<Action>):void =>{
  dispatch({
    type:ActionTypes.SetActiveSearch,
    activeSearch:e.target.dataset.q
  })
}

export const suggestedVideos = ({relatedToVideoId,part="snippet,id",regionCode="US",maxResults=200,order="date",type="video"}:SuggestedVideosParams) => async (dispatch:Dispatch<Action>) =>{
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
        key:'AIzaSyB7mPanJc9puF96k7siK03J2fOF47-9CB4',
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

export const globalSearch = ({q,part="snippet,id",regionCode="US",maxResults=200,order="date",type="video"}:SearchParams) => async (dispatch:Dispatch<Action>) =>{
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
          key:'AIzaSyB7mPanJc9puF96k7siK03J2fOF47-9CB4',
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
export const videoComments = ({part="id,snippet",videoId,maxResults=200}:VideoCommentsParams) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/comments',
        params: {
          part: part, 
          id: videoId,
          maxResults: maxResults,
          key:'AIzaSyB7mPanJc9puF96k7siK03J2fOF47-9CB4',
        },
        headers: {
          'Content-Type':'application/json'
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
        url: 'https://www.googleapis.com/youtube/v3/videos',
        params: {
          part: part, 
          id: id,
          key:'AIzaSyB7mPanJc9puF96k7siK03J2fOF47-9CB4',
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
export const playlistVideos = ({channelId,part="snippet",maxResults=50}:PlaylistVideosParams) => async (dispatch:Dispatch<Action>) =>{
    var options:AxiosOptions = {
        method: 'GET',
        url: 'https://youtube.googleapis.com/youtube/v3/playlists',
        params: {
          key:'AIzaSyB7mPanJc9puF96k7siK03J2fOF47-9CB4',
          channelId:channelId,
          part: part, 
          maxResults:maxResults},
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
              videoDetails:response.data
          })
      }).catch(function (error) {
          console.error(error);
      });
}