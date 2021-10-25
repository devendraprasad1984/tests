import {combineReducers} from "redux";
import authReducer from "./auth";
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    authReducer,
    form: formReducer
})