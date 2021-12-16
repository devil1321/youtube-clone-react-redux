import React,{ useState,useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { State } from '../APIController/reducers'
import { bindActionCreators } from 'redux'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
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

const Search:React.FC = () => {

    const dispatch = useDispatch()
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)
    const { isMobile } = useSelector((state:State) => state.UI)
    const { videoCategories } = useSelector((state:State) => state.youtubeAPI)

    const location = useLocation()
    const path = location.pathname


    const [tagMove,setTagMove] = useState<number>(0)
    const [isThin,setIsThin] = useState<boolean>(true)
    const [isAppsOpen,setIsAppsOpen] = useState<boolean>(false)

    const handleThin = ():void =>{
        const sidebar = document.querySelector('.sidebar') as HTMLDivElement
        const sidebarExpand = document.querySelector('.sidebar-expand') as HTMLDivElement
        const sidebarThin = document.querySelector('.sidebar-thin') as HTMLDivElement
        const containerInner = document.querySelector('.container-inner') as HTMLDivElement
        const tags = document.querySelector('.search__tags-wrapper') as HTMLDivElement
        if(isThin){
            sidebar.style.width = 'calc(4% + 30px)'
            containerInner.style.width= '96%'
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
                    youtubeActions.getVideos({part:'id,snippet',chart:'mostPopular',videoCategoryId:id,regionCode:'US',maxResults:50})
                    handleActiveTag(e)
                }}  className={`search__tag ${index === 0 ? "active" : null}`}>{title}</div></SwiperSlide>
            )
        })
    }

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
    useEffect(()=>{
      youtubeActions.videoCategories({part:'snippet',regionCode:'US'})
    },[])
    return (
        <div className="search">
            <div className="search__header">
                <button  onClick={()=>{
                if(path === '/' && !isMobile){
                    handleThin()
                }
                else if(path.slice(0,16)  === "/channel-details" && !isMobile){
                    handleThin()
                }
                else{
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
                    slidesPerView={window.innerWidth < 1024 ?  window.innerWidth < 768 ? 2 : 4 : 8}
                >
                    {renderTags()}
                </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Search
