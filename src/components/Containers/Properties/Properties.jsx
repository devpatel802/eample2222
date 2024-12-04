import React, { useState } from 'react'
import style from "./Properties.module.css";
import MainCon from '../../../skeletons/MainCon/MainCon';
import PropertyList from '../../../skeletons/PropertyList/PropertyList';
import { propertyList } from '../../../Data/Property_details';
import PortfolioList from '../../../skeletons/PortfolioList/PortfolioList';
import { portfolioList } from '../../../Data/PortFolioList';

function Properties() {
    const [activeTab, setActiveTab] = useState('Property list');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <MainCon>
            {/* Properties and Portfolios */}
            <h3 className={style.propertylist}>Properties and Portfolios</h3>
            {/* Tabs - Property list || Portfolio list */}
            <div className={style.tab}>
                <button
                    className={`${style.tabButton} ${activeTab === 'Property list' ? style.active : ''}`}
                    onClick={() => handleTabClick('Property list')}
                >
                    Property list
                </button>
                <button
                    className={`${style.tabButton} ${activeTab === 'Portfolio list' ? style.active : ''}`}
                    onClick={() => handleTabClick('Portfolio list')}
                >
                    Portfolio list
                </button>
            </div>

            {/* Addresses */}



            <div className="tab-content">
                {activeTab === 'Property list' && (

                    propertyList.map(property => (
                        <PropertyList
                            title={property.title}
                            des={property.des}
                        />
                    ))

                )}

                {activeTab === 'Portfolio list' && (

                    portfolioList.map(portfolio => (
                        <PortfolioList title={portfolio.title} />
                    ))
                )}
            </div>
        </MainCon >
    )
}

export default Properties
