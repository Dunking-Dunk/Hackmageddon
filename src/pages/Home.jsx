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
import HeroCanvas from '../canvas/Home';


const Home = () => {
    const navigate = useNavigate()

    return (
        <div className='home' >
            <Header />
            <HeroCanvas navigate={navigate} />
            <div style={{ position: 'relative' }}>
                <Hero />
                <About />
                <Event />
                <Marque />
                <Team />
                <Contact />
                <Footer />
            </div>

        </div >
    )
}
export default Home