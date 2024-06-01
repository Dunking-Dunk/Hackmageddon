import './Event.css'
import React from "react";
import Carousel from '../Carousel/Carousel'
import { fadeIn } from '../../utils/motion';
import { motion } from 'framer-motion'


const Event = ({ navigate }) => {

    const handleLink = (link) => {
        navigate(link)
    }

    const technicalEvent = []

    const handleRegisterClick = () => {
        // Navigate to google.com
        window.location.href = 'https://forms.gle/9y6FbowCqLyTmb8j7';
    };

    return (
        <div className='event' id='event'>
            <div className='event__container'>
                <motion.h2 variants={fadeIn("right", "ease", 0, 1)} className='event__sub__title'>Events <span style={{ fontSize: '2rem' }}>(click the image for event details)</span></motion.h2>
                <Carousel elements={technicalEvent} />
            </div>
        </div>
    )
}

export default Event