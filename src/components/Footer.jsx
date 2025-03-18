import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'


const Footer = () => {

    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setYear(new Date().getFullYear());
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='w-full md:h-[390px]' style={{ backgroundImage: `url(${assets.footerBgImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className='px-[30px] lg:px-[113px] pt-[30px]'>

                {/* ------------- 1st section --------------  */}
                <div className='flex flex-col gap-3'>
                    <img src={assets.logo} alt="" className='w-45 sm:w-[158px] sm:h-[50px]' />
                    <p className='mt-[20px] sm:text-[20px] font-medium'>Need a free review and quote on your IT needs? <br />
                        Glad to help.</p>

                    <div className='my-1 sm:mt-[10px]'>
                        <button className='p-2 px-4 sm:text-[24px] cursor-pointer text-white bg-[#ED7F13] border  hover:scale-105 transition-all duration-600 ease-in-out rounded-[10px]'>
                            Contact us
                        </button>
                    </div>
                </div>

                {/* ------------- 2nd section --------------  */}
                <div className='flex md:justify-between items-center gap-4 my-2 md:my-[20px] '>
                    <div className='flex gap-4'>
                        <div>
                            <i className='bx bxl-instagram text-[22px] sm:text-[30px] p-1.5 rounded-full hover:text-[#D62976] hover:bg-white cursor-pointer hover:scale-120 transition ease-in duration-300'></i>
                        </div>
                        <div>
                            <i className='bx bxl-facebook text-[22px] sm:text-[30px]  p-1.5 rounded-full hover:text-[#1877F2] hover:bg-white cursor-pointer hover:scale-120 transition ease-in duration-300' ></i>
                        </div>
                        <div>
                            <i className='bx bxl-linkedin text-[22px] sm:text-[30px]  p-1.5 rounded-full hover:text-[#0077B5] hover:bg-white cursor-pointer hover:scale-120 transition ease-in duration-300' ></i>
                        </div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <i className='bx bxl-gmail text-[22px] sm:text-[30px] p-1.5 rounded-full hover:text-[#d62929] hover:bg-white cursor-pointer hover:scale-120 transition ease-in duration-300'></i>
                        <span className='hidden md:block md:text-[20px] font-medium tracking-widest'>info@tricta.com</span>
                    </div>

                    <div className='flex items-center gap-2'>
                        <i className='bx bxs-phone text-[22px] sm:text-[30px] p-1.5 rounded-full hover:text-[green] hover:bg-white cursor-pointer hover:scale-120 transition ease-in duration-300' ></i>
                        <span className='hidden md:block md:text-[20px] md:font-medium tracking-widest'>944 731 8527</span>
                    </div>
                </div>

                <hr />

                <div className='text-center p-3'>
                    <p  className='text-[11px] md:text[20px] lg:[text-25px]'>&copy; {year} Tricta Technologies. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
