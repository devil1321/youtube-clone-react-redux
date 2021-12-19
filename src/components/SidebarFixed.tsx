import React,{ useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { State } from '../APIController/reducers'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import * as UIActions from '../APIController/actions-creators/uiActions'
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
import { GiHamburgerMenu } from 'react-icons/gi'
import { Links } from '../routes'

interface SidebarFixedProps {
    fix?:number;
}

const SidebarFixed:React.FC<SidebarFixedProps> = ({fix}) => {
    const { isMobile } = useSelector((state:State) => state.UI)
    const dispatch = useDispatch()
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)
    const UI = bindActionCreators(UIActions,dispatch)
    const { activeLink,activeLinkThin } = useSelector((state:State) => state.UI)
    const location = useLocation()
    const path = location.pathname

    const handleActiveLink = (e:any):void =>{
        let linksArray:any = []
        const links = document.querySelectorAll('.sidebar__link') as NodeListOf<HTMLAnchorElement>
        links.forEach(link => linksArray.push(link))
        const index = linksArray.indexOf(e.target)
        UI.handleActiveLink(index)
    }

    const handleActivateLink = (link:number):void =>{
        const links = document.querySelectorAll('.sidebar__link') as NodeListOf<HTMLAnchorElement>
        links.forEach(link => link.classList.remove('active'))
        links[link].classList.add('active')
    }

    const handleActivateLinkThin = (link:number):void =>{
        const links = document.querySelectorAll('.sidebar__link-thin') as NodeListOf<HTMLAnchorElement>
        links.forEach(link => link.classList.remove('active'))
        links[link].classList.add('active')
    }

    const handleSidebarFixed = () =>{
        const sidebar = document.querySelector('.sidebar.fixed') as HTMLDivElement
        const sidebarFixedWrapper = document.querySelector('.sidebar-fixed-wrapper') as HTMLDivElement
        sidebar.classList.remove('open')  
        sidebar.classList.add('close')
        sidebarFixedWrapper.classList.add('close')
        sidebarFixedWrapper.classList.remove('open')
    }


    const renderThin = () =>{
        let links = new Links().withSidebar
        const linkskArr = Object.keys(links)
        return linkskArr.map((key:string) => {
            console.log(links[key])
            if(isMobile && path === links[key]){
                return(
                    <div className="sidebar" style={{marginTop:fix}}>
                        <div className="sidebar-thin">
                            <Link onClick={(e:any)=>{
                                UI.handleActiveLinkThin(0)
                                youtubeActions.isSearching(false)
                            }} className="sidebar__link-thin" to={new Links().withSidebar.home}><MdHomeFilled />Home</Link>
                            <Link onClick={(e:any)=>{
                                UI.handleActiveLinkThin(1)
                                youtubeActions.isSearching(true)
                            }} className="sidebar__link-thin" to={new Links().withSidebar.explore}><FaRegCompass />Explore</Link>
                            <Link onClick={(e:any)=>{UI.handleActiveLinkThin(2)}} className="sidebar__link-thin" to={new Links().withSidebar.subscriptions}><MdSubscriptions />Subscriptions</Link>
                            <Link onClick={(e:any)=>{UI.handleActiveLinkThin(3)}} className="sidebar__link-thin" to={new Links().withSidebar.library}><MdOutlineVideoLibrary />Library</Link>
                            <Link onClick={(e:any)=>{UI.handleActiveLinkThin(4)}} className="sidebar__link-thin" to={new Links().withSidebar.history}><VscHistory />History</Link>
                        </div>
                    </div>
                )
            }
        })
    }

    const handleActivateLinks = () =>{
        const links = document.querySelectorAll('.sidebar__link') as NodeListOf<HTMLAnchorElement>
        const linksThin = document.querySelectorAll('.sidebar__link-thin') as NodeListOf<HTMLAnchorElement>
        const linksArr:any[] = []
        links.forEach((link:any)=>linksArr.push(link))
        const thinLinksArr:any[] = []
        linksThin.forEach((link:any)=>thinLinksArr.push(link))
        if(linksArr.length > 0){
            handleActivateLink(activeLink)
        }
        if(thinLinksArr.length > 0){
            handleActivateLinkThin(activeLinkThin)
        }
    }

    useEffect(()=>{
        handleActivateLinks()
    },[activeLink])
    return (
        <React.Fragment>
        <div className="sidebar-fixed-wrapper close" onClick={()=>{handleSidebarFixed()}}>
            <div className="sidebar fixed close">
            <div className="sidebar-expand">
            <div className="sidebar__logo" onClick={()=>{handleSidebarFixed()}}> 
                      <GiHamburgerMenu />
                      <img src="/assets/main-logo.svg" alt="" />
                  </div>
             <Link to={new Links().withSidebar.home} onClick={(e:any)=>{
                 youtubeActions.isSearching(false)
                 handleActiveLink(e)}} className="sidebar__link active"><MdHomeFilled />Home</Link>
             <Link to={new Links().withSidebar.explore} onClick={(e:any)=>{
                 youtubeActions.isSearching(true)
                 handleActiveLink(e)}} className="sidebar__link"><FaRegCompass />Explore</Link>
             <Link to={new Links().withSidebar.subscriptions} onClick={(e:any)=>{
                 youtubeActions.isSearching(true)
                 handleActiveLink(e)}} className="sidebar__link"><MdSubscriptions />Subscriptions</Link>
             <hr />
             <Link to={new Links().withSidebar.library}><MdOutlineVideoLibrary />Library</Link>
             <Link to={new Links().withSidebar.history}><VscHistory />History</Link>
             <hr />
             <p>Sign in to like videos, comment, and subscribe.</p>
             <button><BsPerson />SIGN IN</button>
             <hr />
             <h3>BEST OF YOUTUBE</h3>
             <Link data-q="Music" onClick={(e:any)=>{
                 handleActiveLink(e)
                 youtubeActions.isSearching(true)
                 youtubeActions.globalSearch({q:e.target.dataset.q ,part:"snippet,id",regionCode:'US',order:'date',type:'video',maxResults:200})
                 youtubeActions.setActiveSearch(e)
                 }} className="sidebar__link" to={new Links().withSidebar.home}><span className="sidebar-expand__icon-circle"><SiYoutubemusic /></span> Music</Link>
             <Link data-q="Sports" onClick={(e:any)=>{
                 handleActiveLink(e)
                 youtubeActions.isSearching(true)
                 youtubeActions.globalSearch({q:e.target.dataset.q ,part:"snippet,id",regionCode:'US',order:'date',type:'video',maxResults:200})
                 youtubeActions.setActiveSearch(e)
                 }} className="sidebar__link" to={new Links().withSidebar.home}><span className="sidebar-expand__icon-circle"><ImTrophy /></span> Sports</Link>
             <Link data-q="Gaming" onClick={(e:any)=>{
                 handleActiveLink(e)
                 youtubeActions.isSearching(true)
                 youtubeActions.globalSearch({q:e.target.dataset.q ,part:"snippet,id",regionCode:'US',order:'date',type:'video',maxResults:200})
                 youtubeActions.setActiveSearch(e)
                 }} className="sidebar__link" to={new Links().withSidebar.home}><span className="sidebar-expand__icon-circle"><SiYoutubegaming /></span> Gaming</Link>
             <Link  data-q="Movies" onClick={(e:any)=>{
                 handleActiveLink(e)
                 youtubeActions.isSearching(true)
                 youtubeActions.globalSearch({q:e.target.dataset.q ,part:"snippet,id",regionCode:'US',order:'date',type:'video',maxResults:200})
                 youtubeActions.setActiveSearch(e)
                 }} className="sidebar__link" to={new Links().withSidebar.home}><span className="sidebar-expand__icon-circle"><MdLocalMovies /></span> Movies</Link>
             <Link data-q="News" onClick={(e:any)=>{
                 handleActiveLink(e)
                 youtubeActions.isSearching(true)
                 youtubeActions.globalSearch({q:e.target.dataset.q ,part:"snippet,id",regionCode:'US',order:'date',type:'video',maxResults:200})
                 youtubeActions.setActiveSearch(e)
                 }} className="sidebar__link" to={new Links().withSidebar.home}><span className="sidebar-expand__icon-circle"><BiNews /></span> News</Link>
             <Link data-q="Live" onClick={(e:any)=>{
                 handleActiveLink(e)
                 youtubeActions.isSearching(true)
                 youtubeActions.globalSearch({q:e.target.dataset.q ,part:"snippet,id",regionCode:'US',order:'date',type:'video',maxResults:200})
                 youtubeActions.setActiveSearch(e)
                 }} className="sidebar__link" to={new Links().withSidebar.home}><span className="sidebar-expand__icon-circle"><FaSatellite /></span> Live</Link>
             <Link data-q="360° Video" onClick={(e:any)=>{
                 handleActiveLink(e)
                 youtubeActions.isSearching(true)
                 youtubeActions.globalSearch({q:e.target.dataset.q ,part:"snippet,id",regionCode:'US',order:'date',type:'video',maxResults:200})
                 youtubeActions.setActiveSearch(e)
                 }} className="sidebar__link" to={new Links().withSidebar.home}><span className="sidebar-expand__icon-circle"><MdVideocam /></span> 360° Video</Link>
             <hr />
             <Link onClick={(e:any)=>{handleActiveLink(e)}} className="sidebar__link" to={new Links().withSidebar.browseChannels}><IoIosAddCircleOutline />Browse channels</Link>
             <hr />
             <h3>MORE FROM YOUTUBE</h3>
             <Link onClick={(e:any)=>{handleActiveLink(e)}} className="sidebar__link" to={new Links().withSidebarFixed.ytPremium}><SiYoutube />YouTube Promium</Link>
             <Link onClick={(e:any)=>{
                 youtubeActions.channelDetails({part:'snippet,statistics,brandingSettings',channelId:'UC4R8DWoMoI7CAwX8_LjQHig'})
                 youtubeActions.channelVideos({channelId:'UC4R8DWoMoI7CAwX8_LjQHig',part:'snippet,id',order:'date',maxResults:50})
                 youtubeActions.playlistVideos({channelId:'UC4R8DWoMoI7CAwX8_LjQHig',part:'snippet,contentDetails,id',maxResults:50})
                 handleActiveLink(e)
                 }} className="sidebar__link" to={new Links('UC4R8DWoMoI7CAwX8_LjQHig').withSidebar.channelDetails}><CgMediaLive />Live</Link>
             <hr />
             <a onClick={(e:any)=>{handleActiveLink(e)}} className="sidebar__link" href="https://accounts.google.com/ServiceLogin/signinchooser?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252Faccount%253Fpbjreload%253D102%26feature%3Dredirect_login&hl=en&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><RiSettings4Line />Settings</a>
             <Link onClick={(e:any)=>{handleActiveLink(e)}} className="sidebar__link" to={new Links().withSidebar.reportHistory}><BsFlag />Report History</Link>
             <Link onClick={(e:any)=>{handleActiveLink(e)}} className="sidebar__link" to="#"><IoIosHelpCircleOutline />Help</Link>
             <Link onClick={(e:any)=>{handleActiveLink(e)}} className="sidebar__link" to="#"><MdOutlineFeedback />Send Feedback</Link>
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
        </div>
            {renderThin()}

    </React.Fragment>
    )
}

export default SidebarFixed
