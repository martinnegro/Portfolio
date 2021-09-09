import React from 'react';
import { useSelector } from 'react-redux'
import style from  './Waves.module.scss'

function Waves({ color1, color2, color3 }) {
    const offsetY = useSelector(state => state);
    

    return (
        <div className={style.container}>
            <div
                className={style.wave3}
                style={{
                    maskPositionX: `${(-600 + offsetY) * 1.5}px`,    
                    WebkitMaskPositionX: `${(- 600 + offsetY) * 1.5}px`,
                    backgroundColor: color3
                }} 
            >
            </div> 
            <div 
                className={style.wave2} 
                style={{ 
                    maskPositionX: `${-(- 300 + offsetY)}px`, 
                    WebkitMaskPositionX: `${-(- 300 + offsetY)}px`, 
                    backgroundColor: color2

                }} 
            >
            </div> 
            <div 
                className={style.wave1} 
                style={{ 
                    maskPositionX: `${(offsetY) / 1.3}px`,
                    WebkitMaskPositionX: `${(offsetY) / 1.3}px`,
                    backgroundColor: color1
                }} 
            >
            </div>
        </div>
    )
}

export default Waves
