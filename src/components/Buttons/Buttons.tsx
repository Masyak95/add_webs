import React from 'react';
import Button from "../Button/Button";
import s from "./Buttons.module.css"
import { useNavigate, useLocation } from "react-router-dom";

const Buttons = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const navigateToAdd = () => {
        navigate('/add')
    }
    const navigateToProfile = () => {
        navigate('/profile')
    }

    console.log(location.pathname)
    return (
        <div className={s.buttons} >
            <Button title={"Uložené weby"} onClick={navigateToProfile} newClass={location.pathname !== '/profile' ? `${s.active}` : `${s.buttons}`}/>
            <Button title={"Přídat web"} onClick={navigateToAdd} newClass={location.pathname !== '/add' ? `${s.active}` : `${s.buttons}`}/>
        </div>
    );
};

export default Buttons;
