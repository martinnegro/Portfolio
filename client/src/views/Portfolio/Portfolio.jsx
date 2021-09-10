import React, { useEffect, useState } from 'react'
import PortfolioCards from './components/PortfolioCards';
import style from './Portfolio.module.scss';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { IoIosArrowDropleft, IoIosArrowDropleftCircle, IoIosArrowDroprightCircle, IoIosArrowDropright } from 'react-icons/io'

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
    const [ numberOfPages, setNumberOfPages ] = useState(0);

    useEffect(()=>{
        const cardsContainer = document.getElementById('cards-container');        
        // Ancho total del contenedor:
        setScrollSize(cardsContainer.scrollWidth);
        const { matches } = window.matchMedia('(max-width: 40em)')
        // Setea la cantidad de páginas
        matches ?  setNumberOfPages(sites.length - 1 ) : setNumberOfPages(Math.ceil(sites.length / 2) - 1);
        // Setea el ancho de cada página
        if (scrollSize > 0 && numberOfPages > 0) setPageWidth(Math.floor(scrollSize / (numberOfPages + 1)))
    },[scrollSize,numberOfPages]);

    const handleScroll = (value) => {
        // Setea posición de página (de 0 a (numberOfPages - 1))
        if (scrollPos === 0) {
            if(value === -1) return
            else setScrollPos(scrollPos + value) 
        } else if ( scrollPos === numberOfPages ) {
            if(value ===  1) return 
            else setScrollPos(scrollPos + value)
        } else setScrollPos(scrollPos + value)
    }

    useEffect(()=>{
        // Watcher por si cambia el tamaño de viewport
        const cardsContainer = document.getElementById('cards-container');
        cardsContainer.addEventListener('scroll',()=>{
            setScrollSize(cardsContainer.scrollWidth)
        });
    },[]);

    useEffect(()=>{
        const cardsContainer = document.getElementById('cards-container');
        cardsContainer.scrollLeft = scrollPos * pageWidth
    },[scrollPos, pageWidth]);
    

    return (
        <div className={style.container}>
            <IoIosArrowDropleftCircle 
                className={style.arrow}
                onClick={()=>handleScroll(-1)}
                disabled={ scrollPos === 0 ? true : false }
                style={{left: '20px'}}
            />
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
            
                <IoIosArrowDroprightCircle 
                    className={style.arrow}
                    onClick={()=>handleScroll(1)}
                    style={ scrollPos === numberOfPages ? { cursor: 'not-allowed' } : {} }
                    style={{right: '20px'}}
               />
           
                
        </div>
    )
}

export default Portfolio
