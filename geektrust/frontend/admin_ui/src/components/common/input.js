import React from 'react'

const Input = props => {
    const {type, name, label, style, onchange, onkeydown, placeholder, format, classname, value, isChecked, inputInOneLine} = props
    const ifDateFormat = format !== undefined ? {"data-date-format": format} : {}
    const isCheckBox = (type === 'checkbox')
    let ifPlacehollder = {}
    if (placeholder !== undefined)
        ifPlacehollder = {"placeholder": placeholder}
    if (isCheckBox)
        ifPlacehollder = {"value": placeholder}

    const inputObj = isChecked === true ? <input
        onChange={onchange}
        name={name}
        type={type || 'text'}
        {...ifDateFormat}
        {...ifPlacehollder}
        className={classname}
        value={value}
        checked
    /> : <input
        onChange={onchange}
        name={name}
        onKeyDown={onkeydown}
        type={type || 'text'}
        {...ifDateFormat}
        {...ifPlacehollder}
        className={classname}
        value={value}
    />


    return <div className={inputInOneLine === true ? '' : 'col v-space'}>
        {isCheckBox || inputInOneLine === true ? null : <span className='label'>{label}</span>}
        <div className={`row ${!isCheckBox ? 'input-border' : ''}`} style={style}>
            {inputObj}
            {isCheckBox && placeholder !== undefined ? <span className='label'>{placeholder}</span> : null}
        </div>
    </div>
}

export default Input
