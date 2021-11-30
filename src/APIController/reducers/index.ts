import { combineReducers } from "redux";
import youtubeReducer from './youtubeReducer'

const reducers = combineReducers({
    youtubeAPI:youtubeReducer
})

export default reducers

export type State = ReturnType<typeof reducers>