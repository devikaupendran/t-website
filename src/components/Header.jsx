import React from 'react'

import { assets } from '../assets/assets'
import HeaderCarousel from './carousel/HeaderCarousel'

const Header = () => {
    return (

        <div className='w-full h-max pb-10 mb-30'>
            <div className='absolute top-0 right-0 overflow-hidden'>
                <img src={assets.headerCircle} alt="" width={750} className="circle-animation w-[250px]  md:w-[450px] lg:w-[750px]" />
            </div>

            <div className='w-full'>
                <HeaderCarousel/>
            </div>
        </div>

    )
}

export default Header