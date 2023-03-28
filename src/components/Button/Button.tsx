import React from 'react';
import s from "./Button.module.css"

type PropsButton = {
    title: string,
    onClick?: () => void,
    pathToPage?: string,
    newClass?: string
}

const MyButton: React.FC<PropsButton> = ({title, onClick, pathToPage, newClass}) => {

    return (
        <button onClick={onClick} className={`${s.button} ${newClass}`}>
            <span className={s.button__text}>{title}</span>
        </button>
    );
};

export default MyButton;
