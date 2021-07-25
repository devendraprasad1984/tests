import React from 'react'
import {config} from '../common/config'
import {useHistory} from 'react-router-dom'

const Splash = (props) => {
    const history=useHistory()

    const handleClick=(route)=>{
        history.push(route)
    }
    return <>
        <div className='bg page-container center flexbox'>
            <div className='col'>
                <span className='apptext'>{config.appName}</span>
                <span>{config.labels.splashMsg.name}</span>
                <span className='btn' onClick={()=>handleClick('home')}>{config.labels.login.name}</span>
                <span className='link' onClick={()=>handleClick('signup')}>{config.labels.signup.name}</span>
            </div>
        </div>
    </>
}

export default Splash
