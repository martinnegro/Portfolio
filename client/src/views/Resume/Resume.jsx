import React, { useContext, useEffect, useState } from 'react';
import style from './Resume.module.scss'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { LangsContext } from '../../contexts/LangsContext';
      
function Resume() {
    const [      arePages, setArePages      ] = useState(false);
    const [   scrollWidth, setScrollWidth   ] = useState(0)
    const [ numberOfPages, setNumberOfPages ] = useState(0);
    const [     pageWidth, setPageWidth     ] = useState(0);
    const [   currentPage, setCurrentPage   ] = useState(0);
    const [    actualPage, setActualPage    ] = useState(0);

    const { selectedLang } = useContext(LangsContext);

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
                        <h2>{selectedLang.resume.profile.title}</h2>
                        {
                            selectedLang.resume.profile.p.map((p,i) => (<p key={i}>{p}</p>))
                        }
                    </div>
                    <div className={style.subInfo}>
                        <h2>{selectedLang.resume.skills.title}</h2>
                        {
                            selectedLang.resume.skills.p.map((p,i) => (<p key={i}>{p}</p>))
                        }
                        </div>
                    <div className={style.subInfo}>
                        <h2>{selectedLang.resume.langs.title}</h2>
                        {
                            selectedLang.resume.langs.p.map((p,i) => (<p key={i}>{p}</p>))
                        }
                    </div>
                    <div className={style.subInfo}>
                        <h2>{selectedLang.resume.education.title}</h2>
                        {
                            selectedLang.resume.education.ed.map((e,i) => (
                                <>
                                <h3 key={i}>{e.h3}</h3>
                                {
                                    e.p.map((p,j) => <p key={j}>{p}</p>)
                                }
                                </>
                            ))
                        }
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
