import React from 'react'
import { assets } from '../assets/assets'
import Banner from '../components/Banner'

const Products = () => {
    return (
        <div className='w-full'>

            <div className='h-[100vh]'>
                <Banner />
            </div>




            <div>
                <h1 className='text-center text-[70px] md:text-[90px] mt-10'>Our Products</h1>

                <div className='w-full  px-[4%] md:px-[6%] xl:px-[4%] flex flex-col gap-20  xl:flex-row xl:gap-10  justify-between my-[150px]'>
                    <div className=' w-full xl:w-[50%] flex flex-col gap-7'>
                        <h1 className='text-[42px] xl:text-[64px] leading-tight font-semibold'>Turning innovative ideas  into amazing solutions</h1>
                        <p className='text-[20px] md:text-[26px]'>Unlocking the power of innovation: Transforming
                            Ideas into extraordinary Solutions</p>
                    </div>

                    <div className='w-full xl:w-[50%]'>
                        <img src={assets.monitor} className='w-full' />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Products
