import React from 'react'
import { portfolioArray } from '../assets/assets'

const Portfolio = () => {
    return (
        <div className='w-full h-max mb-60 px-10 '>

            <div className='w-max pt-[63px] px-10  lg:px-[80px] xl:px-[6%]'>
                <h2 className='text-[#ED7F13] bg-[#ebebeb] shadow-sm p-3 px-6 rounded-lg text-[20px] md:text-[36px]'>PORTFOLIO</h2>
            </div>

            {/* ----------- sub-heading ----------- */}
            <div className='pt-[38px] px-10 lg:px-[80px] xl:px-[6%]'>
                <h1 className='text-[38px] md:text-[64px] xl:text-[80px] text-[#5B5B5B]'>Our Selected Works</h1>
            </div>

            {/* ----------- portfolio container ------------  */}
            <div className='w-full h-max flex justify-center mt-[30px]'>

                <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 gap-y-40 '>
                    {
                        portfolioArray.map((portfolio, index) => {
                            return (

                                <div className='flex justify-center relative group cursor-pointer custom-portfolio-container'>

                                    {/* --------------- portfolio image --------------- */}

                                    <div className='w-[450px] h-[320px] rounded-2xl overflow-hidden'>
                                        <img src={portfolio.image} className='w-full h-full group-hover:scale-120 transition-all ease-in-out duration-800 object-contain' />
                                    </div>

                                    {/* --------------- Sub-box container  --------------- */}

                                    <div className='w-[80%] py-6 bg-white  shadow-2xs absolute bottom-[-100px] flex flex-col items-center rounded-2xl opacity-95'
                                        style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>

                                        <div className='w-full relative'>

                                            {/* --------------- ICON --------------- */}
                                            <div className='w-25 h-25 border-6 border-white bg-[#ff4a17] flex items-center justify-center rounded-full absolute top-0
                                                group-hover:border-1 group-hover:border-[#ff4a17] group-hover:bg-white transition-all ease-in duration-400'
                                                style={
                                                    {
                                                        top: '-50px',
                                                        left: '50%', 
                                                        transform: 'translateX(-50%)',
                                                    }

                                                }>

                                                <i className={`bx ${portfolio.icon} text-white text-6xl p-3 group-hover:text-[#ff4a17]`}></i>

                                            </div>

                                            {/* --------------- HEADINGS --------------- */}
                                            <div className='flex flex-col gap-3 mt-14'>
                                                <p className='group-hover:text-[#ff4a17] text-4xl font-semibold text-center'>{portfolio.heading}</p>
                                                <p className='category text-2xl text-center'>{portfolio.category}</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div >


    )
}

export default Portfolio
