import React, {ChangeEvent, ReactNode} from 'react';
import s from './Input.module.css';

type InputType = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    value: number
    error?: string
    styles?: any
    color?: any
}

export const Input:React.FC<InputType> = (props) => {

    const {onChange, value, color, ...otherProps} = props

    const finalInputClassName = `
    ${s.input}
    ${color === 'error' ? s.error : ''}
    `

    return (
        <div>
            <input
                /*style={{border: props.styles ? '1px solid red' : '1px solid black'}}*/
                type={"number"}
                onChange={props.onChange}
                value={props.value}
                className={finalInputClassName}
            />
        </div>
    );
};

