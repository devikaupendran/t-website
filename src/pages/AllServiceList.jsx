import React from 'react'
import ServicesCardLayout from '../components/ServicesCardLayout'

const AllServiceList = () => {
    return (

        <div>

            <div>
                <h1 className='text-center text-[70px] md:text-[90px] pt-10'>Our Services</h1>
            </div>
            <div className='flex flex-col justify-center flex-wrap items-center lg:flex-row gap-10 xl:gap-20 mt-[64px] px-10 lg:px-[40px] xl:px-[6%]'>
                <ServicesCardLayout />
            </div>
        </div>
    )
}

export default AllServiceList
