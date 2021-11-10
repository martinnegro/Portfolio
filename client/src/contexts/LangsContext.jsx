import React, { createContext, useState } from 'react';



export const LangsContext =  createContext();

const spanish = {
    sites: [
        {
            site_name: 'WeatherApp',
            site_description: 'Uno de mis primero proyectos como programador Full Stack. Construído con React. Uso de APIs OpenWeatherMap y OpenStreetMap.',
            site_image: "https://i.ibb.co/cxcTLrT/screenshot1.png",
            site_link: 'https://martinnegro-weatherapp.netlify.app'
        },{
            site_name: 'Psitesis',
            site_description: 'Blog y foro para estudiantes de psicología. Hecho con react, Redux y Material UI. API desarrollada con Express JS, Sequelize y Postgres. El sitio contiene un panel de administrador para acciones CRUD.\nConstruido en equipo durante el transcurso de 4 semanas',
            site_image: "https://i.postimg.cc/Zqyn2HYn/screenshot.png",
            site_link: 'https://psitesis.netlify.app'
        },{
            site_name: 'GamesHome',
            site_description: 'Proyecto Individual. Hecho con  React, Redux y SASS puro en el front. Uso de rawg.io API. Formulario para agregar juegos al catálogo, con consistencia en base de datos. Desarrollo de filtros, paginado y alertas.',
            site_image: 'https://raw.githubusercontent.com/martinnegro/martinnegro/main/screenshots/Videogames.png',
            site_link: 'https://gameshome-martinnegro.netlify.app/'
        }
    ],
    resume: {
        profile: {
            title: 'Perfil',
            p: [
                '- Soy Full Stack',
                '- Programador JR buscando mi primer empleo en la industria, interesado en incorporar conocimientos y tecnologías a mis skills.',
                '- Disfruto de trabajar en equipo. Soy capaz de detectar necesidades e intereses de mis compañeros y entender que se espera de mí.',
                '- Desarrollo mi trabajo pensando en los objetivos finales de cada proyecto, su escalabilidad y la satisfacción del cliente.'
            ]
        },
        skills: {
            title: 'Habilidades',
            p: [
                '- HTML - CSS - JavaScript - NodeJS - ReactJS - Redux',
                '- ExpressJS - Sequelize - Postgres - Git - SCRUM'
            ]
        },
        langs: {
            title: 'Idiomas',
            p: ['- Español - Inglés Avanzado']
        },
        education: {
            title: 'Educación',
            ed: [
                {
                    h3: 'SOYHENRY BOOTCAMP',
                    p: [
                        '- Curso intensivo de 4 meses.',
                        '- Estructura de datos y algoritmos.',
                        '- JavaScript Avanzado',
                        '- React Redux',
                        '- Desarrollo de backend con Express.js, Sequelize y Postgres.'
                    ]
                },{
                    h3: 'THE ODIN PROJECT - FREECODECAMP',
                    p: [
                        '- Introducción a HTML, CSS y JavaScript.',
                        '- Conceptos sobre Internet, Web y Programación.',
                        '- Fundamentos de Python'
                    ]
                }
            ]
        }
    },
    social: {
        form: {
            title: 'O puedes enviarme un mail aquí:',
            name: 'Nombre',
            email: 'Email',
            text: 'Texto',
            send: 'Enviar'
        }
    }
};
const english = {
    sites: [
        {
            site_name: 'WheatherApp',
            site_description: "One of my first projects as a Full Stack Dev student. Made with React. Use of OpenWeatherMap and OpenStreetMap APIs.",
            site_image: "https://i.ibb.co/cxcTLrT/screenshot1.png",
            site_link: 'https://martinnegro-weatherapp.netlify.app'
        },{
            site_name: 'Psitesis',
            site_description: 'Blog and Forum for psychology students. Made with React, Redux and Material UI. API develop with Express JS, Sequelize and Postgres. The site has an admin panel for CRUD actions.\nDeveloped as a team over the course of 4 weeks. ',
            site_image: "https://i.postimg.cc/Zqyn2HYn/screenshot.png",
            site_link: 'https://psitesis.netlify.app'
        },{
            site_name: 'GamesHome',
            site_description: 'Individual Project. Made with React, Redux and pure SASS for the front. Use of rawg.io API. Has a backend with database for the creation of new games. Filter, pagination, forms and alerts development.',
            site_image: 'https://raw.githubusercontent.com/martinnegro/martinnegro/main/screenshots/Videogames.png',
            site_link: 'https://gameshome-martinnegro.netlify.app/'
        }
    ],
    resume: {
        profile: {
            title: 'Profile',
            p: [
                "- I'm Full Stack",
                '- JR Programmer looking for my first job within the industry, interested in incorporate knwoledge and technologies to my skills.',
                '- I enjoy teamwork. I am able to detect the needs and interests of my colleagues and understand what is expected of me.',
                '- I develop my work thinking about the final objectives of each project, its scalability and customer satisfaction'
            ]
        },
        skills: {
            title: 'Skills',
            p: [
                '- HTML - CSS - JavaScript - NodeJS - ReactJS - Redux',
                '- ExpressJS - Sequelize - Postgres - Git - SCRUM'
            ]
        },
        langs: {
            title: 'Languages',
            p: ['- Spanish - Advanced English']
        },
        education: {
            title: 'Education',
            ed: [
                {
                    h3: 'SOYHENRY BOOTCAMP',
                    p: [
                        '- Intensive 4-month course.',
                        '- Data structure and algorithms.',
                        '- React Redux',
                        '- Advanced Javascript',
                        '- Backend development with Express.js, Sequelize and Postgres'
                    ]
                },{
                    h3: 'THE ODIN PROJECT - FREECODECAMP',
                    p: [
                        '- Introduction to HTML, CSS and JavaScript.',
                        '- Concepts about Internet, Web and Programming.',
                        '- Python basics.'
                    ]
                }
            ]
        }
    },
    social: {
        form: {
            title: 'Or you can send me an email here:',
            name: 'Name',
            email: 'Email',
            text: 'Text',
            send: 'Send'
        }
    }
};

const LangsContextProvider = ({ children }) => {
    const [ selectedLang, setSelectedLang ] = useState(spanish);

    const selectSpanish = () => setSelectedLang(spanish);
    const selectEnglish = () => setSelectedLang(english);

    return (
        <LangsContext.Provider
            value={{
                selectedLang,
                selectSpanish,
                selectEnglish,
            }}
        >
            {children}
        </LangsContext.Provider>
    )
};

export default LangsContextProvider