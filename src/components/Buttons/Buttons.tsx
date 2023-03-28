import React from 'react';
import Button from "../Button/Button";
import s from "./Buttons.module.css"
import {useNavigate} from "react-router-dom";

const Buttons = () => {
    const navigate = useNavigate()

    const navigateToAdd = () => {
        navigate('/add')
    }
    const navigateToProfile = () => {
        navigate('/profile')
    }


    return (
       <div className={s.buttons} >
           <Button title={"Uložené weby"} onClick={navigateToProfile}/>
           <Button title={"Přídat web"} onClick={navigateToAdd}/>
       </div>
    );
};

export default Buttons;