import React from 'react';
import s from './Button.module.css';

type ButtonType = {
    onClick: ()=> void
    color?: string
    children?: React.ReactNode
    disabled?: boolean
}

const Button:React.FC<ButtonType> = (props) => {

    const {onClick, color, children, disabled, ...otherProps} = props

    const finalButtonClassName = `
    ${s.button} 
    ${color === 'blue' ? s.blue : ''}
    ${color === 'purple' ? s.purple : ''}
    ${disabled ? s.disabled : ''}
    `

    const callBackHandler = () => {
        onClick()
    }

    return (
        <div>
            <button
                onClick={callBackHandler}
                className={finalButtonClassName}>{children}</button>
        </div>
    );
};

export default Button;