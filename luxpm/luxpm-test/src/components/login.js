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
        history.push(config.route.signup)
    }
    return <>
        <div className='col'>
            <HeaderName/>
            <div>LOGIN</div>
            <Input name={config.labels.email.name} placeholder={config.labels.email.placeholder}
                   onchange={handleChange}/>
            <Input name={config.labels.password.name} onchange={handleChange}/>
            <span className='btn' onClick={handleLogin}>{config.labels.login}</span>
            <span className='link' onClick={handleSignup}>{config.labels.signup}</span>
        </div>
    </>
}
export default Login
