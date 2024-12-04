import React from 'react';
import style from "./PortfolioList.module.css";
import ellip from "../../assets/ellipse.svg";

function PortfolioList({ title }) {
    return (
        <div className={style.container}>
            <h4 className={style.head}>{title}</h4>
            <div className={style.three}>
                <p className={style.num}>5 <span>properties</span></p>
                <p className={style.num}>89,000 <span>properties</span></p>
                <p className={style.num}><img src={ellip} alt="ellip" /> 88%</p>
            </div>
        </div>
    )
}

export default PortfolioList
