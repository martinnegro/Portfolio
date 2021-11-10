import React, { useEffect, useState, useContext } from 'react'
import { LangsContext } from '../../contexts/LangsContext';
import PortfolioCards from './components/PortfolioCards';
import style from './Portfolio.module.scss';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

function Portfolio() {
    const [      scrollSize, setScrollSize    ] = useState(0);
    const [       pageWidth, setPageWidth     ] = useState(0);
    const [   numberOfPages, setNumberOfPages ] = useState(0);   
    const [     currentPage, setCurrentPage   ] = useState(0);
    const [      actualPage, setActualPage   ] = useState(0);

    const { selectedLang } = useContext(LangsContext)

    useEffect(()=>{
        const cardsContainer = document.getElementById('cards-container');        
        // Ancho total del contenedor:
        setScrollSize(cardsContainer.scrollWidth);
        const { matches } = window.matchMedia('(max-width: 40em)')
        // Setea la cantidad de páginas
        matches ?  setNumberOfPages(selectedLang.sites.length-1) : setNumberOfPages(Math.ceil(selectedLang.sites.length / 2)-1);
        // Setea el ancho de cada página
        if (scrollSize > 0 && numberOfPages > 0) setPageWidth(Math.floor(scrollSize / (numberOfPages + 1)))
    },[scrollSize,numberOfPages,selectedLang.sites.length]);

    useEffect(()=>{
        // Listener por si cambia el tamaño de viewport
        const cardsContainer = document.getElementById('cards-container');
        const setter = () => setScrollSize(cardsContainer.scrollWidth);
        cardsContainer.addEventListener('scroll',setter);
        return () => cardsContainer.removeEventListener('scroll',setter)
    },[]);
    useEffect(()=>{
        // Listener de la posición real del Scroll. Redondea para medirlo en pages.
        const cardsContainer = document.getElementById('cards-container');
        const setter = () => { 
                const position = pageWidth > 0 && cardsContainer.scrollLeft / pageWidth;
                return setActualPage(Math.round(position));                
            }
        cardsContainer.addEventListener('scroll',setter)
        return () => cardsContainer.removeEventListener('scroll',setter)
    },[pageWidth]);
    
    useEffect(()=>{
        // Si cambia la posición real, cambia la página actual.
        if (actualPage !== currentPage) setCurrentPage(actualPage)
    },[actualPage,currentPage]);
    
    const handlePosition = (value) => {
        // Handler de los botones para cambio de página
        const cardsContainer = document.getElementById('cards-container');
        cardsContainer.scrollLeft = (currentPage + value) * pageWidth;
        setCurrentPage(currentPage + value )
    };

    return (
        <div className={style.container}>
            {
                !(currentPage === 0) ? 
                <IoIosArrowDropleftCircle 
                className={style.arrow}
                onClick={()=>handlePosition(-1)}
                style={{left: '20px'}}
                /> : <div className={style.emptyArrow}></div>
            }
            <div 
                id="cards-container"
                className={style.cardsContainer}                
            >
                {
                    selectedLang.sites ? 
                    selectedLang.sites.map((site, i) => (
                        <PortfolioCards
                            key={i}
                            site={site}
                        />
                    ))
                    : null
                }

            </div>
                {
                !(currentPage === numberOfPages) ?
                <IoIosArrowDroprightCircle 
                    className={style.arrow}
                    onClick={()=>handlePosition(1)}
                    style={{right: '20px'}}
               /> : <div className={style.emptyArrow}></div>
                }
                
        </div>
    )
}

export default Portfolio
