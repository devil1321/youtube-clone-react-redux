import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdHomeFilled, MdSubscriptions, MdOutlineVideoLibrary, MdLocalMovies, MdVideocam, MdOutlineFeedback } from 'react-icons/md'
import { FaRegCompass, FaSatellite } from 'react-icons/fa'
import { VscHistory } from 'react-icons/vsc'
import { SiYoutubemusic, SiYoutubegaming, SiYoutube } from 'react-icons/si'
import { ImTrophy } from 'react-icons/im'
import { BiNews } from 'react-icons/bi'
import { IoIosAddCircleOutline, IoIosHelpCircleOutline } from 'react-icons/io'
import { CgMediaLive } from 'react-icons/cg'
import { BsFlag, BsPerson } from 'react-icons/bs'
import { RiSettings4Line } from 'react-icons/ri' 


const SidebarFixed:React.FC = () => {
    const dispatch = useDispatch()
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)

    const location = useLocation()
    const path = location.pathname

    const handleActiveLink = (e:any):void =>{
        const links = document.querySelectorAll('.sidebar__link')
        links.forEach(link => link.classList.remove('active'))
        e.target.classList.add('active')
    }
    

    const handleSidebarFixed = () =>{
        const sidebar = document.querySelector('.sidebar.fixed') as HTMLDivElement
        const sidebarFixedWrapper = document.querySelector('.sidebar-fixed-wrapper') as HTMLDivElement
        sidebar.classList.remove('open')  
        sidebar.classList.add('close')
        sidebarFixedWrapper.classList.add('close')
        sidebarFixedWrapper.classList.remove('open')

    }

    return (
        <React.Fragment>
        <div className="sidebar-fixed-wrapper close"></div>
            <div className="sidebar fixed close">
                 <div className="sidebar-expand">
                  <div className="sidebar__logo" onClick={()=>{handleSidebarFixed()}}> 
                      <GiHamburgerMenu />
                      <img src="/assets/main-logo.svg" alt="" />
                  </div>
                  <Link to="/" onClick={(e)=>{handleActiveLink(e)}} className="sidebar__link active"><MdHomeFilled />Home</Link>
                  <Link to="#" onClick={(e)=>{handleActiveLink(e)}} className="sidebar__link"><FaRegCompass />Explore</Link>
                  <Link to="#" onClick={(e)=>{handleActiveLink(e)}} className="sidebar__link"><MdSubscriptions />Subscriptions</Link>
                  <hr />
                  <Link to="#"><MdOutlineVideoLibrary />Library</Link>
                  <Link to="#"><VscHistory />History</Link>
                  <hr />
                  <p>Sign in to like videos, comment, and subscribe.</p>
                  <button><BsPerson />SIGN IN</button>
                  <hr />
                  <h3>BEST OF YOUTUBE</h3>
                  <Link data-q="Music" onClick={(e:any)=>{
                      handleActiveLink(e)
                      youtubeActions.globalSearch({q:e.target.dataset.q ,part:"snippet,id",regionCode:'US',order:'date',type:'video',maxResults:200})
                      youtubeActions.setActiveSearch(e)
                      }} className="sidebar__link" to="/"><span className="sidebar-expand__icon-circle"><SiYoutubemusic /></span> Music</Link>
                  <Link data-q="Sports" onClick={(e:any)=>{
                      handleActiveLink(e)
                      youtubeActions.globalSearch({q:e.target.dataset.q ,part:"snippet,id",regionCode:'US',order:'date',type:'video',maxResults:200})
                      youtubeActions.setActiveSearch(e)
                      }} className="sidebar__link" to="/"><span className="sidebar-expand__icon-circle"><ImTrophy /></span> Sports</Link>
                  <Link data-q="Gaming" onClick={(e:any)=>{
                      handleActiveLink(e)
                      youtubeActions.globalSearch({q:e.target.dataset.q ,part:"snippet,id",regionCode:'US',order:'date',type:'video',maxResults:200})
                      youtubeActions.setActiveSearch(e)
                      }} className="sidebar__link" to="/"><span className="sidebar-expand__icon-circle"><SiYoutubegaming /></span> Gaming</Link>
                  <Link  data-q="Movies" onClick={(e:any)=>{
                      handleActiveLink(e)
                      youtubeActions.globalSearch({q:e.target.dataset.q ,part:"snippet,id",regionCode:'US',order:'date',type:'video',maxResults:200})
                      youtubeActions.setActiveSearch(e)
                      }} className="sidebar__link" to="/"><span className="sidebar-expand__icon-circle"><MdLocalMovies /></span> Movies</Link>
                  <Link data-q="News" onClick={(e:any)=>{
                      handleActiveLink(e)
                      youtubeActions.globalSearch({q:e.target.dataset.q ,part:"snippet,id",regionCode:'US',order:'date',type:'video',maxResults:200})
                      youtubeActions.setActiveSearch(e)
                      }} className="sidebar__link" to="/"><span className="sidebar-expand__icon-circle"><BiNews /></span> News</Link>
                  <Link data-q="Live" onClick={(e:any)=>{
                      handleActiveLink(e)
                      youtubeActions.globalSearch({q:e.target.dataset.q ,part:"snippet,id",regionCode:'US',order:'date',type:'video',maxResults:200})
                      youtubeActions.setActiveSearch(e)
                      }} className="sidebar__link" to="/"><span className="sidebar-expand__icon-circle"><FaSatellite /></span> Live</Link>
                  <Link data-q="360° Video" onClick={(e:any)=>{
                      handleActiveLink(e)
                      youtubeActions.globalSearch({q:e.target.dataset.q ,part:"snippet,id",regionCode:'US',order:'date',type:'video',maxResults:200})
                      youtubeActions.setActiveSearch(e)
                      }} className="sidebar__link" to="/"><span className="sidebar-expand__icon-circle"><MdVideocam /></span> 360° Video</Link>
                  <hr />
                  <Link onClick={(e)=>{handleActiveLink(e)}} className="sidebar__link" to="#"><IoIosAddCircleOutline />Browse channels</Link>
                  <hr />
                  <h3>MORE FROM YOUTUBE</h3>
                  <Link onClick={(e)=>{handleActiveLink(e)}} className="sidebar__link" to="#"><SiYoutube />YouTube Promium</Link>
                  <Link onClick={(e)=>{handleActiveLink(e)}} className="sidebar__link" to="#"><CgMediaLive />Live</Link>
                  <hr />
                  <Link onClick={(e)=>{handleActiveLink(e)}} className="sidebar__link" to="#"><RiSettings4Line />Settings</Link>
                  <Link onClick={(e)=>{handleActiveLink(e)}} className="sidebar__link" to="#"><BsFlag />Report History</Link>
                  <Link onClick={(e)=>{handleActiveLink(e)}} className="sidebar__link" to="#"><IoIosHelpCircleOutline />Help</Link>
                  <Link onClick={(e)=>{handleActiveLink(e)}} className="sidebar__link" to="#"><MdOutlineFeedback />Send Feedback</Link>
                  <hr />
                  <div className="sidebar-expand__links">
                      <a href="#">About</a>
                      <a href="#">Press</a>
                      <a href="#">Cophyright</a>
                      <a href="#">Contact us</a>
                      <a href="#">Creators</a>
                      <a href="#">Advertise</a>
                      <a href="#">Developers</a>
                  </div>
                  <div className="sidebar-expand__links">
                     <a href="#">Terms</a>
                     <a href="#">Privacy</a>
                     <a href="#">Policy &amp; Safety</a>
                     <a href="#">How youtube works</a>
                     <a href="#">Test new features</a>
                  </div>
                  <p>&copy; 2021 Google LLC</p>
                </div>
            </div>
          </React.Fragment>
    )
}

export default SidebarFixed
