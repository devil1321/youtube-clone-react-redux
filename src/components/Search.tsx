import React,{ useState,useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { State } from '../APIController/reducers'
import { bindActionCreators } from 'redux'
import * as YoutubeActions from '../APIController/actions-creators/youtubeActions'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { BsSearch, BsPerson } from 'react-icons/bs'
import { FaMicrophone, FaYoutube } from 'react-icons/fa'
import { GrApps } from 'react-icons/gr'
import { VscSettings } from 'react-icons/vsc'
import { GiHamburgerMenu } from 'react-icons/gi'
import { SiYoutubemusic } from 'react-icons/si'
import { FiYoutube,FiChevronLeft,FiChevronRight } from 'react-icons/fi'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
// step tag 6
const Search:React.FC = () => {

    const dispatch = useDispatch()
    const youtubeActions = bindActionCreators(YoutubeActions,dispatch)




    const [tagMove,setTagMove] = useState<number>(0)
    const [isThin,setIsThin] = useState<boolean>(true)
    const [isAppsOpen,setIsAppsOpen] = useState<boolean>(false)
    const [tags,setTags] = useState<string[]>([
        'All',
        'Kygo',
        'Live',
        'Woodworking',
        'Comedies',
        'Balls',
        'History',
        'Deep House',
        'Playlists',
        'Chill-out music',
        'Comedy',
        'Driving',
        'Music',
        'Fireplaces',
        'Bossa Nova',
        'Christmas Music',
        'Dance music',
        'Gaming',
        'Recently Uploaded'
    ])
    const handleThin = ():void =>{
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
    const handleActiveTag = (e:any):void =>{
        const tags = document.querySelectorAll('.search__tag')
        tags.forEach(tag => tag.classList.remove('active'))
        e.target.classList.add('active')
    }
    const handleNextTag = ():void =>{
        const tag = document.querySelector('.search__tag') as HTMLDivElement
        const tagsWrapper = document.querySelector('.search__tags') as HTMLDivElement
        const width = tag.clientWidth 
        const tl = gsap.timeline()
        if(tagMove > tagsWrapper.clientWidth * (-1)){
            tl.to('.search__tags',{x:`-=${width * 6}`,duration:1})
            setTagMove(tagMove - (width * 6))
        }else{
            tl.to('.search__tags',{transform:`translateX(${-tagsWrapper.clientWidth}px)`,duration:1})
            setTagMove(tagsWrapper.clientWidth)
        }
    }

    const handlePrevTag = ():void =>{
        const tag = document.querySelector('.search__tag') as HTMLDivElement

        const width = tag.clientWidth + 20
        const tl = gsap.timeline()
        if(tagMove < -600){
            tl.to('.search__tags',{x:`+=${width * 6}`,duration:1})
            setTagMove(tagMove + (width * 6))
        }else{
            tl.to('.search__tags',{transform:`translateX(${0}px)`,duration:1})
            setTagMove(0)
        }

    }

    const renderTags = () =>{
        return tags.map((tag:string,index:number) => (
            <div onClick={(e)=>{ 
                youtubeActions.search({q:tag})
                handleActiveTag(e)
            }}  className={`search__tag ${index === 0 ? "active" : null}`}>{tag}</div>
        ))
    }

    useEffect(()=>{
        youtubeActions.search({q:'All'})
    },[])
  
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
            <div className="search__tags-wrapper">
                {tagMove < 0 && <div className="search__tag-btn prev" onClick={()=>{handlePrevTag()}}><FiChevronLeft /></div>}
                {tagMove > -900 && <div className="search__tag-btn next"onClick={()=>{handleNextTag()}}><FiChevronRight /></div>}
                <div className="search__tags">
                    {renderTags()}
                </div>
            </div>
        </div>
    )
}

export default Search
