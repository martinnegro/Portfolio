import React, { useCallback, useEffect } from 'react'
import Waves from '../components/Waves'
import AboutMe from '../views/AboutMe/AboutMe'
import ContactMe from '../views/ContactMe/ContactMe'
import Portfolio from '../views/Portfolio/Portfolio'
import Resume from '../views/Resume/Resume'
import style from './Page.module.scss'
import { useDispatch } from 'react-redux';
import { setOffsetY } from '../redux/actions';


function Page() {
    const dispatch = useDispatch();
    // const offsetY = useSelector(state => state);
    const handleScroll = useCallback(() => dispatch(setOffsetY(window.pageYOffset)),[dispatch])


    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[handleScroll]);

    return (
        <div className={style.pageContainer}>
            <section id='about-me'>
                <AboutMe/>
                <Waves 
                    color1='#febc76'
                    color2='#FFD68F'
                    color3='#FFEEB7'
                />
            </section>
            <section id='portfolio'>
                <Portfolio/>
                <Waves 
                    color1='#86708f'
                    color2='#B88F9B'
                    color3='#EBB28A'
                />
            </section>
            <section id='resume'>
                <Resume />
                <Waves 
                    color1='#A5AAA3'
                    color2='#9B9BA2'
                    color3='#978CA1'
                />
                
            </section>
            <section id='contact-me'><ContactMe /></section>
        </div> 
        
    )
}

export default Page
