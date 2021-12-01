import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

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


const Sidebar = () => {
    const [isThin,setIsThin] = useState<boolean>(false)

    return (
        <div className="sidebar">
            <div className="sidebar__header" onClick={()=>{setIsThin(!isThin)}}>
                <button>
                    <GiHamburgerMenu />
                </button>
                <div className="sidebar__header-logo">
                    <img src="/assets/main-logo.svg" alt="logo" />
                    {isThin && <hr />}
                </div>
            </div>
            {!isThin 
                ? <div className="sidebar-expand">
                    <Link to="#"><MdHomeFilled />Home</Link>
                    <Link to="#"><FaRegCompass />Explore</Link>
                    <Link to="#"><MdSubscriptions />Subscriptions</Link>
                    <hr />
                    <Link to="#"><MdOutlineVideoLibrary />Library</Link>
                    <Link to="#"><VscHistory />History</Link>
                    <hr />
                    <p>Sign in to like videos, comment, and subscribe.</p>
                    <button><BsPerson />SIGN IN</button>
                    <hr />
                    <h3>BEST OF YOUTUBE</h3>
                    <Link to="#"><span className="sidebar-expand__icon-circle"><SiYoutubemusic /></span> Music</Link>
                    <Link to="#"><span className="sidebar-expand__icon-circle"><ImTrophy /></span> Sports</Link>
                    <Link to="#"><span className="sidebar-expand__icon-circle"><SiYoutubegaming /></span> Gaming</Link>
                    <Link to="#"><span className="sidebar-expand__icon-circle"><MdLocalMovies /></span> Movies</Link>
                    <Link to="#"><span className="sidebar-expand__icon-circle"><BiNews /></span> News</Link>
                    <Link to="#"><span className="sidebar-expand__icon-circle"><FaSatellite /></span> Live</Link>
                    <Link to="#"><span className="sidebar-expand__icon-circle"><MdVideocam /></span> 360° Video</Link>
                    <hr />
                    <Link to="#"><IoIosAddCircleOutline />Browse channels</Link>
                    <hr />
                    <h3>MORE FROM YOUTUBE</h3>
                    <Link to="#"><SiYoutube />YouTube Promium</Link>
                    <Link to="#"><CgMediaLive />Live</Link>
                    <hr />
                    <Link to="#"><RiSettings4Line />Settings</Link>
                    <Link to="#"><BsFlag />Report History</Link>
                    <Link to="#"><IoIosHelpCircleOutline />Help</Link>
                    <Link to="#"><MdOutlineFeedback />Send Feedback</Link>
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
                : <div className="sidebar-thin">
                    <Link to="#"><MdHomeFilled />Home</Link>
                    <Link to="#"><FaRegCompass />Explore</Link>
                    <Link to="#"><MdSubscriptions />Subscriptions</Link>
                    <Link to="#"><MdOutlineVideoLibrary />Library</Link>
                    <Link to="#"><VscHistory />History</Link>
                  </div>}
        </div>
    )
}

export default Sidebar
