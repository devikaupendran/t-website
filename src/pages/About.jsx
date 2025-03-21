import React from 'react'
import { meetOurTeamArray } from '../assets/about-assets'

const About = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-[40px] md:text-[60px] lg:text-[75px] pt-10'>About us</h1>
                <p className='text-wrap text-[17px] lg:text-[22px]  text-justify text-[#797575] px-7 xl:px-20 my-10'>
                    We,at Tricta Technologies Pvt. Ltd, are a collection of a passionate set of creative individuals,
                    each with their own area of expertise in providing services like Web designing,
                    Web development, Web applications, Mobile applications, E-Commerce Solutions and Hosting Support,
                    serving clients from all major region across the globe. Based out of India, Tricta has centers in the US, Canada,
                    Australia and the Middle East, serving all types of IT requirements ranging from a basic website to complex
                    and robust mobile/web application/products.
                </p>
            </div>

            {/* --------------------------- Our mission, vision and history --------------------------- */}
            <div>

            </div>

            {/* --------------------------- our team --------------------------- */}
            <div className='my-30'>
                <h1 className='text-center text-[35px] md:text-[50px] lg:text-[65px] pb-10'>Meet our Management</h1>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-10 px-3'>
                    {
                        meetOurTeamArray.map((team, index) => {
                            return (
                                <div key={index} className="relative group  rounded-[20px] p-1">
                                    <section className="relative h-[400px] overflow-hidden cursor-pointer rounded-[20px]">
                                        <img src={team.image} alt={`${team.name}`} className='h-full rounded-[20px]' />

                                        {/* ------------------- Overlay on hover ------------------- */}
                                        <div className='absolute inset-0 bg-black bg-opacity-100 opacity-0 group-hover:opacity-60 rounded-[20px] p-0 transition-opacity duration-300 flex flex-col justify-center items-center text-white'>
                                            <p className='p-4 text-justify transform translate-y-[50px] group-hover:translate-y-0 transition-all duration-300'>{team.about}</p>
                                        </div>
                                    </section>

                                    <div className='text-center py-3'>
                                        <h1 className='text-[24px]'>{team.name}</h1>
                                        <p className='text-[#ff4a17] font-semibold'>{team.position}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )
}

export default About
