import React from 'react'

import { assets } from '../assets/assets'
import Carousel from './Carousel'

const Header = () => {
    return (

        <div className='w-full h-max pb-10 mb-30 overflow-hidden'>
            <div className='absolute top-0 right-0'>
                <img src={assets.vector} alt="" width={750} className="circle-animation w-[250px]  md:w-[450px] xl:w-[750px]" />
            </div>

            <div className='w-full'>
                <Carousel />
            </div>
        </div>

    )
}

export default Header