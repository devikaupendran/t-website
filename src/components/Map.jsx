import React from 'react';
import { assets } from '../assets/assets';

const Map = () => {
    return (
        <div className='flex justify-center mb-20'>
            <div className="w-[90%]  grid  lg:grid-cols-2 gap-10 justify-center">

                {/* -------------- row 1-------------  */}
                <div className="col-span-1 w-[70%] mx-auto md:col-span-2 xl:col-span-2 bg-[#FDF9ED] p-4 flex justify-center"
                    style={
                        {
                            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                        }
                    }>

                    <div className='flex flex-col md:flex-row  xl:items-center gap-8 xl:p-7'>
                        <img src={assets.location} alt="location" className='w-20 h-20 xl:w-35 xl:h-35' />
                        <div className='flex flex-col justify-center gap-3'>

                            <div>
                                <h1 className='font-semibold text-[24px]'>UAE</h1>
                                <p className='text-[12px] xl:text-[16px]'>Sharjah Media City,Sharjah, UAE</p>
                            </div>
                            <div>
                                <h1 className='font-semibold text-[24px]'>INDIA</h1>
                                <p className='text-[12px] xl:text-[16px] text-wrap'>4th Floor STPI BUILDING, Technopark Campus, Kariavattom, Trivandrum Kerala 695581</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ---------------------------- location: Sharjah ---------------------------- */}
                <section className='w-full border border-gray-200 p-4 hover:shadow-lg transition-all ease-in duration-300'>
                    <div>
                        <h1 className='font-semibold text-[24px]'>UAE</h1>
                        <p className='text-[16px]'>Sharjah Media City, Sharjah, UAE</p>
                    </div>
                    <div className="w-full h-[300px]  map-responsive">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.451815392016!2d55.424636075430016!3d25.356169777609004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f59cac5c481b3%3A0xac52a2c2618d0c2c!2sTricta%20Technologies%20PVT%20LLC!5e0!3m2!1sen!2sin!4v1742546396909!5m2!1sen!2sin"
                            className="w-full h-64"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>

                {/* ---------------------------- location: India  ---------------------------- */}
                <section className='w-full border border-gray-200 p-4 hover:shadow-lg transition-all ease-in duration-300'>
                    <div>
                        <h1 className='font-semibold text-[24px]'>INDIA</h1>
                        <p className='text-[16px] text-wrap'> Trivandrum Kerala, INDIA</p>
                    </div>
                    <div className="w-full h-[300px] map-responsive ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1780236076606!2d76.96479947505956!3d8.482064491559075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05baff744b0e29%3A0xd607b7537447ce9c!2sTricta%20Technologies%20PVT!5e0!3m2!1sen!2sin!4v1742547790292!5m2!1sen!2sin"
                            className="w-full h-64"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Map;
