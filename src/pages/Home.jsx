import './Home.css'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Event from '../components/Event/Event'
import Team from '../components/Team/Team'
import Marque from '../components/Marque/Marque'
import Header from '../components/Header/Header';
import Gallery from '../components/Gallery/Gallery'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Timeline from '../components/Timeline/Timeline';
import { StarField } from 'retro-react';
import Themes from '../components/Themes/Themes';

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className='home' >
            <Header />

            <StarField
                numStars={100}
                size={2}
                speed={1}
                starColor="white"
                style={{ zIndex: -1, position: 'fixed' }}
            />
            <div style={{ position: 'relative' }}>
                <Hero />
                <About />
                <Themes />
                <Contact />
                <Footer />
            </div>

        </div >
    )
}
export default Home