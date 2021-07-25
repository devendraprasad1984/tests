import React, {useState} from 'react'
import HeaderName from "./headerName";
import Input from "../common/input";
import {config, notifyMe} from "../common/config";
import {useHistory} from 'react-router-dom'

const {email, password, signup, login} = config.labels
const defaults = {
    [email.key]: '',
    [password.key]: ''
}
const Login = props => {
    const [meta, setMeta] = useState({...defaults})
    const history = useHistory()

    const handleChange = e => {
        let {name, value} = e.target
        let tmp = {}
        tmp[name] = value
        setMeta({...meta, ...tmp})
    }
    const handleLogin = () => {
        // console.log('meta login', meta)
        let username = meta[email.key]
        let pwd = meta[password.key]
        if (username === '' || pwd === '') {
            notifyMe(config.app_messages.missing_input)
            return
        }
        if (username !== config.defaultUserName || pwd !== config.defaultPassword) {
            notifyMe(config.app_messages.failed_login)
            return
        }
        notifyMe(config.app_messages.success_login)
    }
    const handleSignup = () => {
        history.push(config.route.signup.key)
    }
    return <>
        <div className='col'>
            <HeaderName/>
            <div className='heading margin30'>LOGIN</div>
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
