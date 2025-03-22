import React from 'react'
import ServicesCardLayout from '../components/ServicesCardLayout'
import { motion } from 'framer-motion'

const AllServiceList = () => {
    return (

        <div className='mb-35'>
            <div>
                <h1 className='text-center text-[60px] md:text-[75px] pt-10 '>Our Services</h1>
            </div>
            <motion.div className='flex flex-col justify-center flex-wrap items-center lg:flex-row gap-10 xl:gap-20 mt-[64px] px-10 lg:px-[40px] xl:px-[6%]'
                initial={{ y: '50%', opacity: 0 }} // Start position and opacity
                whileInView={{ y: 0, opacity: 1 }} // Final position and full opacity when in view
                transition={{
                    type: 'spring',
                    stiffness: 60,
                    damping: 25,
                    duration: 2,
                }}
                viewport={{ once: true }}>
                <ServicesCardLayout />
            </motion.div>
        </div>
    )
}

export default AllServiceList
