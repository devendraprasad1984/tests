import React, {useState} from 'react'
import HeaderName from "./headerName";
import Input from "../common/input";
import {config} from "../common/config";
import {useHistory} from 'react-router-dom'

const Login = props => {
    const [meta, setMeta] = useState()
    const history = useHistory()
    const {email, password, signup, login} = config.labels


    const handleChange = e => {
        let {name, value} = e.target
        let tmp = {}
        tmp[name] = value
        setMeta({...meta, ...tmp})
    }
    const handleLogin = () => {
        console.log('meta login', meta)
    }
    const handleSignup = () => {
        history.push(config.route.signup.key)
    }
    return <>
        <div className='col'>
            <HeaderName/>
            <div className='heading'>LOGIN</div>
            <Input label={email.name} name={email.key} placeholder={email.placeholder} onchange={handleChange}/>
            <Input type='password' label={password.name} name={password.key} placeholder={password.placeholder} onchange={handleChange}/>
            <br/>
            <span className='btn' onClick={handleLogin}>{login.name}</span>
            <div>
                <span>new user? <span className='link labelx' onClick={handleSignup}>{signup.name}</span></span>
            </div>
        </div>
    </>
}
export default Login
