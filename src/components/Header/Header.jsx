import './Header.css'
import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/hmgtext.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Header() {
    const containerRef = useRef()
    const [state, setState] = useState(false)

    const helperFunction = () => {
        setState((state) => !state)
    }

    const variant = {
        hidden: {
            left: '-100%'
        },
        show: {
            left: '0',
            transition: {
                ease: 'easeOut',
            }
        }
    }


    return (
        <div className='navbar'>
            <div className="navbar__container" >
                <div className="menu" onClick={helperFunction}>
                    <span className='menu__line' style={{ transform: state && 'rotate(45deg)', top: state && 3 }}></span>
                    <span className='menu__line' style={{ width: state && '0px' }}></span>
                    <span className='menu__line' style={{ transform: state && 'rotate(-45deg)', top: state && 0 }}></span>
                </div>
                <div className="navbar__logo__container">
                    <div className="navbar__logo">
                        <img className="navbar__logo__img" src={logo} alt='picture of the person' />
                    </div>
                </div>
                <motion.div layout className="navbar__link__container" ref={containerRef} variants={variant} animate={state ? 'show' : 'hidden'}>
                    <ul className="link__container__items">
                        <li className="mobile__container">
                            <div className="navbar__logo">
                                <img className="navbar__logo__img" src={logo} alt='picture of the person' />
                            </div>
                        </li>
                        <li className="link__container__item">
                            <Link className='link__item__link' to='/statement'>Statements</Link>
                        </li>
                        <li className="link__container__item">
                            <Link className='link__item__link' to='/Rules'>Rules</Link>
                        </li>
                        <li className="link__container__item">
                            <a className='link__item__link' href='#about'>About</a></li>
                        <li className="link__container__item">
                            <a className='link__item__link' href=''>Team</a>
                        </li>
                        <li className="link__container__item">
                            <a className='link__item__link' href='mailto:Innoventzz@gmail.com'>Contact</a>
                        </li>
                        {/* <li className="link__container__item">
                            <a className='link__item__link' href='/Rules'>Rules</a>
                        </li> */}
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}