import React from 'react'
import Header from '../components/Header'
import AboutusSection from '../components/AboutusSection'
import ServicesSection from '../components/ServicesSection'
import Testimonials from '../components/Testimonial'
import Portfolio from '../components/Portfolio'


const Home = () => {
    return (
        <div>
            <Header />
            <AboutusSection />
            <ServicesSection />
            <Portfolio />
            <Testimonials />
        </div>
    )
}

export default Home
