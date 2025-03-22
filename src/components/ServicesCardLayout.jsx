import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { servicesCardDetails } from '../assets/service-assets';
import { serviceAssets } from '../assets/service-assets';
import { motion } from 'framer-motion';

const ServicesCardLayout = ({ limit }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    const handleCardClick = (serviceId) => {
        navigate(`/service/${serviceId}`);  // Navigate to the ServiceDetails page with the  serviceId
    }

    // If limit is passed, slice the array based on limit else show all cards
    const cardsToDisplay = limit ? servicesCardDetails.slice(0, limit) : servicesCardDetails;

    return (
        <>
            {
                cardsToDisplay.map((card, index) => {
                    return (

                        <motion.div
                            key={index}
                            className={`w-[300px] h-[320px] md:w-[380px] md:h-[410px] lg:w-[360px] lg:h-[390px] ${isHomePage ? '' : '3xl:w-[520px] 3xl:h-[550px]'}  rounded-[20px] flex flex-col  
                                        items-center relative customCard cursor-pointer hover:scale-105 transition ease duration-300`}
                            onClick={() => handleCardClick(index)}
                        >
                            {/* --------- image --------- */}
                            <div>
                                <img src={card.imageGif} alt="card image" className={`w-[100px] h-[100px] md:w-[130px] md:h-[130px] ${isHomePage ? '' : '3xl:w-[200px] 3xl:h-[200px]'} mt-[30px] rounded-full`} />
                            </div>

                            {/* --------------- Heading and sub-heading --------------- */}
                            <div className='text-center p-[23px]'>
                                <h1 className={`text-[20px] md:text-[28px] text-[#ED7F13] my-2 md:my-[10px]  ${isHomePage ? '' : '3xl:my-3 3xl:text-[37px]'} font-medium`}>{card.heading}</h1>
                                <p className={`text-[12px] md:text-[22px] lg:text-[16px]  ${isHomePage ? '' : '3xl:text-[21px]'}`}>{card.subHeading}</p>
                            </div>

                            {/* --------------- Bottom image --------------- */}
                            <div className='absolute right-0 bottom-0 '>
                                <img src={serviceAssets.cardBottomDesign} className={`rounded-br-[20px] overflow-hidden  ${isHomePage ? '' : '3xl:w-[520px]'}`} alt="" />
                            </div>
                        </motion.div>
                    )
                })
            }
        </>
    )
}

export default ServicesCardLayout;
