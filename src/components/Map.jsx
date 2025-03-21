import React from 'react';
import { assets } from '../assets/assets';

const Map = () => {
    return (
        <div className='flex justify-center mb-20'>
            <div className="w-[80%]  grid  lg:grid-cols-2 gap-10 justify-center">

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
