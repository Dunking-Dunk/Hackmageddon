import './Hero.css';
import React, { useRef } from "react";
import CountdownTimer from '../CountDown/CountdownTimer';
import Button from '../Button/Button';
import { StarField } from 'retro-react';
import { motion } from 'framer-motion';
import { zoomIn } from '../../utils/motion';
import sectionWrapper from '../../utils/sectionWrapper';

const Hero = () => {
    const titleRef = useRef();

    const handleRegisterClick = () => {
        // Navigate to google.com
        window.location.href = 'https://forms.gle/WXgsuPiG1TwSzpHX9';
    };

    return (
        <div className="hero" id='hero'>
            <div className="hero__container">
                <div className="hero__lines"></div>
                <h1 className="hero__h1">
                    <span>HACKMAGEDDON</span>
                    <span>HACKMAGEDDON</span>
                </h1>
                <h2 className="hero__h2">Chapter 1</h2>

                <Button onClick={handleRegisterClick}>Register</Button>
            </div>
        </div>
    );
};

export default sectionWrapper(Hero, "about");
