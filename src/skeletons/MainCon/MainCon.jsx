import React from 'react';
import style from "./MainCon.module.css";

function MainCon({ children }) {
    return (
        <div className={style.main_container}>
            {children}
        </div>
    )
}

export default MainCon;