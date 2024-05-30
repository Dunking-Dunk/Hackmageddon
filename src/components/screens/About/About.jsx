import './About.css'
import React from "react";
import logo from '../../../assets/images/hmgtext.png';
import { textVariant, slideIn } from '../../../utils/motion';
import { motion } from 'framer-motion'
import Logo from '../../Logo/Logo';
import { Meteors } from '../../ui/meteors';

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about__container'>
                <Meteors number={50} />
                <div className='about__card'>
                    <div className='about__card__img__container'>
                        <Logo />
                    </div>

                    <div className='about__card__sub'>
                        <img src={logo} className='about__card__img' />
                        <motion.p className='about__card__para' variants={textVariant()}>
                            Attention Earthlings of Rajalakshmi Engineering College! Calling all tech wizards and innovation enthusiasts! Get ready to warp into <span className='about__card__bold'> HACKMAGEDDON , the most epic 24-hour intra-college hackathon hosted by the School of Computing and Information Science.</span>This is your chance to unleash your coding superpowers and battle it out for glory! Hackmageddon throws down the gauntlet with <span className='about__card__bold'>6 mind-bending themes, </span>so assemble your squad and brainstorm groundbreaking solutions. But first, you'll need to survive the screening round – <span className='about__card__bold'> only the top 30 teams will make it to the grand finale,</span> for an interstellar coding clash right here at REC!
                        </motion.p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About