import React from 'react'
import style from "./UserContainer.module.css";

function UserContainer({ name, email, pin, addr, mcolor, pcolor, lcolor, acolor }) {
    return (
        <div className={style.address}>
            <div className={style.aplha}>
                <div className={style.a} style={{ backgroundColor: mcolor }}>M</div>
                <div className={style.a} style={{ backgroundColor: pcolor }}>P</div>
                <div className={style.a} style={{ backgroundColor: lcolor }}>L</div>
                <div className={style.a} style={{ backgroundColor: acolor }}>A</div>
            </div>
            <div className={style.details}>
                <h3 className={style.name}>{name}</h3>
                <p className={style.email}>{email}</p>
                <p className={style.pin}>{pin}</p>
                <p className={style.add}>{addr}</p>
            </div>
        </div>
    )
}

export default UserContainer
