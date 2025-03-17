import React from 'react'
import ServicesCard from './ServicesCard'

const ServicesSection = () => {
    return (
        <div className='w-full '>
            <div className='md:w-full'>

                <div className='ps-[40px] sm:ps-[88px] w-max pt-[63px]'>
                    <h2 className='text-[#ED7F13] bg-[#ebebeb] shadow-sm p-3 px-6 rounded-lg text-[20px] sm:text-[36px]'>SERVICES</h2>
                </div>

                <div className='pt-[38px] ps-[40px] md:ps-[88px]'>
                    <h1 className='text-[38px] md:text-[64px] xl:text-[80px] text-[#5B5B5B]'>What we can do for you</h1>
                </div>

                <ServicesCard />

                <div className='flex justify-center m-20'>
                    <button className='p-1 px-4 md:p-3 md:px-6 md:text-[29px] cursor-pointer text-[#ED7F13] border border-[#ED7F13] hover:bg-[#ED7F13] hover:text-white  transition-all duration-600 ease-in-out rounded-[10px]'>
                        View more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection
