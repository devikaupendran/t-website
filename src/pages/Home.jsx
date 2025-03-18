import React from 'react'
import Header from '../components/Header'
import AboutusSection from '../components/AboutusSection'
import ServicesSection from '../components/ServicesSection'
import Testimonials from '../components/Testimonial'


const Home = () => {
    return (
        <div>
            <Header />
            <AboutusSection />
            <ServicesSection />
            <Testimonials />
        </div>
    )
}

export default Home
