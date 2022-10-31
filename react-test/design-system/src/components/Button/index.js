import React from "react";
import buttonStyles from './button.module.css'

const Button = props => {
    return <>
        <button className={buttonStyles.button} onClick={props.onClick}>{props.children}</button>
    </>
}
export default Button