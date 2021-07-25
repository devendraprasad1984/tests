import React from 'react'

const Input = props => {
    const {type, name, label, onchange, placeholder} = props

    return <div className='col'>
        <span className='label'>{name}</span>
        <input onChange={onchange} name={'_'+name} type={type || 'text'} placeholder={placeholder}/>
    </div>
}

export default Input
