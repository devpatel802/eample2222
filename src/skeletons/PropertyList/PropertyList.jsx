import React from 'react';
import style from "./PropertyList.module.css";

function PropertyList({ title, des }) {
    return (
        <div className={style.property_list}>
            <div className={style.header}>
                <h4>{title}</h4>
                <p>{des}</p>
            </div>

            <div className={style.bottom}>
                <div className={style.prefs1}>
                    <div className={style.prefs}>
                        <div
                            style={{
                                width: '10px',
                                height: '10px',
                                backgroundColor: "#C76961",
                                borderRadius: '50%',
                                margin: '0px 5px'
                            }}
                        />
                        <p>Maintenance (4)</p>
                    </div>
                    <div className={style.prefs}>
                        <div
                            style={{
                                width: '10px',
                                height: '10px',
                                backgroundColor: "#F5D654",
                                borderRadius: '50%',
                                margin: '0px 5px'
                            }}
                        />
                        <p>Property (6)</p>
                    </div>
                </div>
                <div className={style.prefs2}>
                    <div className={style.prefs}>
                        <div
                            style={{
                                width: '10px',
                                height: '10px',
                                backgroundColor: "#2BCCC4",
                                borderRadius: '50%',
                                margin: '0px 5px'
                            }}
                        />
                        <p>Leasing (4)</p>
                    </div>
                    <div className={style.prefs}>
                        <div
                            style={{
                                width: '10px',
                                height: '10px',
                                backgroundColor: "#2790AC",
                                borderRadius: '50%',
                                margin: '0px 5px'
                            }}
                        />
                        <p>Accounting (2)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyList
