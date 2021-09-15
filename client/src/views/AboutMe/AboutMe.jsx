import React from 'react';
import style from './AboutMe.module.scss';

function AboutMe() {
    return (
        <div className={style.container}>
            <h1>
                const Martin_Negro =
            </h1>
            <div className={style.objectContainer}>
                <p>
                    {`{`}
                </p>
                <p>
                &emsp;&emsp;front_end: true,
                </p>
                <p>
                &emsp;&emsp; back_end: true,
                </p>
                <p>
                &emsp;&emsp; location: 'Versalles, Buenos Aires, Argentina',
                </p>
                <p>
                    {`}`}
                </p>
            </div>
                <p>
                    Scroll down for more!
                </p>
        </div>
    )
}

export default AboutMe
