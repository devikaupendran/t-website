import React from 'react'
import { product1, product3, product4 } from '../assets/product-assets'
import { product2 } from '../assets/product-assets'
import { motion } from 'framer-motion'

const ProductList = () => {
    return (
        <>
            {/* ---------------------------------- PRODUCT 1 ---------------------------------- */}
            <div className='bg-[#7EB3DC] w-full h-[950px] relative overflow-hidden'>

                <div className='absolute left-0 top-30 h-full'>
                    <img src={product1.backgroundImage} alt="" className=" w-full h-full object-contain opacity-50 z-0 scale-120" />
                </div>

                <div className='flex justify-center items-center h-full relative z-10 gap-20'>

                    {/* ----------- Image ----------- */}
                    <motion.div className='relative z-10 shadow-2xl rounded-[20px]' style={{ boxShadow: 'rgba(0, 0, 0, 0.55) 0px 3px 8px' }}
                        initial={{ x: '-100%', opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={
                            {
                                type: 'spring',
                                stiffness: 50,
                                damping: 25,
                                duration: 2,
                            }
                        }
                        viewport={{ once: true }}
                    >
                        <img src={product1.image} alt="" className='max-w-[800px]  object-contain opacity-100 rounded-[20px]' />
                    </motion.div>

                    {/* ----------- card ----------- */}
                    <motion.div className='relative z-10 max-w-[550px] h-[600px] bg-[#186CBA] p-7 border-2 border-white rounded-[20px]'

                        initial={{ x: '100%', opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={
                            {
                                type: 'spring',
                                stiffness: 50,
                                damping: 25,
                                duration: 2,
                                delay: 0.5
                            }
                        }
                        viewport={{ once: true }}
                    >
                        <h1 className="text-white text-[55px] font-semibold">{product1.heading.line1}</h1>
                        <h1>{product1.heading.line2}</h1>
                        <p className="text-white text-justify leading-8 mt-5">{product1.description}</p>
                    </motion.div>
                </div>
            </div >



            {/* ---------------------------------- PRODUCT 2 ---------------------------------- */}
            <div className='bg-[#FBD7C5] w-full h-[1100px] relative overflow-hidden pt-30' >
                <div className='flex justify-center items-center relative z-10 gap-20'>

                    {/* ----------- card ----------- */}
                    <motion.div className='relative z-10 max-w-[550px] h-[600px] bg-[#f88a57] p-7 mt-10 border-2 border-white rounded-[20px]'
                        initial={{ x: '-100%', opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={
                            {
                                type: 'spring',
                                stiffness: 50,
                                damping: 25,
                                duration: 2,
                            }
                        }
                        viewport={{ once: true }}
                    >
                        <h1 className="text-white text-[50px]">{product2.heading.line1}</h1>
                        <h1 className='text-[40px] text-white'>{product2.heading.line2}</h1>
                        <p className="text-white text-justify leading-8 mt-5">{product2.description}</p>
                    </motion.div>

                    {/* ----------- Image ----------- */}
                    <motion.div className='relative z-10 flex rounded-[20px] mt-45' style={{ boxShadow: 'rgba(0, 0, 0, 0.55) 0px 3px 8px' }}

                        initial={{ x: '100%', opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={
                            {
                                type: 'spring',
                                stiffness: 50,
                                damping: 25,
                                duration: 5,
                                delay: 0.2
                            }
                        }
                        viewport={{ once: true }}
                    >
                        <img src={product2.image} alt="" className='max-w-[800px] object-contain opacity-100 rounded-[20px]' />
                    </motion.div>

                    <div className='absolute bottom-[-52%] left-68 z-20'>
                        <img src={product2.backgroundImage} alt="" className="object-contain w-[600px] h-[600px]" />
                    </div>
                </div>
            </div >



            {/* ---------------------------------- PRODUCT 3 ---------------------------------- */}
            <div className='bg-[#FDFDFD] w-full h-[1100px] relative overflow-hidden p-8' >
                <div className='flex flex-col justify-end items-end relative z-10 gap-5'>

                    {/* ----------- Image ----------- */}
                    <motion.div className='relative z-10 flex rounded-[20px] me-30 ' style={{ boxShadow: 'rgba(0, 0, 0, 0.55) 0px 3px 8px' }}
                        initial={{ x: '100%', opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={
                            {
                                type: 'spring',
                                stiffness: 50,
                                damping: 25,
                                duration: 5,
                            }
                        }
                        viewport={{ once: true }}
                    >
                        <img src={product3.image} alt="" className='max-w-[1000px] w-[100%] h-[450px] object-contain opacity-100 rounded-[20px]' />
                    </motion.div>

                    {/* ----------- card ----------- */}
                    <motion.div className='relative z-10 max-w-[550px] p-7 h-[500px] bg-[#F4F4F4] me-30 mt-10 border-2 border-gray-300 rounded-[20px]'
                        initial={{ y: '70%', opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={
                            {
                                type: 'spring',
                                stiffness: 50,
                                damping: 25,
                                duration: 5,
                            }
                        }
                        viewport={{ once: true }}
                    >

                        <h1 className=" text-[50px]">{product3.heading.line1}</h1>
                        <h1 className='text-[40px]'>{product3.heading.line2}</h1>
                        <p className="text-justify leading-8 mt-5">{product3.description}</p>

                        <div className='absolute left-[-110%] bottom-4'>
                            <img src={product3.backgroundImage} alt="" className=" w-[600px] h-[610px] object-contain  z-0" />
                        </div>

                    </motion.div>

                </div>
            </div >

            {/* ---------------------------------- PRODUCT 4 ---------------------------------- */}
            <div className='bg-[#9EE4E3] w-full h-[1000px] relative overflow-hidden p-8' >
                <div className='flex'>

                    <div className='w-[60%] flex flex-col justify-end items-end gap-10'>
                        {/* ----------- Image ----------- */}
                        <motion.div className='rounded-[20px]'
                            initial={{ y: '100%', opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={
                                {
                                    type: 'spring',
                                    stiffness: 50,
                                    damping: 25,
                                    duration: 5,
                                }
                            }
                            viewport={{ once: true }}
                        >
                            <img src={product4.image} alt="" className='max-w-[800px] w-[100%] h-[450px] object-contain rounded-[20px]' />
                        </motion.div>

                        {/* ----------- card ----------- */}
                        <motion.div className='relative z-10 max-w-[550px] h-[400px] bg-[#00cac4] p-7 border-2 border-white rounded-[20px]'
                            initial={{ y: '100%', opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={
                                {
                                    type: 'spring',
                                    stiffness: 50,
                                    damping: 25,
                                    duration: 5,
                                }
                            }
                            viewport={{ once: true }}
                        >
                            <h1 className="text-white text-[55px] font-semibold">{product4.heading.line1}</h1>
                            <h1>{product1.heading.line2}</h1>
                            <p className="text-white text-justify leading-8 mt-5">{product4.description}</p>
                        </motion.div>
                    </div>

                    <div className='w-[40%] flex items-center'>
                        <img src={product4.backgroundImage} alt="" />
                    </div>
                </div>
            </div >

        </>

    )
}

export default ProductList
