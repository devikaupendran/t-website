import React from 'react'
import { about } from '../assets/assets'

const AboutusSection = () => {
    return (
        <div className='w-full bg-[#f2f2f2] ps-8'>
            <div className='w-max pt-[63px]'>
                <h2 className='text-[#ED7F13] bg-[#ebebeb] shadow-sm p-3 px-6 rounded-lg text-[20px] md:text-[36px]'>ABOUT TRICTA</h2>
            </div>

            <div className='w-full flex flex-col md:flex-row gap-6'>

                {/* --------------- left section --------------- */}
                <div className='w-[100%] xl:w-[50%]'>

                    <div className='pt-[40px] w-max'>
                        <h1 className='text-[32px] md:text-[37px] xl:text-[64px]'>Designing <br /> Futuristic Solutions</h1>
                    </div>

                    <div className='flex gap-4 mt-[10px]'>
                        {
                            about.map((i, index) => (
                                <img key={index} src={i} className='w-[60px] h-[60px] sm:w-[88px] sm:h-[88px] hover:scale-130 transition-all ease-in duration-300 cursor-pointer' />
                            ))
                        }
                    </div>

                    <div className='max-w-[400px] md:max-w-[600px] mt-[39px]'>
                        <p className='text-[#474646] md:text-[20px]'>
                            We, at Tricta Technologies Pvt. Ltd, are a collection of passionate creative individuals,
                            each with their expertise in providing services like
                            <b> Web designing, Web development, Web applications, Mobile applications, E-Commerce Solutions, and Hosting Support.</b>
                        </p>
                    </div>

                    <div className='flex mt-6 justify-center md:justify-end md:mt-[40px] md:me-30'>
                        <button className='p-1 px-4 md:p-2 md:px-4 md:text-[24px] cursor-pointer 
                         text-[#ED7F13] border border-[#ED7F13] hover:bg-[#ED7F13] hover:text-white 
                        transition-all duration-600 ease-in-out rounded-[10px]'
                        >
                            Learn more
                        </button>
                    </div>
                </div>

                {/* --------------- right section --------------- */}
                <div className='w-[100%] xl:w-[50%]'>

                </div>
            </div>
        </div>
    )
}

export default AboutusSection
