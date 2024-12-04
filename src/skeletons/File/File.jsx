import React from 'react'
import style from "./File.module.css";
import { fileData } from '../../Data/FileData';

function File() {
    return (
        <div className={style.file_container}>
            <header className={style.fileHeader}>
                <h4 className={style.head}>Name</h4>
                <h4 className={style.head}>File type</h4>
            </header>
            <header className={style.subHead}>
                <h6 className={`${style.head} ${style.title}`}>25 Char Limit</h6>
                <h6 className={`${style.head} ${style.title}`} style={{ marginRight: "15px", color: "#667085" }}>PDF</h6>
            </header>

            {/* data  */}
            {fileData.map(file => (
                <div className={style.data} style={{ marginBottom: "10px", paddingBottom: "10px" }}>
                    <p className={`${style.head} ${style.ellipsis}`}>{file.name}</p>
                    <h6 style={{ marginRight: "0px", color: "#667085" }}>PDF / {file.size} GB</h6>
                </div>
            ))}
        </div >
    )
}

export default File;