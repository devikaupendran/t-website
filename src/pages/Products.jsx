import React from 'react'
import { productAssets } from '../assets/product-assets'
import Banner from '../components/Banner'
import { motion } from 'framer-motion'
import ProductList from '../components/ProductList'

const Products = () => {
    return (
        <div className='w-full'>

            <Banner />

            <div>
                <h1 className='text-center text-[42px] md:text-[60px] lg:text-[75px] pt-10'>Our Products</h1>

                <div className='w-full  px-[4%] md:px-[6%] xl:px-[4%] flex flex-col gap-20  xl:flex-row xl:gap-10  justify-between my-[150px]'>
                    <motion.div className=' w-full xl:w-[50%] flex flex-col gap-7'
                        initial={{ y: '30%', opacity: 0 }} // Start position and opacity
                        whileInView={{ y: 0, opacity: 1 }} // Final position and full opacity when in view
                        transition={
                            {
                                type: 'spring',
                                stiffness: 60,
                                damping: 25,
                                duration: 2,
                            }
                        }
                        viewport={{ once: true }}>
                        <h1 className='text-[42px] xl:text-[64px] leading-tight'>Turning innovative ideas  into amazing solutions</h1>
                        <p className='text-[20px] md:text-[26px]'>Unlocking the power of innovation: Transforming
                            Ideas into extraordinary Solutions</p>
                    </motion.div>

                    <div className='w-full xl:w-[50%]'>
                        <img src={productAssets.monitor} className='w-full' />
                    </div>
                </div>


                {/* -------------------------- products ------------------------------ */}
                <ProductList />


            </div>
        </div>
    )
}

export default Products
