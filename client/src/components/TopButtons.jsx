import React from 'react'
import LangsButtons from './LangsButtons';
import Social from './Social';

const style = {
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
    return (
        <div style={style.container}>
            <Social/>
            <LangsButtons/>
        </div>
    )
}

export default TopButtons
