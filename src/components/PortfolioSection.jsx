import React, { useState, useEffect } from 'react';
import { portfolioArray } from '../assets/portfolio-assets';

const PortfolioSection = () => {
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
        <div className='w-full h-max mb-60 '>
            <div className='w-max pt-[63px] px-10 lg:px-[80px] xl:px-[6%]'>
                <h2 className='text-[#ED7F13] bg-[#ebebeb] shadow-sm p-3 px-6 rounded-lg text-[20px] md:text-[36px]'>PORTFOLIO</h2>
            </div>

            {/* ----------- sub-heading ----------- */}
            <div className='pt-[38px] px-10 lg:px-[80px] xl:px-[6%]'>
                <h1 className='text-[30px] md:text-[40px] xl:text-[56px] text-[#5B5B5B]'>Our Selected Works</h1>
            </div>

            {/* ----------- portfolio container ------------  */}
            <div className='w-full h-max flex justify-center mt-[64px]'>
                <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 gap-y-40 '>
                    {
                        portfolioArray.map((portfolio, index) => {
                            const isActive = activeItemIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`flex justify-center relative cursor-pointer custom-portfolio-container ${!isMobile ? 'group' : ''}`}
                                    onClick={() => handleTap(index)}
                                >
                                    {/* --------------- portfolio image --------------- */}
                                    <div className='w-[320px] h-[300px] md:w-[450px] md:h-[320px] rounded-2xl overflow-hidden'>
                                        <img
                                            src={portfolio.image}
                                            className={`w-full h-full transition-all ease-in-out duration-800 object-cover
                                                ${isMobile
                                                    ? (isActive ? 'scale-110' : '')
                                                    : 'group-hover:scale-120'}`}
                                        />
                                    </div>

                                    {/* --------------- Sub-box container  --------------- */}
                                    <div
                                        className='w-[80%] py-6 bg-white shadow-2xs absolute bottom-[-100px] flex flex-col items-center rounded-2xl opacity-95'
                                        style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}
                                    >
                                        <div className='w-full relative'>
                                            {/* --------------- ICON --------------- */}
                                            <div
                                                className={`w-20 h-20 md:w-25 md:h-25 border-6 border-white bg-[#ff4a17] flex items-center justify-center rounded-full absolute top-0
                                                    transition-all ease-in duration-400
                                                    ${isMobile
                                                        ? (isActive ? 'border-1 border-[#ff4a17] bg-white' : '')
                                                        : 'group-hover:border-1 group-hover:border-[#ff4a17] group-hover:bg-white'}`}
                                                style={{
                                                    top: '-50px',
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                }}
                                            >
                                                <i
                                                    className={`bx ${portfolio.icon} text-4xl md:text-6xl p-3
                                                        ${isMobile
                                                            ? (isActive ? 'text-[#ff4a17]' : 'text-white')
                                                            : 'text-white group-hover:text-[#ff4a17]'}`}
                                                ></i>
                                            </div>

                                            {/* --------------- HEADINGS --------------- */}
                                            <div className='flex flex-col gap-3 mt-10 md:mt-14'>
                                                <p
                                                    className={`text-2xl md:text-3xl font-semibold text-center
                                                        ${isMobile
                                                            ? (isActive ? 'text-[#ff4a17]' : '')
                                                            : 'group-hover:text-[#ff4a17]'}`}
                                                >
                                                    {portfolio.heading}
                                                </p>
                                                <p className='category my-3 md:text-2xl text-center'>{portfolio.category}</p>
                                            </div>
                                        </div>
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

export default PortfolioSection