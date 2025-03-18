import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Spinner from './components/Spinner/Spinner';
import Footer from './components/Footer';
import Products from './pages/Products';
import Services from './pages/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';

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
                            <Route path='/services' element={<Services />} />
                            <Route path='/portfolio' element={<Portfolio />} />
                            <Route path='/about-us' element={<About />} />
                        </Routes>
                        {/* <Footer />  */}
                    </>
                )
            }
        </div>
    )
}

export default App
