import React from 'react';
import Button from "../Button/Button";
import s from "./DialogModal.module.css";

type DialogModalPropsType = {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const DialogModal: React.FC<DialogModalPropsType> = ({ visible, setVisible }) => {
    const rootClasses = [s.dialog];
    if (visible) {
        rootClasses.push(s.active);
    }

    if (!visible) {
        return null;
    }

    return (
        <div className={rootClasses.join("")}>
            <div className={s.dialog__body}>
                <div className={s.dialog__content}>
                    <h2 className={s.dialog__title}>Invalid Input</h2>
                    <p>Bohužel alespoň jedna vstupní hodnota je neplatná</p>
                    <p>Zkontrolujte prosím všechny vstupy a ujistěte se, že jste do každého vstupního pole zadali alespoň
                        několík znaků</p>
                    <div className={s.dialog__btn}>
                        <Button title={"Potvrdit"} onClick={() => setVisible(false)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DialogModal;
