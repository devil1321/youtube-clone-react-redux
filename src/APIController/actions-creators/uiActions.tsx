import { Dispatch } from 'redux'
import { UIActionTypes } from '../types'
import { gsap } from 'gsap'

export const handleSetContainersAndHideElements = () => (dispatch:Dispatch):void =>{
    const container = document.querySelector('.container') as HTMLDivElement
    const containerInner = document.querySelector('.container-inner') as HTMLDivElement
    const tagsWrapper = document.querySelector('.search__tags-wrapper') as HTMLDivElement
    container.style.width = '100%'
    containerInner.style.width = '100%'
    tagsWrapper.style.display = 'none'
    dispatch({
        type:UIActionTypes.HandleSetContainersAndHideElements
    })
}
export const handleHideTags= () => (dispatch:Dispatch):void =>{
    const tagsWrapper = document.querySelector('.search__tags-wrapper') as HTMLDivElement
    tagsWrapper.style.display = 'none'
    dispatch({
        type:UIActionTypes.HideTags
    })
}
export const handleActiveLink = (link:number) => (dispatch:Dispatch):void =>{
    dispatch({
        type:UIActionTypes.HandleActiveLink,
        activeLink:link
    })
}
export const handleActiveLinkThin = (link:number) => (dispatch:Dispatch):void =>{
    dispatch({
        type:UIActionTypes.HandleActiveLinkThin,
        activeLinkThin:link
    })
}
export const handleTab = (e:any,tabSelector:string) => (dispatch:Dispatch) =>{
    const tl = gsap.timeline()
    const links = document.querySelectorAll('.channel-details__tab-link') as NodeListOf<HTMLHeadingElement>
    links.forEach(link => link.classList.remove('active'))
    e.target.classList.add('active')
    const tabs = document.querySelectorAll(`.${tabSelector}`) as NodeListOf<HTMLDivElement>
    const tab = document.getElementById(`${e.target.dataset.tab}`) as HTMLDivElement
    tabs.forEach(tab => tab.classList.remove('active'))
    tab.classList.add('active')
    tl.fromTo(tab,{opacity:0},{opacity:1,duration:0.3})
    dispatch({
        type:UIActionTypes.HanldeTab
    })
}
export const isMobile = () => (dispatch:Dispatch)=>{
    function detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];
        
        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }
    const isMobile = detectMob()
    dispatch({
        type:UIActionTypes.IsMobile,
        isMobile:isMobile
    })
}

export const isSidebarThin = (state:boolean) => (dispatch:Dispatch):void =>{
    dispatch({
        type:UIActionTypes.IsSidebarThin,
        isSidebarThin:state
    })
}

