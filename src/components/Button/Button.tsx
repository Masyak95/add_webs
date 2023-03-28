import React from 'react';
import s from "./Button.module.css"

type PropsButton = {
    title: string,
    onClick?: any,
    pathToPage?: string
    newClass?: string
}
const MyButton = ({...props}: PropsButton) => {

    return (
        <button onClick={props.onClick} className={`${s.button} ${props.newClass}`}>
            <span className={s.button__text}>{props.title}</span>
        </button>
    );
};

export default MyButton;