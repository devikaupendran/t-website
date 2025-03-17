import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        // ------------------------------------- navbar -------------------------------------
        <div className='relative z-10 h-[100px] bg-transparent flex justify-between items-center px-6' >

            {/* -------- Logo ------  */}
            <NavLink to='/'>
                <div> <img src={assets.logo} className='w-[180px] h-[55px] cursor-pointer' /> </div>
            </NavLink>

            {/* -------- Options ------  */}
            <div>
                <ul className='hidden xl:flex justify-around gap-8 font-semibold'>
                    <NavLink to='/'><li>HOME</li> </NavLink>
                    <li>ABOUT US</li>
                    <li>SERVICES</li>
                    <li>PRODUCTS</li>
                    <li>PORTFOLIO</li>
                    <li>CONTACT US</li>
                </ul>
            </div>

            {/* -------- menu ------  */}
            <i className={`bx ${isMenuOpen ? 'bx-window-close' : 'bx-menu'} xl:invisible visible text-5xl cursor-pointer `} onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

            {/* ------ menu options --------  */}
            <div className={`absolute top-28 left-0 sm:hidden  w-full flex flex-col items-center gap-6 transform transition-transform 
                ${isMenuOpen ? "opacity-100" : "opacity-0"} bg-white text-black`}
                style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>

                <NavLink to='/' className='list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>
                    <li>HOME</li>
                </NavLink>
                <li className='list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>ABOUT US</li>
                <li className='list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>SERVICES</li>
                <li className='list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>PRODUCTS</li>
                <li className='list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>PORTFOLIO</li>
                <li className='list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>CONTACT US</li>

            </div>

        </div>
    )
}

export default Navbar
