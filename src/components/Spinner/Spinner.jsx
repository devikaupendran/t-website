import React from 'react'
import './Spinner.css'
import { assets } from '../../assets/assets'

const Spinner = () => {
    return (
        <div className='spinner center'>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <img src={assets.logo} alt="" />
            {/* <span>Loading ...</span> */}
        </div>
    )
}

export default Spinner
