import { UIState } from '../interfaces'
import { UIActionTypes } from '../types'

const initData:UIState = {
    isMobile:false,
    activeLink:0
}


export default (state = initData ,action:any) =>{
    switch(action.type){
        case UIActionTypes.HandleSetContainersAndHideElements:
            return {
                ...state,
            }
        case UIActionTypes.HideTags:
            return {
                ...state,
            }
        case UIActionTypes.HanldeTab:
            return {
                ...state,
            }
        case UIActionTypes.HandleActiveLink:
            return {
                ...state,
                activeLink:action.activeLink
            }
        case UIActionTypes.IsMobile:
            return {
                ...state,
                isMobile:action.isMobile
            }
        default:
            return{
                ...state
            }

    }
}