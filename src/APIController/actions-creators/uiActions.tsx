import { Dispatch } from 'redux'
import { UIActionTypes } from '../types'

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