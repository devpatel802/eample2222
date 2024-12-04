import React from 'react';
import right from "../../assets/right-side.svg";
import style from "./ItemContainer.module.css";

function ItemContainer({ title, des, date, ago, city, containerColor, circleColor }) {
    return (
        <div className={style.container}>
            <div className={style.color} style={{ backgroundColor: containerColor }}></div>
            <div className={style.main}>
                <h4>{title}</h4>
                <p className={style.des}>{des}</p>
                <div className={style.bottom}>
                    <p className={style.date}>
                        {date}
                        <img src={right} alt="side" />
                        {ago} days ago
                    </p>
                    <div
                        style={{
                            width: '10px',
                            height: '10px',
                            backgroundColor: circleColor,
                            borderRadius: '50%',
                            margin: '0px 5px'
                        }}
                    />
                    <p> {city} (unit) </p>
                </div>
            </div>
        </div >
    )
}

export default ItemContainer
