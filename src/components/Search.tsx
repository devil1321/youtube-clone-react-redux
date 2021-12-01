import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { BsSearch, BsPerson } from 'react-icons/bs'
import { FaMicrophone, FaYoutube } from 'react-icons/fa'
import { GrApps } from 'react-icons/gr'
import { VscSettings } from 'react-icons/vsc'
import { GiHamburgerMenu } from 'react-icons/gi'
import { SiYoutubemusic } from 'react-icons/si'
import { FiYoutube } from 'react-icons/fi'
import { TiSocialYoutubeCircular } from 'react-icons/ti'

const Search = () => {
    const [isThin,setIsThin] = useState<boolean>(true)
    const [isAppsOpen,setIsAppsOpen] = useState<boolean>(true)
    const handleThin = () =>{
        const sidebar = document.querySelector('.sidebar') as HTMLDivElement
        const sidebarExpand = document.querySelector('.sidebar-expand') as HTMLDivElement
        const sidebarThin = document.querySelector('.sidebar-thin') as HTMLDivElement
        const containerInner = document.querySelector('.container-inner') as HTMLDivElement
        const tags = document.querySelector('.search__tags') as HTMLDivElement
        if(isThin){
            sidebar.style.width = 'calc(4% + 30px)'
            containerInner.style.width = 'calc(96%-30px)'
            sidebarExpand.style.display = 'none'
            sidebarThin.style.display = 'block'
            tags.style.width = '93%'
        }else{
            sidebar.style.width = '20%'
            containerInner.style.width = '80%'
            sidebarExpand.style.display = 'block'
            sidebarThin.style.display = 'none'
            tags.style.width = '79.5%'
        }
        setIsThin(!isThin)
    }

    return (
        <div className="search">
            <div className="search__header" onClick={()=>{handleThin()}}>
                <button>
                    <GiHamburgerMenu />
                </button>
                <div className="search__header-logo">
                    <img src="/assets/main-logo.svg" alt="logo" />
                </div>
            </div>
            <div className="search__main">
                <form className="search__form" action="">
                    <div className="search__field">
                        <input type="text" />
                        <div className="search__magnifer-wrapper">
                            <BsSearch />
                        </div>
                    </div>
                </form>
                <FaMicrophone className="search__microphone" />
                <div className="search__menu">
                    <GrApps onClick={()=>{setIsAppsOpen(!isAppsOpen)}}/>
                    {isAppsOpen && 
                        <div className="search__apps-menu">
                            <Link onClick={()=>{setIsAppsOpen(false)}} to="#"><TiSocialYoutubeCircular />YouTube TV</Link>
                            <div className="search__line"></div>
                            <Link onClick={()=>{setIsAppsOpen(false)}} to="#"><SiYoutubemusic />YouTube Music</Link>
                            <Link onClick={()=>{setIsAppsOpen(false)}} to="#"><FiYoutube />YouTube Kids</Link>
                            <div className="search__line"></div>
                            <Link onClick={()=>{setIsAppsOpen(false)}} to="#"><FaYoutube />Creator Academy</Link>
                            <Link onClick={()=>{setIsAppsOpen(false)}} to="#"><FaYoutube />Youtube for Artists</Link>
                        </div>}
                    <VscSettings />
                    <button><BsPerson />Sign In</button>
                </div>
            </div>
            <div className="search__tags"></div>
        </div>
    )
}

export default Search
