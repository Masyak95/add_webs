import React, {ChangeEvent} from 'react';
import s from "./Input.module.css"


type InputProps = {
    title: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void
}

const Input = ({...props}: InputProps) => {

    return (
        <div>
            <h4>{props.title}</h4>
            <input
                type={"text"} {...props} className={s.input}
            />
        </div>
    );
};

export default Input;