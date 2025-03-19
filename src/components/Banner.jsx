
import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
    return (


        <div className='flex item-center justify-center  w-[100%]   h-195'
            style={{ backgroundImage: `url(${assets.productBanner})`, backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        </div>
    )
}

export default Banner
