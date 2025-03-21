import React, { useState, useEffect } from 'react';
import { portfolioData } from '../assets/portfolio-assets'

const Portfolio = () => {
    // Track which portfolio item is being tapped (for mobile only)
    const [activeItemIndex, setActiveItemIndex] = useState(null);
    // Track if we're on a mobile device
    const [isMobile, setIsMobile] = useState(false);

    // Detect if the device is mobile on component mount and window resize
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
        };
        checkIfMobile(); // Check initially
        window.addEventListener('resize', checkIfMobile); // Add resize listener
        return () => window.removeEventListener('resize', checkIfMobile); // Clean up
    }, []);

    // Toggle the active state when a portfolio item is tapped (on mobile only)
    const handleTap = (index) => {
        if (!isMobile) return; // Don't activate on desktop

        if (activeItemIndex === index) {
            setActiveItemIndex(null);
        } else {
            setActiveItemIndex(index);
        }
    };

    return (
        <div className='w-full mb-30'>
            <div>
                <h1 className='text-center text-[60px] md:text-[75px] pt-10'>Our Portfolio</h1>
            </div>

            <div className='w-full flex justify-center items-center mt-20 px-10'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-17'>
                    {
                        portfolioData.map((product, index) => {
                            const isActive = activeItemIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`relative ${!isMobile ? 'group' : ''}`}
                                    onClick={() => handleTap(index)}
                                >
                                    {/* ------------------- Image container with fixed size ------------------- */}
                                    <div className="relative h-[300px] overflow-hidden cursor-pointer rounded-[20px]">
                                        <img
                                            src={product.image}
                                            alt="product image"
                                            className={`w-full h-full object-cover transition-transform duration-300 
                                                ${isMobile
                                                    ? (isActive ? 'scale-110' : 'scale-100')
                                                    : 'group-hover:scale-110'}`}
                                        />
                                        {/* ------------------- Overlay on hover/tap ------------------- */}
                                        <div className={`absolute inset-0 bg-black bg-opacity-100 transition-opacity duration-300 
                                            flex flex-col justify-center items-center text-white
                                            ${isMobile
                                                ? (isActive ? 'opacity-80' : 'opacity-0')
                                                : 'opacity-0 group-hover:opacity-80'}`}
                                        >
                                            <p className="mb-4 text-center text-[20px] p-3">{product.description}</p>
                                            <a href={product.link} target="_blank" rel="noopener noreferrer" className='p-4 bg-white opacity-100 rounded-full'>
                                                <i className='bx bx-link text-[#ff4a17] font-bold text-[35px]'></i>
                                            </a>
                                        </div>
                                        {/* ------------------- Category label ------------------- */}
                                        <p className={`absolute bg-[#ff4a17] bg-opacity-100 text-white rounded-2xl p-3 top-2 left-2
                                            ${isMobile
                                                ? (isActive ? 'block' : 'hidden')
                                                : 'hidden group-hover:block'}`}
                                        >
                                            {product.category}
                                        </p>
                                    </div>

                                    {/* ------------------- Product name ------------------- */}
                                    <div className='m-5 p-3'>
                                        <h1 className="text-center text-xl text-[20px] font-semibold">{product.name}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio