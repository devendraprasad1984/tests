import {AUTH_USER} from "./types";
import axios from "axios";

//redux-thunk action creator
export const signup = (formProps) => {
    //allowed by redux-thunk, allows control over redux dispatch funnel process
    //can return multiple dispatches at will and at any place in app
    return (dispatch)=>{
        axios.post('http://localhost:3090/signup',formProps)
    }
}
