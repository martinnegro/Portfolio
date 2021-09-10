import React from 'react';
import style from './PortfolioCards.module.scss'

export default function PortfolioCards({ site }) {
    const { site_name, site_description, site_image } = site;

    return (
        <div 
            className={style.container}
        >
            <img alt={site_name} src={site_image}/>
            <div className={style.infoContainer}>
                <h2>{site_name}</h2>
                <p>{site_description}</p>
            </div>
        </div>
    )
}
