import React from 'react'
import { useParams } from 'react-router-dom'
import { servicesCardDetails } from '../assets/servicesData'
import { banners } from '../assets/servicesData'

const ServiceDetails = () => {
    const { serviceId } = useParams();  // Get serviceId from the URL
    const service = servicesCardDetails[serviceId];  // Get the corresponding service data

    if (!service) {
        return <div>Service not found!</div>;
    }

    return (

        <div className='w-full'>
            <div className='h-130 w-full relative'>
                <img src={banners.mobileBanner} alt="" className='h-full w-full' />

                <div className='w-70 h-70 rounded-full   flex items-center justify-center mt-10  absolute'
                    style={
                        {
                            bottom: '-100px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }
                    } >
                    <img src={service.imageGif} alt="" className='w-60 h-60 rounded-full m-4' />
                </div>
            </div>


            <div className='text-[2xl]'>
                <h1>{service.heading}</h1>
            </div>
        </div>

    );
}

export default ServiceDetails
