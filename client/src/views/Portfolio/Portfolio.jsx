import React from 'react'
import PortfolioCards from './components/PortfolioCards';
import style from './Portfolio.module.scss';

const sites = [
    {
        site_name: 'WheatherApp',
        site_description: "One of my first projects as a Full Stack Dev student.",
        site_image: "https://i.ibb.co/cxcTLrT/screenshot1.png",
        site_link: 'https://martinnegro-weatherapp.netlify.app'
    },{
        site_name: 'Psitesis',
        site_description: 'En Psitesis encontrarás ARTICULOS escritos por COLABORADORES expertos en la contrucción de tesis.\
                            Si seguís con dudas podés escribir en el FORO, donde encontrarás otros colegas que puedan ayudarte.',
        site_image: "https://i.postimg.cc/Zqyn2HYn/screenshot.png",
        site_link: 'https://psitesis.netlify.app'
    },{
        site_name: 'Videogames',
        site_description: '',
        site_image: '',
        site_link: ''
    },{
        site_name: 'WheatherApp',
        site_description: '',
        site_image: '',
        site_link: ''
    }
];

function Portfolio() {
    return (
        <div className={style.container}>
            {
                sites ? 
                sites.map(site => (
                    <PortfolioCards
                        site={site}
                    />
                ))
                : null
            }
            
        </div>
    )
}

export default Portfolio
