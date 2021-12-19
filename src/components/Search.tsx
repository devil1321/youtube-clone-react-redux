import React,{ useState,useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { State } from '../APIController/reducers'
import { bindActionCreators } from 'redux'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import * as UIActions from '../APIController/actions-creators/uiActions'
import { Link , useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { BsSearch, BsPerson } from 'react-icons/bs'
import { FaMicrophone, FaYoutube } from 'react-icons/fa'
import { GrApps } from 'react-icons/gr'
import { VscSettings } from 'react-icons/vsc'
import { GiHamburgerMenu } from 'react-icons/gi'
import { SiYoutubemusic } from 'react-icons/si'
import { FiYoutube,FiChevronLeft,FiChevronRight } from 'react-icons/fi'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Links } from '../routes'

const Search:React.FC = () => {

    const dispatch = useDispatch()
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)
    const UI = bindActionCreators(UIActions,dispatch)
    const { isMobile,isSidebarThin } = useSelector((state:State) => state.UI)
    const { videoCategories } = useSelector((state:State) => state.youtubeAPI)

    const location = useLocation()
    const path = location.pathname

    const [isLoad,setIsLoad] = useState<boolean>(false)
    const [isAppsOpen,setIsAppsOpen] = useState<boolean>(false)

   
    const handleSidebarFixed = () =>{
        const sidebar = document.querySelector('.sidebar.fixed') as HTMLDivElement
        const sidebarFixedWrapper = document.querySelector('.sidebar-fixed-wrapper') as HTMLDivElement
        if(sidebar.classList.contains('close')){
            sidebar.classList.add('open')
            sidebar.classList.remove('close')
            sidebarFixedWrapper.classList.add('open')
            sidebarFixedWrapper.classList.remove('close')
            
        }
    }

    const handleThinAction = () =>{
        for(let route in new Links().withSidebar){
                if(path === '/'){
                    handleThin(isSidebarThin)
                }else if(path === new Links().withSidebar[route] && !isMobile){
                    handleThin(isSidebarThin)
                }else if(path === new Links().withSidebar[route] && isMobile){
                    handleSidebarFixed()
                }else if(path.slice(0,16) === '/channel-details'){
                    handleThin(isSidebarThin)
                }
            }
        
           
    }


    const handleThin = (isThin:boolean):void =>{
        const sidebar = document.querySelector('.sidebar') as HTMLDivElement
        const sidebarExpand = document.querySelector('.sidebar-expand') as HTMLDivElement
        const sidebarThin = document.querySelector('.sidebar-thin') as HTMLDivElement
        const containerInner = document.querySelector('.container-inner') as HTMLDivElement
        const tags = document.querySelector('.search__tags-wrapper') as HTMLDivElement
        if(isThin){
            sidebar.style.width = 'calc(6% + 10px)'
            containerInner.style.width= '92%'
            sidebarExpand.style.display = 'none'
            if(isMobile){
                sidebarExpand.style.display = 'block'
            }
            if(sidebarThin){
                sidebarThin.style.display = 'block'
            }
            tags.style.width = '92%'

        }else{
            sidebar.style.width = '20%'
            containerInner.style.width = '80%'
            sidebarExpand.style.display = 'block'
            sidebarThin.style.display = 'none'
            tags.style.width = '79.5%'

        }
    }
    const handleSidebarActivePaths = () =>{
        for(let route in new Links().withSidebar){
            if(path === '/'){
                UI.isSidebarThin(!isSidebarThin)
            }else if(path === new Links().withSidebar[route] && !isMobile){
                UI.isSidebarThin(!isSidebarThin)
            }else if(path.slice(0,16) === '/channel-details'){
                UI.isSidebarThin(!isSidebarThin)
            }
        }
    }
    const handleActiveTag = (e:any):void =>{
        const tags = document.querySelectorAll('.search__tag')
        tags.forEach(tag => tag.classList.remove('active'))
        e.target.classList.add('active')
    }

    const renderTags = () =>{
        
        return videoCategories?.items?.map((tag:any,index:number) => {
            const { id } = tag
            const { title } = tag.snippet
            return(
                <SwiperSlide><div onClick={(e)=>{ 
                    youtubeActions.isSearching(false)
                    youtubeActions.getVideos({part:'id,snippet',chart:'mostPopular',videoCategoryId:id,regionCode:'US',maxResults:50})
                    handleActiveTag(e)
                }}  className={`search__tag ${index === 0 ? "active" : null}`}>{title}</div></SwiperSlide>
            )
        })
    }


    useEffect(()=>{
        if(!isMobile){
            handleThinAction()
        }else{
            handleThin(true)
        }
        if(!isLoad){  
           
            youtubeActions.videoCategories({part:'snippet',regionCode:'US'})
            setIsLoad(true)
      }
    },[isSidebarThin,isMobile])
    return (
        <div className="search">
            <div className="search__header">
                <button  onClick={()=>{
                        if(!isMobile){
                            handleSidebarActivePaths()
                        }else{
                            handleSidebarFixed()
                        }
                    }}>
                    <GiHamburgerMenu />
                </button>
                <div className="search__header-logo">
                    <Link to="/">
                        <img src="/assets/main-logo.svg" alt="logo" />
                    </Link>
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
            <div className="search__tags-wrapper">
                <div className="search__tags">
                <Swiper
                                // install Swiper modules
                    spaceBetween={0}
                    slidesPerView={window.innerWidth < 1024 ?  window.innerWidth < 768 ? 3 : 6 : 9}
                >
                    {renderTags()}
                </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Search
