import './Themes.css'
import React from "react";
import logo from '../../assets/images/hmgtext.png';
import { textVariant, slideIn } from '../../utils/motion';
import { motion } from 'framer-motion'
import Logo from '../Logo/Logo';
import { Pager } from 'retro-react';

const Themes = () => {
    return (
        <div className='about' id='about'>
            <div className='about__container'>
            <div className='about__card__sub'>
                        <img src={logo} className='about__card__img' />
                        <Pager
                            color="greyscale-dark"
                            messages={[
                                '1. Smart Technology & Automation',
                                '2. Health and Well-being',
                                '3. Culture, Education, and Tourism',
                                '4. Agriculture and Sustainability',
                                '5. Cybersecurity, & Financial Inclusion',
                                '6. Disaster Management & Space Technology'
                            ]}
                            onButtonPress={function noRefCheck(){}}
                            />
                    </div>
                {/* <div className='about__card'>
                    <div className='about__card__img__container'>
                        <Logo />
                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default Themes