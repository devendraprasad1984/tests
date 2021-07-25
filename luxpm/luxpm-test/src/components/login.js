import React, {useState} from 'react'
import HeaderName from "./headerName";
import Input from "../common/input";
import {config} from "../common/config";
import {useHistory} from 'react-router-dom'

const Login = props => {
    const [meta, setMeta] = useState()
    const history = useHistory()

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
            <Input name={config.labels.email.name} placeholder={config.labels.email.placeholder}
                   onchange={handleChange}/>
            <Input name={config.labels.password.name} placeholder={config.labels.password.placeholder} onchange={handleChange}/>
            <br/>
            <span className='btn' onClick={handleLogin}>{config.labels.login.name}</span>
            <div>
                <span>new user? <span className='link labelx' onClick={handleSignup}>{config.labels.signup.name}</span></span>
            </div>
        </div>
    </>
}
export default Login
