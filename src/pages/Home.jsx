import './Home.css'
import React from 'react'
import Hero from '../components/screens/Hero/Hero'
import About from '../components/screens/About/About'
import Event from '../components/Event/Event'
import Team from '../components/screens/Team/Team'
import Marque from '../components/Marque/Marque'
import Header from '../components/Header/Header';
import Gallery from '../components/Gallery/Gallery'
import Contact from '../components/screens/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Timeline from '../components/screens/Timeline/Timeline';
import { StarField } from 'retro-react';
import Background from '../canvas/Background';
import Themes from '../components/screens/Themes/Themes';
import Faq from '../components/screens/Faq/Faq'
import Prices from '../components/screens/Prices/Prices';
import Rules from '../components/screens/Rules/Rules';
import Statements from '../components/screens/Statements/Statements';
import Loader from '../components/Loader/Loader'

const Home = () => {

    return (
        <div className='home' >
            {/* <Loader /> */}
            <Header />
            <Background />
            <Hero />
            <div className='relative'>
                <StarField
                    numStars={100}
                    size={2}
                    speed={1}
                    starColor="white"
                    style={{ zIndex: -1, position: 'absolute' }}
                />
                <About />
                {/* <Marque /> */}
                <Themes />
                <Statements />
                <Rules />
                <Prices />
                <Timeline />
                <Team />
                <Faq />
                <Contact />
                <Footer />
            </div>

        </div >
    )

}
export default Home