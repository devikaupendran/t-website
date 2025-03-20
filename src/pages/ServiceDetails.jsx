import React from 'react'
import { useParams } from 'react-router-dom'
import { servicesCardDetails } from '../assets/service-assets' 
import { serviceAssets } from '../assets/service-assets'

const ServiceDetails = () => {
    const { serviceId } = useParams();  // Get serviceId from the URL
    const service = servicesCardDetails[serviceId];  // Get the corresponding service data

    if (!service) {
        return <div>Service not found!</div>;
    }

    return (

        <div className='w-full'>

            {/* ----------------------------------- image section -----------------------------------  */}
            <div className='h-135 w-full relative bg-[#28323a]'>
                <div className='w-full h-full opacity-20' style={
                    {
                        backgroundImage: `url(${serviceAssets.serviceBanner})`,
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',    
                        backgroundRepeat: 'no-repeat'
                    }
                }></div>

                {/* ---------- heading ------------- */}
                <div className=' absolute' style={
                    {
                        top: '50%',
                        left: '50%',
                        transform: 'translateX(-50%) translateY(-50%)'
                    }
                }>
                    <h1 className='text-5xl font-semibold text-white'>{service.heading}</h1>
                </div>

                {/* -------------- icon image -------------  */}
                <div className='w-60 h-60 rounded-full bg-red-400 flex items-center justify-center  absolute'
                    style={
                        {
                            left: '50%',
                            transform: 'translateX(-50%) translateY(-50%)',
                        }
                    } >
                    <div >
                        <img src={service.imageGif} alt="" className='w-[100%] h-[100%] rounded-full  object-cover' />
                    </div>
                </div>
            </div>

            {/* ----------------------------------- description -----------------------------------  */}
            <div className='w-full flex justify-center '>
                <p className='mt-40 text-[22px] text-[#6a6a6a] max-w-[800px]'>{service.description}</p>
            </div>

        </div>

    );
}

export default ServiceDetails
