import React from 'react'
import { detailsOfServicesCard } from '../assets/assets'
import { assets } from '../assets/assets'

const ServicesCard = () => {
    return (
        <div className='flex flex-col justify-center items-center lg:flex-row gap-20 mt-[64px]'>
            {
                detailsOfServicesCard.map((card, index) => {
                    return (

                        <div key={index} className='w-[300px] h-[320px] md:w-[380px] md:h-[410px] lg:w-[360px] lg:h-[390px] rounded-[20px] flex flex-col  items-center relative customCard cursor-pointer hover:scale-105 transition ease duration-300'>
                            <div>
                                <img src={card.imageGif} alt="card image" className=' w-[100px] h-[100px] md:w-[130px] md:h-[130px] mt-[30px] rounded-full' />
                            </div>

                            {/* --------------- Heading and sub-heading --------------- */}
                            <div className='text-center p-[23px]'>
                                <h1 className='text-[20px] md:text-[28px] text-[#ED7F13] my-2 md:my-[10px] font-medium'>{card.heading}</h1>
                                <p className='text-[12px] md:text-[22px] lg:text-[16px]'>{card.subHeading}</p>
                            </div>

                            {/* --------------- Bottom image --------------- */}
                            <div className='absolute right-0 bottom-0 '>
                                <img src={assets.cardBottomDesign} className='rounded-br-[20px] overflow-hidden' alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ServicesCard
