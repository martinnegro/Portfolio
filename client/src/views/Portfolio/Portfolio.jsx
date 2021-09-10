import React, { useEffect, useState } from 'react'
import PortfolioCards from './components/PortfolioCards';
import style from './Portfolio.module.scss';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

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
    const [    scrollSize, setScrollSize    ] = useState(0);
    const [     pageWidth, setPageWidth     ] = useState(0);
    const [     scrollPos, setScrollPos     ] = useState(0);
    const [ positionWidth, setPositionWidth ] = useState(0);

    useEffect(()=>{
        const cardsContainer = document.getElementById('cards-container');        
        setScrollSize(cardsContainer.scrollWidth);
        const { matches } = window.matchMedia('(max-width: 40em)')
        matches ?  setPositionWidth(sites.length - 1 ) : setPositionWidth(Math.ceil(sites.length / 2) - 1);
        if (scrollSize > 0 && positionWidth > 0) setPageWidth(Math.floor(scrollSize / (positionWidth + 1)))
    },[scrollSize,positionWidth]);

    const handleScroll = (value) => {
        if (scrollPos === 0) {
            if(value === -1) return
            else setScrollPos(scrollPos + value) 
        } else if ( scrollPos === positionWidth ) {
            if(value ===  1) return 
            else setScrollPos(scrollPos + value)
        } else setScrollPos(scrollPos + value)
    }

    useEffect(()=>{
        const cardsContainer = document.getElementById('cards-container');
        cardsContainer.scrollLeft = scrollPos * pageWidth
        console.log('width: ',cardsContainer.scrollWidth);
        console.log('left:',cardsContainer.scrollLeft)
    },[scrollPos, pageWidth]);
    

    return (
        <div className={style.container}>
            <div
                className={style.arrowContainer}
                onClick={()=>handleScroll(-1)}
                style={ scrollPos === 0 ? { cursor: 'not-allowed' } : {} }
                style={{left: '20px'}}
            >
                <RiArrowLeftSLine 
                    className={style.arrow}
                />
            </div>   
            <div 
                id="cards-container"
                className={style.cardsContainer}                
            >
                {
                    sites ? 
                    sites.map((site, i) => (
                        <PortfolioCards
                            key={i}
                            site={site}
                        />
                    ))
                    : null
                }

            </div>
            <div 
                value='1'
                className={style.arrowContainer}
                style={ scrollPos === positionWidth ? { cursor: 'not-allowed' } : {} }
                style={{right: '20px'}}
            >
                <RiArrowRightSLine 
                    className={style.arrow}
                    onClick={()=>handleScroll(1)}
                />
            </div>
                
        </div>
    )
}

export default Portfolio
