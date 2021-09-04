import React from 'react'
import AboutMe from '../views/AboutMe'
import ContactMe from '../views/ContactMe'
import Portfolio from '../views/Portfolio'
import Resume from '../views/Resume'
import style from './Page.module.scss'

function Page() {
    return (
        <div class={style.pageContainer}>
        <section id='about-me'><AboutMe/></section>
        <section id='portfolio'><Portfolio/></section>
        <section id='resume'><Resume /></section>
        <section id='contact-me'><ContactMe /></section>
        </div> 
        
    )
}

export default Page
