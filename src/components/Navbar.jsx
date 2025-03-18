import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // Get the current path

    // text color based on the current path
    const textColor = location.pathname === '/' ? 'text-white' : 'text-black';
    const padding = location.pathname === '/' ? 'pt-[10px] lg:pt-[55px]' : 'pt-0';
    const boxShadow = location.pathname === '/' ? 'shadow-none' : 'shadow-xl';

    return (
        // ------------------------------------- navbar -------------------------------------
        <div className={`relative z-10 h-[113px] bg-transparent flex justify-between items-center ${boxShadow} px-6 ${padding}`} >

            {/* -------- Logo ------  */}
            <NavLink to='/'>
                <div>
                    <img src={assets.logo} className='w-25 md:w-[180px] md:h-[55px] cursor-pointer' />
                </div>
            </NavLink>

            {/* -------- Options ------  */}
            <div>
                <ul className={`hidden xl:flex justify-around gap-8 font-semibold ${textColor}`}>
                    <NavLink to='/'><li>HOME</li> </NavLink>
                    <li>ABOUT US</li>
                    <li>SERVICES</li>
                    <NavLink to='/products'><li>PRODUCTS</li></NavLink>
                    <li>PORTFOLIO</li>
                    <li>CONTACT US</li>
                </ul>
            </div>

            {/* -------- menu ------  */}
            <div className='block xl:hidden '>
                <i className={`bx ${isMenuOpen ? 'bx-window-close' : 'bx-menu'} text-5xl ${textColor} cursor-pointer `} onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
            </div>


            {/* ------ menu options --------  */}
            <div className={`absolute top-23 left-0 sm:hidden  w-full flex flex-col items-center gap-6 transform transition-transform 
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
