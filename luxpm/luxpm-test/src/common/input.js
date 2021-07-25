import React from 'react'

const Input = props => {
    const {type, name, label, onchange, placeholder} = props

    return <div className='col v-space'>
        <span className='label'>{name}</span>
        <div className='row input-border'>
            <input
                onChange={onchange}
                name={'_' + name}
                type={type || 'text'}
                placeholder={placeholder || ''}
            />
        </div>
    </div>
}

export default Input
