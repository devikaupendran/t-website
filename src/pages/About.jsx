import React, { useState, useEffect } from 'react';
import { about, meetOurTeamArray } from '../assets/about-assets';
import { aboutUs } from '../assets/about-assets';
import { motion } from 'framer-motion';

const About = () => {

    const [activeMemberIndex, setActiveMemberIndex] = useState(null); // Track which team card is being tapped (for mobile only)
    const [isMobile, setIsMobile] = useState(false); // Track if we're on a mobile device

    // Detect if the device is mobile on component mount and window resize
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
        };
        checkIfMobile(); // Check initially
        window.addEventListener('resize', checkIfMobile); // Add resize listener
        return () => window.removeEventListener('resize', checkIfMobile); // Clean up
    }, []);

    // Toggle the active state when a team card is tapped (on mobile only)
    const handleTap = (index) => {
        if (!isMobile) return; // Don't activate on desktop

        if (activeMemberIndex === index) {
            setActiveMemberIndex(null);
        }
        else {
            setActiveMemberIndex(index);
        }
    };

    return (
        <div>
            <div>
                <motion.h1 className='text-center text-[40px] md:text-[60px] lg:text-[75px] pt-10'
                    initial={{ y: '60%', opacity: 0 }} // Start position and opacity
                    whileInView={{ y: 0, opacity: 1 }} // Final position and full opacity when in view
                    transition={{
                        type: 'spring',
                        stiffness: 60,
                        damping: 25,
                        duration: 2,
                    }}
                    viewport={{ once: true }}

                >About us</motion.h1>
                <motion.p className='text-wrap text-[17px] lg:text-[22px] text-justify text-[#797575] px-7 xl:px-30 my-10'
                    initial={{ y: '60%', opacity: 0 }} // Start position and opacity
                    whileInView={{ y: 0, opacity: 1 }} // Final position and full opacity when in view
                    transition={{
                        type: 'spring',
                        stiffness: 60,
                        damping: 25,
                        duration: 2,
                        delay: 0.5
                    }}
                    viewport={{ once: true }}>
                    We, at Tricta Technologies Pvt. Ltd, are a collection of a passionate set of creative individuals,
                    each with their own area of expertise in providing services like Web designing,
                    Web development, Web applications, Mobile applications, E-Commerce Solutions and Hosting Support,
                    serving clients from all major region across the globe. Based out of India, Tricta has centers in the US, Canada,
                    Australia and the Middle East, serving all types of IT requirements ranging from a basic website to complex
                    and robust mobile/web application/products.
                </motion.p>
            </div>

            {/* --------------------------- Our mission, vision and history --------------------------- */}
            <div className='flex flex-col justify-center items-center mt-40'>
                <div className='flex flex-col max-w-[1000px] gap-10 '>
                    {
                        aboutUs.map((item, index) => {
                            return (
                                <section key={index} className='flex flex-col xl:flex-row justify-center items-center gap-3 p-6 xl:p-5 m-2 shadow-sm '
                                    style={
                                        {
                                            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                                        }
                                    }>
                                    <div className='xl:w-[30%] h-30 xl:h-[200px]'>
                                        <img src={item.image} alt={`${item.name}`} className='w-full h-full  object-fill' />
                                    </div>
                                    <div className='xl:w-[70%]'>
                                        <h1 className='text-center text-[30px] text-orange-500 xl:text-justify my-2'>{item.heading}</h1>
                                        <p className='text-justify text-wrap text-[#5c5757]'>{item.description}</p>
                                    </div>
                                </section>
                            )
                        })
                    }
                </div>
            </div>

            {/* --------------------------- our team --------------------------- */}
            <div className='my-30'>
                <h1 className='text-center text-[35px] md:text-[50px] lg:text-[65px] pb-10'>Meet our Management</h1>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-10 px-3'>
                    {
                        meetOurTeamArray.map((team, index) => {
                            const isActive = activeMemberIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`relative ${!isMobile ? 'group' : ''} rounded-[20px] p-1`}
                                    onClick={() => handleTap(index)}
                                >
                                    <section className="relative w-[350px] h-[400px] overflow-hidden cursor-pointer rounded-[20px]">
                                        <img src={team.image} alt={`${team.name}`} className='h-full w-full object-cover rounded-[20px]' />

                                        {/* Overlay for desktop (hover) and mobile (tap) */}
                                        <div className={`absolute inset-0 bg-black rounded-[20px] p-0 
                                            transition-opacity duration-300 flex flex-col justify-center 
                                            items-center text-white 
                                            ${isMobile
                                                ? (isActive ? 'opacity-60' : 'opacity-0')
                                                : 'opacity-0 group-hover:opacity-60'}`}
                                        >
                                            <p className={`p-4 text-justify transition-all duration-300
                                                ${isMobile
                                                    ? (isActive ? 'translate-y-0' : 'translate-y-[50px]')
                                                    : 'transform translate-y-[50px] group-hover:translate-y-0'}`}
                                            >
                                                {team.about}
                                            </p>
                                        </div>
                                    </section>

                                    <div className='text-center py-3'>
                                        <h1 className='text-[24px]'>{team.name}</h1>
                                        <p className='text-[#ff4a17] font-semibold'>{team.position}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default About;