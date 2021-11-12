import React, { useEffect, useState, useContext } from 'react'
import { LangsContext } from '../../contexts/LangsContext';
import PortfolioCards from './components/PortfolioCards';
import style from './Portfolio.module.scss';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

function Portfolio() {
    const [           sites, setSites          ] = useState([]);
    const [  containerWidth, setContainerWidth ] = useState(0);
    const [   numberOfPages, setNumberOfPages  ] = useState(0);
    const [       pageWidth, setPageWidth      ] = useState(0);
    const [     currentPage, setCurrentPage    ] = useState(0);

    const { selectedLang } = useContext(LangsContext);


    useEffect(() => {
        const auxSites = selectedLang.sites;
        const cardsContainer = document.getElementById('cards-container');
        const auxContainerWidth = cardsContainer.scrollWidth;
        // Revisa ancho de viewport.
        // Desk 2 por página
        // Mobile 1 por página
        const { matches } = window.matchMedia("(max-width: 40em)");
        const auxNumberOfPages = matches ? auxSites.length : Math.ceil(auxSites.length / 2);
        const auxPageWidth = auxContainerWidth / auxNumberOfPages
        if ( auxSites.length > 0 ) {
            setSites(auxSites)
            setNumberOfPages(auxNumberOfPages);
            setContainerWidth(auxContainerWidth)
            setPageWidth(auxPageWidth)
        }
    },[containerWidth]);

    useEffect(()=>{
        // Listener por si cambia el tamaño de viewport
        const cardsContainer = document.getElementById('cards-container');
        const setter = () => setContainerWidth(cardsContainer.scrollWidth);
        cardsContainer.addEventListener('scroll',setter);
        return () => cardsContainer.removeEventListener('scroll',setter)
    },[]);

    useEffect(() => {
        const container = document.getElementById('cards-container');
        container.scrollLeft = pageWidth * currentPage; 
    },[currentPage,pageWidth])
    
    const handlePage = (value) => {
        // Handler de los botones para cambio de página
        setCurrentPage(currentPage + value)
    };

    return (
        <div className={style.container}>
            {
                (currentPage > 0) ? 
                <IoIosArrowDropleftCircle 
                className={style.arrow}
                onClick={()=>handlePage(-1)}
                style={{left: '20px'}}
                /> : <div className={style.emptyArrow}></div>
            }
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
                {
                (currentPage < (numberOfPages - 1)) ?
                <IoIosArrowDroprightCircle 
                    className={style.arrow}
                    onClick={()=>handlePage(1)}
                    style={{right: '20px'}}
               /> : <div className={style.emptyArrow}></div>
                }
                
        </div>
    )
}

export default Portfolio
