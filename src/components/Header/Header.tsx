import React from 'react';
import s from './Header.module.css'


const Header = () => {
    return (
        <div className={s.header}>
            <h1 className={s.title}>Oblíbene weby</h1>
        </div>
    );
};

export default Header;