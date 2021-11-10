import React, { useContext } from 'react';
import style from './Langs.module.scss';
import { LangsContext } from '../contexts/LangsContext';

function LangsButtons() {
    const {
        selectSpanish,
        selectEnglish
    } = useContext(LangsContext)

    return (
        <div className={style.container}>
            <button
                onClick={selectEnglish}
            >EN</button>
            <button
                onClick={selectSpanish}
            >ES</button>
        </div>
    )
}

export default LangsButtons;
