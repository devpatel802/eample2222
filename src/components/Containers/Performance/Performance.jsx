import React, { useState } from 'react'
import style from "./Performance.module.css";
import MainCon from '../../../skeletons/MainCon/MainCon';
import search from "../../../assets/search.svg";
import File from '../../../skeletons/File/File';
import Chart from '../../../skeletons/Chart/Chart';
import Chart1 from '../../../skeletons/Chart/Chart1';
import Chart2 from '../../../skeletons/Chart/Chart2';

function Performance() {
    const [activeTab, setActiveTab] = useState('Charts');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <MainCon>
            {/* Performance & Reports */}
            <h3 className={style.performance}>Performance & Reports</h3>

            {/* Tabs - Charts || Reports */}
            <div className={style.tab}>
                <button
                    className={`${style.tabButton} ${activeTab === 'Charts' ? style.active : ''}`}
                    onClick={() => handleTabClick('Charts')}
                >
                    Charts
                </button>
                <button
                    className={`${style.tabButton} ${activeTab === 'Reports' ? style.active : ''}`}
                    onClick={() => handleTabClick('Reports')}
                >
                    Reports
                </button>
            </div>

            {/* Charts */}

            <div className="tab-content">
                {activeTab === 'Charts' && (
                    <div>
                        <Chart />
                        <Chart1 />
                        <Chart2 />
                    </div>
                )}


                {activeTab === 'Reports' && (
                    <div>
                        {/* searchContainer */}
                        <div className={style.searchContainer}>
                            <input
                                type="text"
                                placeholder="Search"
                                className={style.reports_search}
                            />
                            <img src={search} alt="Search" className={style.searchIcon} />
                        </div>


                        {/* listof pdfs */}
                        <File />
                    </div>
                )}
            </div>
        </MainCon>
    )
}

export default Performance
