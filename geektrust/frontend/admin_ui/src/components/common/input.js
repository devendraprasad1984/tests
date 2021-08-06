import React from 'react'

const Input = props => {
    const {type, name, label, onchange, placeholder, format, classname,value} = props
    const ifDateFormat = format !== undefined ? {"data-date-format": format} : {}
    const isCheckBox = (type === 'checkbox')
    let ifPlacehollder = {}
    if (placeholder !== undefined)
        ifPlacehollder = {"placeholder": placeholder}
    if (isCheckBox)
        ifPlacehollder = {"value": placeholder}

    return <div className='col v-space'>
        {isCheckBox ? null : <span className='label'>{label}</span>}
        <div className={`row ${!isCheckBox ? 'input-border':''}`}>
            <input
                onChange={onchange}
                name={name}
                type={type || 'text'}
                {...ifDateFormat}
                {...ifPlacehollder}
                className={classname}
                value={value}
            />
            {isCheckBox && placeholder!==undefined ? <span className='label'>{placeholder}</span>:null}
        </div>
    </div>
}

export default Input
