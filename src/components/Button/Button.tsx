import React from 'react';
import s from "./Button.module.css"


//
// const BootstrapButton = styled(Button)({
//     backgroundColor: '#3a165c',
//     '&:hover': {
//         backgroundColor: '#6b35ab',
//     },
// });

type PropsButton = {
    title: string,
    onClick?: any,
    pathToPage?: string
}
const MyButton = ({...props}: PropsButton) => {

    return (
        <button onClick={props.onClick} className={s.button}>
            <span className={s.button__text}>{props.title}</span>
        </button>
    );
};

export default MyButton;