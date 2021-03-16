import { combineReducers } from "redux";
import login from './login'
import drawer from './drawer'

export default (rootReducer = combineReducers({
    login,
    drawer
}));