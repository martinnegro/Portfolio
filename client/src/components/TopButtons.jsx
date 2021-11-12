import React, { useEffect, useState } from 'react'
import LangsButtons from './LangsButtons';
import Social from './Social';

const styleDef = {
    container: {
        position: 'fixed',
        right: '150px',
        top: '10px',
        "z-index": '1',
        display: 'flex',
        justifyContent: 'inline',
    }
}

function TopButtons() {
    
    const [ style, setStyle ] = useState(styleDef)

    useEffect(() => {
        const { matches } = window.matchMedia('(max-width: 40em)');
        if (matches) {
            setStyle({
                container: {
                    ...style.container,
                    right: '15px'
                }
            })
        }
    },[]);

    return (
        <div style={style.container}>
            <Social/>
            <LangsButtons/>
        </div>
    )
}

export default TopButtons
