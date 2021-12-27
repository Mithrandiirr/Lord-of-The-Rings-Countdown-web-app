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
                {/* <figure class="wp-caption">
                    <img class="demo" src={symbol1} alt="Image" />
                    <figcaption class="wp-caption-text" id='here'>200</figcaption>
                    <figcaption class="wp-caption-text days">Days</figcaption>
                </figure>
                <figure class="wp-caption">
                    <img class="demo" src={symbol1} alt="Image" />
                    <figcaption class="wp-caption-text">44</figcaption>
                    <figcaption class="wp-caption-text days">Hours</figcaption>
                </figure>
                <figure class="wp-caption">
                    <img class="demo" src={symbol1} alt="Image" />
                    <figcaption class="wp-caption-text">15</figcaption>
                    <figcaption class="wp-caption-text days">Minutes</figcaption>
                </figure>
                <figure class="wp-caption">
                    <img class="demo" src={symbol1} alt="Image" />
                    <figcaption class="wp-caption-text">49</figcaption>
                    <figcaption class="wp-caption-text days">Seconds</figcaption>
                </figure> */}
            </div>
        </div>
    )
}

export default Header;