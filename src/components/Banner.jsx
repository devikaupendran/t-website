
import React from 'react'
import { productAssets } from '../assets/product-assets'

const Banner = () => {
    return (


        <div className='banner flex item-center justify-center  w-[100%] overflow-x-auto h-195 '
            style={{ backgroundImage: `url(${productAssets.productBanner})`, backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        </div>
    )
}

export default Banner
