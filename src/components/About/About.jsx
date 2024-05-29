import './About.css'
import React from "react";
import logo from '../../assets/images/hmgtext.png';
import { textVariant, slideIn } from '../../utils/motion';
import { motion } from 'framer-motion'
import Logo from '../Logo/Logo';


const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about__container'>

                <div className='about__card'>
                    <div className='about__card__img__container'>
                        <Logo />
                    </div>

                    <div className='about__card__sub'>
                        <img src={logo} className='about__card__img' />
                        <motion.p className='about__card__para' variants={textVariant()}>
                            Welcome to <span className='about__card__bold'>HACKMAGEDDON</span>, an intellectually stimulating symposium hosted by the  <span className='about__card__bold'>Department of Artificial Intelligence and Machine Learning </span> dynamically together with the <span className='about__card__bold'> Department of Artificial Intelligence and Data Science </span>. Innoventzz is more than just a gathering; it's a celebration of the trailblazing advancements and limitless possibilities within the realms of AI, Machine Learning and Data Science. You are at the right place to flaunt your innovations and creativity. Gear up yourselves for a thought - <span className='about__card__bold'>provoking experience from INNOVENTZZ’24. </span>
                        </motion.p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About