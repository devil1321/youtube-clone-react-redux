import { combineReducers } from "redux";
import youtubeReducer from './youtubeReducer'
import uiReducer  from "./uiReducer";
const reducers = combineReducers({
    youtubeAPI:youtubeReducer,
    UI:uiReducer
})

export default reducers

export type State = ReturnType<typeof reducers>