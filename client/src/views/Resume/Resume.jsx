import React from 'react';
import style from './Resume.module.scss'

      
function Resume() {
    return (
        <div className={style.container}>
        <a 
            href='https://drive.google.com/uc?export=download&id=1uvJ2_fdwL1SUJosFYdVqK01S7BXh0sbw' 
            download
            className={style.link}
            >
            <h1>Download</h1>
            </a>
            <div className={style.infoContainer}>
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
        </div>
    )
}

export default Resume
