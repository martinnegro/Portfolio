import React, { useEffect, useState } from 'react';

import { HashLink } from 'react-router-hash-link';
import { MdPersonPin } from 'react-icons/md'
import { BsFolder } from 'react-icons/bs'
import { IoNewspaperSharp } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import style from './NavBar.module.scss';

const initSection = {
    aboutMe: { height: '100%' },
    portfolio: { height: '0' },
    resume: { height: '0' },
    contactMe: { height: '0' },
};

const portfolioSection = {
    aboutMe: { height: '0' },
    portfolio: { height: '100%' },
    resume: { height: '0' },
    contactMe: { height: '0' },
};
const resumeSection = {
    aboutMe: { height: '0' },
    portfolio: { height: '0' },
    resume: { height: '100%' },
    contactMe: { height: '0' },
};

const contactMeSection = {
    aboutMe: { height: '0' },
    portfolio: { height: '0' },
    resume: { height: '0' },
    contactMe: { height: '100%' }
};

function NavBar() {
    const [   selectedSection, setSelectedSection   ] = useState(initSection);
    const [ previousScrollPos, setPreviousScrollPos ] = useState(0);

    useEffect(()=>{
        setSelectedSection(initSection);
    },[]);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          const vh = Math.max(document.documentElement.scrollHeight || 0, window.innerHeight || 0) / 4
          console.log('vh: ',vh)
          const place = Math.ceil((window.scrollY + 10) / vh)
          place === 1 
          ? setSelectedSection(initSection)
          : place === 2
          ? setSelectedSection(portfolioSection)
          : place === 3
          ? setSelectedSection(resumeSection)
          : place === 4
          ? setSelectedSection(contactMeSection)
          : setSelectedSection(initSection);
        });
      }, []); 

    return (
        <div className={style.forMargin}>
        <div className={style.navContainer}>
                <HashLink smooth to='/#about-me'>        
                    <MdPersonPin/>
                </HashLink>
                <div className={style.description} style={selectedSection.aboutMe}>
                    ABOUTME
                </div>
                <HashLink smooth to='/#portfolio'>
                    <BsFolder />
                </HashLink>            
                <div className={style.description} style={selectedSection.portfolio}>
                    PORTFOLIO
                </div>
                <HashLink smooth to='/#resume'>
                    <IoNewspaperSharp/>
                </HashLink>   
                <div className={style.description} style={selectedSection.resume}>
                    RESUME
                </div>
                <HashLink smooth to='/page#contact-me'>
                    <AiOutlineMail/>
                </HashLink>
                <div className={style.description} style={selectedSection.contactMe}>
                    CONTACTME
                </div>
        </div>
        </div>        
    )
}

export default NavBar
