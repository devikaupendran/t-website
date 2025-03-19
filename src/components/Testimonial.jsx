import React, { useEffect, useState } from 'react';
import { testimonialArray } from '../assets/assets';
import { assets } from '../assets/assets';

const Testimonials = () => {

    const [current, setCurrent] = useState(0);

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrent(prevCurrent => (prevCurrent === testimonialArray.length - 1 ? 0 : prevCurrent + 1));
    };

    // Set up auto-slide
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='w-full pb-2 bg-[#f2f2f2]'>

            {/* ----------------- heading ----------------  */}
            <div className='ps-[40px] sm:px-[88px]'>
                <div className='w-max pt-[63px]'>
                    <h2 className='text-[#ED7F13] bg-[#ebebeb] shadow-sm p-3 px-6 rounded-lg text-[20px] sm:text-[36px]'>TESTIMONIALS</h2>
                </div>

                <div className='pt-[38px]'>
                    <h1 className='text-[30px] md:text-[40px] xl:text-[56px] text-[#5B5B5B]'>What our client's say</h1>
                </div>
            </div>

            {/* -------------------- carousel -------------------- */}
            <div className='w-full h-[500px] md:h-[650px]  flex justify-center items-center relative mt-[40px]'>
                <div className='message overflow-hidden w-[95%] md:w-[68%] h-[100%]  bg-white  relative shadow-3xl'>
                    <div className={`flex transition ease-in-out duration-700 w-full h-[83%]`} style={{ transform: `translateX(-${current * 100}%)` }}>
                        {
                            testimonialArray.map((item, index) => {
                                return (
                                    <div key={index} className='flex flex-col gap-3 flex-shrink-0  justify-center items-center w-full h-full px-4'>

                                        {/* ----------- 1st Section ----------- */}
                                        <section className='flex gap-4 items-center  '>
                                            <div>
                                                <img src={assets.testimonialUserIcon} className=' w-15 h-15 md:w-[120px] md:h-[120px] rounded-full' alt="User" />
                                            </div>

                                            <div className='flex flex-col gap-2 justify-center'>
                                                <h1 className='text-[#ED7F13] text-[23px] md:text-[36px] font-semibold'>{item.name}</h1>
                                                <div className='flex justify-center items-center gap-2'>
                                                    <i className='bx bxs-building text-[26px] text-[#797979]'></i>
                                                    <span className='text-[14px] md:text-[20px] text-[#797979]'>{item.company}</span>
                                                </div>
                                            </div>
                                        </section>

                                        {/* ----------- 2nd Section ----------- */}
                                        <section className='mt-3 md:px-6 md:mt-5 description'>
                                            <p className='italic text-[12px] md:text-[16px] lg:text-[20px] font-light text-justify'>{item.comment}</p>
                                        </section>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* ---------------------------- Slide indicators ---------------------------- */}
                    <div className='absolute bottom-35 sm:bottom-45 left-0 right-0 sm:left-6'>
                        <div className='flex items-center justify-center gap-2'>
                            {
                                testimonialArray.map((_, i) => (
                                    <div key={i} className={`transition-all w-2 h-2 md:w-3 md:h-3 rounded-full ${current === i ? 'bg-[#ED7F13]' : 'bg-gray-300'}`}></div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Testimonials;
