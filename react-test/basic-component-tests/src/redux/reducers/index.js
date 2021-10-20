import {combineReducers} from "redux";
import commentsReducer from 'redux/reducers/comments'
import authReducer from "./auth";

export default combineReducers({
    comments: commentsReducer,
    auth: authReducer
})