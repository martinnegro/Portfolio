import React, { useEffect, useState } from 'react';
import style from './Resume.module.scss'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
      
function Resume() {
    const [      arePages, setArePages      ] = useState(false);
    const [   scrollWidth, setScrollWidth   ] = useState(0)
    const [ numberOfPages, setNumberOfPages ] = useState(0);
    const [     pageWidth, setPageWidth     ] = useState(0);
    const [   currentPage, setCurrentPage   ] = useState(0);
    const [    actualPage, setActualPage    ] = useState(0);

    useEffect(()=>{
        const infoContainer = document.getElementById('info-container');
        const elementWidth = infoContainer.clientWidth;
        const auxScrollWidth  = infoContainer.scrollWidth;
        const auxNumberOfPages = Math.round(auxScrollWidth / elementWidth);
        if ( auxNumberOfPages > 1 ) {
            setArePages(true);
            setNumberOfPages(auxNumberOfPages - 1);
            setPageWidth(auxScrollWidth / (auxNumberOfPages));
            setScrollWidth(auxScrollWidth);
        } else setArePages(false)
    },[scrollWidth,pageWidth]);

    useEffect(()=>{
        // Listener por si cambia el tamaño de viewport
        const infoContainer = document.getElementById('info-container');
        const setter = () => setScrollWidth(infoContainer.scrollWidth);
        infoContainer.addEventListener('scroll',setter);
        return () => infoContainer.removeEventListener('scroll',setter)
    },[]);

    useEffect(()=>{
        const infoContainer = document.getElementById('info-container');
        console.log(infoContainer)
        const setter = () => {
            const position = pageWidth > 0 && infoContainer.scrollLeft / pageWidth;
            return setActualPage(Math.round(position)); 
        }
        infoContainer.addEventListener('scroll',setter)
        return ()=>infoContainer.removeEventListener('scroll',setter);
    },[pageWidth])

    useEffect(()=>{
        if (actualPage !== currentPage) setCurrentPage(actualPage);
    },[actualPage])

    const handlePosition = (value) => {
        // Handler de los botones para cambio de página
        const infoContainer = document.getElementById('info-container');
        infoContainer.scrollLeft = (currentPage + value) * pageWidth;
        setCurrentPage(currentPage + value);
    };

    return (
        <div className={style.container}>
            <h1>
                <a 
                    href='https://drive.google.com/uc?export=download&id=1uvJ2_fdwL1SUJosFYdVqK01S7BXh0sbw' 
                    download
                    className={style.link}
                >
                    Download
                </a>
            </h1>
            <div className={style.displayInfo}>
                {
                    arePages && currentPage > 0 ?
                    <IoIosArrowDropleftCircle
                        className={style.arrow}
                        onClick={()=>handlePosition(-1)}
                        style={{left: '20px'}}
                    /> : <div className={style.emptyArrow}></div>
                }
                <div className={style.infoContainer} id="info-container">
                    <div className={style.subInfo}>
                        <h2>Perfil</h2>
                        <p>- Soy Full Stack </p>
                        <p>- Programador JR buscando
                            mi primer empleo en la industria, interesado
                            en incorporar conocimientos y tecnologías a
                            mis skills.
                        </p>
                        <p>
                            - Disfruto de trabajar en equipo. Soy capaz de
                            detectar necesidades e intereses de mis
                            compañeros y entender que se espera de mí.
                        </p>
                        <p>
                            - Desarrollo mi trabajo pensando en los
                            objetivos finales de cada proyecto, su
                            escalabilidad y la satisfacción del cliente.
                        </p>
                    </div>
                    <div className={style.subInfo}>
                        <h2>Skills</h2>
                        <p>- HTML
                            - CSS
                            - JavaScript
                            - NodeJS
                            - ReactJS
                            - Redux

                        </p>
                        <p>- ExpressJS
                            - Sequelize
                            - Postgres
                            - Git
                            - SCRUM
                        </p>
                        </div>
                    <div className={style.subInfo}>

                        <h2>Idiomas</h2>
                        <p>- Español
                            - Inglés Avanzado
                        </p>
                    </div>
                    <div className={style.subInfo}>
                        <h2>Educación</h2>
                        <h3>SOYHENRY BOOTCAMP</h3>
                        <p>2021 - Full Stack Developer</p>
                        <p>
                        - Curso intensivo de 4 meses.
                        - Estructura de datos y algoritmos.
                        - JavaScript Avanzado
                        - React Redux
                        - Desarrollo de backend con Express.js, Sequelize y Postgres
                        </p>
                        <h3>THE ODIN PROJECT - FREECODECAMP</h3>
                        <p>2021 - Full Stack Developer</p>
                        <p>
                        - Introducción a HTML, CSS y JavaScript.
                        - Conceptos sobre Internet, Web y Programación.
                        - Fundamentos de Python
                        </p>
                    </div>
                </div>
                {
                    arePages && currentPage < numberOfPages ?
                    <IoIosArrowDroprightCircle
                        className={style.arrow}
                        onClick={()=>handlePosition(1)}
                        style={{right: '20px'}}
                    /> : <div className={style.emptyArrow}></div>
                }
            </div>
        </div>
    )
}

export default Resume
