import React from 'react'

const Input = props => {
    const {type, name, label, onchange, placeholder, format} = props
    const ifDateFormat = format !== undefined ? {"data-date-format": format} : {}

    return <div className='col v-space'>
        <span className='label'>{label}</span>
        <div className='row input-border'>
            <input
                onChange={onchange}
                name={name}
                type={type || 'text'}
                {...ifDateFormat}
                placeholder={placeholder || ''}
            />
        </div>
    </div>
}

export default Input
