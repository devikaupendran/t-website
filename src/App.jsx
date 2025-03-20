import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner/Spinner';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Products from './pages/Products';
import AllServiceList from './pages/AllServiceList';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import ServiceDetails from './pages/ServiceDetails';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loader = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 2500);
        };
        loader();
    }, []);
    return (
        <div>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/contact-us' element={<Contactus />} />
                            <Route path='/products' element={<Products />} />
                            <Route path='/services' element={<AllServiceList />} />
                            <Route path='/portfolio' element={<Portfolio />} />
                            <Route path='/about-us' element={<About />} />
                            <Route path="/service/:serviceId" element={<ServiceDetails />} />
                        </Routes>
                        <Footer /> 
                    </>
                )
            }
        </div>
    )
}

export default App
