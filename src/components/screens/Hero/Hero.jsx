import './Hero.css';
import React, { useRef } from "react";
// import CountdownTimer from '../../CountDown/CountdownTimer';
import Button from '../../Button/Button';
import HeroCanvas from '../../../canvas/Home'

const Hero = () => {

    const handleRegisterClick = () => {
        window.location.href = 'https://forms.gle/17EJgWDmXRJztH996';
    };

    return (
        <div className="hero" id='hero'>
            <HeroCanvas />
            <div className="hero__container">
                <div className="hero__lines"></div>
                <div className='hero__sub'>
                    <h1 className="hero__title">
                        <span>HACKMAGEDDON</span>
                        <span>HACKMAGEDDON</span>
                    </h1>
                    <h2 className="hero__h2">Chapter 1</h2>
                </div>
                <Button onClick={handleRegisterClick}>Register Now</Button>
            </div>
        </div>
    );
};

export default Hero
