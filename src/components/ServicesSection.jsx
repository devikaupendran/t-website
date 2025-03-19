import React from 'react'
import ServicesCardLayout from './ServicesCardLayout'
import { useNavigate } from 'react-router-dom'

const ServicesSection = () => {
    const navigate = useNavigate();

    return (
        <div className='w-full '>
            <div className='md:w-full'>

                {/* ----------- heading ----------- */}
                <div className='px-10 lg:px-[80px] xl:px-[6%] w-max pt-[63px]'>
                    <h2 className='text-[#ED7F13] bg-[#ebebeb] shadow-sm p-3 px-6 rounded-lg text-[20px] sm:text-[36px]'>SERVICES</h2>
                </div>

                {/* ----------- sub-heading ----------- */}
                <div className='pt-[38px] px-10 lg:px-[80px] xl:px-[6%]'>
                    <h1 className='text-[30px] md:text-[40px] xl:text-[56px] text-[#5B5B5B]'>What we can do for you</h1>
                </div>

                <div className='flex flex-col justify-center flex-wrap items-center lg:flex-row gap-10 xl:gap-20 mt-[64px] px-10 lg:px-[40px] xl:px-[6%]'>
                    <ServicesCardLayout limit={3} />
                </div>

                {/* ----------- view more button ----------- */}
                <div className='flex justify-center m-20'>

                    <button onClick={() => { navigate('/services'); scrollTo(0, 0); }}
                        className='p-1 px-4 text-[24px] md:p-3 md:px-6 md:text-[29px] cursor-pointer text-[#ED7F13] border border-[#ED7F13] hover:bg-[#ED7F13] hover:text-white  transition-all duration-600 ease-in-out rounded-[10px]'>
                        View more
                    </button>

                </div>

            </div>
        </div>
    )
}

export default ServicesSection
