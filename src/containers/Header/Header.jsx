import React from 'react'
import './Header.css'
import symbol from '../../assets/symbol.png'
import Count from '../../count'

const Header = () => {
    return (
        <div className="lotr-countdown">
            <div className="lotr-countdown_title">
                <h1>
                    Lord oF The RingS<br />Countdown
                </h1>
                <img src={symbol} alt='symbol' />
            </div>
            <div className='lotr-countdown_values'>
                <Count />

            </div>
        </div>
    )
}

export default Header;