import React, {useState} from 'react'
import HeaderName from "./headerName";
import Input from "../common/input";
import {config} from "../common/config";
import {useHistory} from "react-router-dom";

const SignUp = props => {
    const [meta, setMeta] = useState()
    const history = useHistory()
    const {name, dob, phone, email, password, confirmPassword, signup, login, subscribe} = config.labels

    const handleChange = e => {
        let {name, value} = e.target
        let tmp = {}
        tmp[name] = value
        setMeta({...meta, ...tmp})
    }
    const handleSignUp = () => {
        console.log('meta signup', meta)
    }
    const handleLogin = () => {
        history.push(config.route.login.key)
    }
    return <>
        <div className='col'>
            <HeaderName/>
            <div className='heading'>Sign Up</div>
            <Input label={name.name} name={name.key} placeholder={name.placeholder} onchange={handleChange}/>
            <Input label={phone.name} name={phone.key} placeholder={phone.placeholder} onchange={handleChange}/>
            <Input type='date' format='MM-DD-YYYY' label={dob.name} name={dob.key} placeholder={dob.placeholder} onchange={handleChange}/>
            <Input label={email.name} name={email.key} placeholder={email.placeholder} onchange={handleChange}/>
            <Input type='password' label={password.name} name={password.key} placeholder={password.placeholder} onchange={handleChange}/>
            <Input type='password' label={confirmPassword.name} name={confirmPassword.key} placeholder={confirmPassword.placeholder} onchange={handleChange}/>
            <br/>
            <Input type='checkbox' label={subscribe.name} name={subscribe.key} placeholder={subscribe.placeholder} onchange={handleChange}/>
            <br/>
            <span className='btn' onClick={handleSignUp}>{signup.name}</span>
            <div>
                <span>already a user? <span className='link labelx' onClick={handleLogin}>{login.name}</span></span>
            </div>
        </div>
    </>
}

export default SignUp
