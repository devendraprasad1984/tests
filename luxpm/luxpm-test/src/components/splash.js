import React from 'react'
import {config} from '../common/config'
import {useHistory} from 'react-router-dom'
import HeaderName from "./headerName";
import Logo from "./logo";

const Splash = (props) => {
    const history = useHistory()

    const handleClick = (route) => {
        history.push(route)
    }
    return <>
        <div className='col'>
            <HeaderName/>
            <Logo/>
            <span>{config.labels.splashMsg.name}</span>
            <span className='btn' onClick={() => handleClick(config.route.login.key)}>{config.labels.login.name}</span>
            <span className='link'
                  onClick={() => handleClick(config.route.signup.key)}>{config.labels.signup.name}</span>
        </div>
    </>
}

export default Splash
