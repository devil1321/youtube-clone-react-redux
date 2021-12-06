import { UIActionTypes } from '../types'

const initData = {}


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
        default:
            return{
                ...state
            }

    }
}