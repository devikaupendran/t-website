import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Spinner from './components/Spinner/Spinner';

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
                            <Route path='/contactus' element={<Contactus />} />
                        </Routes>
                    </>
                )
            }
        </div>
    )
}

export default App
