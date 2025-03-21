import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { servicesCardDetails } from '../assets/service-assets'
import { serviceAssets } from '../assets/service-assets'

const ServiceDetails = () => {
    const { serviceId } = useParams();  // Get serviceId from the URL
    const service = servicesCardDetails[serviceId];  // Get the corresponding service data

    if (!service) {
        return <div>Service not found!</div>;
    }

    return (

        <div className='w-full absolute top-0 '>

            {/* ----------------------------------- image section -----------------------------------  */}
            <div className='h-[100vh] w-[100%] relative bg-[#000000]'>
                <div className='w-full h-full opacity-20' style={
                    {
                        backgroundImage: `url(${serviceAssets.serviceBanner})`,
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }
                }></div>

                {/* ----------------------------------- heading and description -----------------------------------  */}
                <NavLink to={'/services'} className='absolute z-20 top-27 right-10 bg-white rounded-full w-10 h-10 p-3 flex justify-center items-center' >
                    <i className='bx bx-left-arrow-alt' style={{ color: 'black', fontSize: '28px', }}></i>
                </NavLink>

                <div className='bg-transparent absolute top-[20%] overflow-scroll text-white px-10 h-[80vh] custom-service lg:px-30'>
                    <div className='flex flex-col gap-10 mt-10'>
                        <h1 className='text-[40px] md:text-[60px] lg:text-[75px] font-semibold  '>{service.heading}</h1>
                        <p className='w-full text-[17px] lg:text-[22px]  text-justify text-[#cac0c0] '>{service.description}</p>

                        {/* ------------------- what we offer section --------------  */}
                        <div className='flex flex-col gap-10 lg:flex-row lg:gap-20 mt-20 h-[400px]'>

                            <div className='w-full lg:w-[70%] flex flex-col gap-10'>
                                <h2 className='text-[37px] font-bold'>What we offer ?</h2>
                                <p className='leading-8 text-justify'>{service.offer}</p>
                            </div>

                            <div className='w-full  lg:w-[30%]'>
                                <img src={service.image} alt="service" className='object-cover rounded-[20px]' />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
}

export default ServiceDetails
