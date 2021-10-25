import {AUTH_ERROR, AUTH_USER} from "./types";
import axios from "axios";

//redux-thunk action creator
export const signup = (formProps,callback) => {
    //allowed by redux-thunk, allows control over redux dispatch funnel process
    //can return multiple dispatches at will and at any place in app
    return async (dispatch) => {
        try {
            const res = await axios.post('http://localhost:3090/signup', formProps)
            dispatch({type: AUTH_USER, payload: res.data.token})
            callback()
        } catch (err) {
            dispatch({type: AUTH_ERROR, payload: 'email in use'})
        }
    }
}
