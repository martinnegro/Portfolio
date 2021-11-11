import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';


const style = {
    container: {
        fontSize: '2rem',
    }
}

function Social() {
    return (
        <div style={style.container}>
            <a href='https://github.com/martinnegro'>
            <IoLogoGithub/>
            </a>
            <a href='https://www.linkedin.com/in/martinnegro/'>
            <IoLogoLinkedin/>
            </a>
        </div>
    )
}

export default Social
