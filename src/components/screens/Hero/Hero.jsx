import './Hero.css';
import React from "react";
// import CountdownTimer from '../../CountDown/CountdownTimer';
import Button from '../../Button/Button';
import ButtonDiscord from '../../ButtonDiscord/ButtonDiscord';
import HeroCanvas from '../../../canvas/Home';

const Hero = () => {

    const handleRegisterClick = () => {
        window.location.href = 'https://forms.gle/17EJgWDmXRJztH996';
    };
    const handleDiscordClick = () => {
        window.location.href = 'https://discord.gg/PPWqS4XPyt';
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
                <div className="hero__buttons">
                    <div className="hero__button-left">
                    <ButtonDiscord onClick={handleDiscordClick}>Discord Server</ButtonDiscord>
                    </div>
                    <div className="hero__button-right">
                        <Button onClick={handleRegisterClick}>Register Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
