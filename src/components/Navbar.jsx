import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // Get the current path

    // text color based on the current path
    const textColor = location.pathname === '/' ? 'text-white' : 'text-black';
    const menuColor = location.pathname === '/' ? 'text-white' : 'text-[#ff4a17]';
    const padding = location.pathname === '/' ? 'pt-[10px] lg:pt-[55px]' : 'pt-0';
    const boxShadow = location.pathname === '/' ? 'shadow-none' : 'shadow-xl';

    // Function to close the menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

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

                    <NavLink to={'/'}><li>HOME</li> </NavLink>
                    <NavLink to={'/about-us'}><li>ABOUT US</li></NavLink>
                    <NavLink to={'/services'}> <li>SERVICES</li></NavLink>
                    <NavLink to={'/products'}><li>PRODUCTS</li></NavLink>
                    <NavLink to={'/portfolio'}> <li>PORTFOLIO</li></NavLink>
                    <NavLink to={'/contact-us'}> <li>CONTACT US</li></NavLink>
                </ul>
            </div>

            {/* -------- menu ------  */}
            <div className='block xl:hidden '>
                <i className={`bx ${isMenuOpen ? 'bx-window-close' : 'bx-menu'} text-5xl ${menuColor} cursor-pointer `} onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
            </div>


            {/* ------ menu options --------  */}
            <div className={`absolute top-23 left-0  w-full flex flex-col items-center gap-6 transform transition-transform 
                ${isMenuOpen ? "block" : "hidden"} bg-white text-black`}
                style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}>

                <NavLink to={'/'} onClick={closeMenu}
                    className='list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>
                    <li>HOME</li>
                </NavLink>

                <NavLink to={'/about-us'} onClick={closeMenu}
                    className='list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>
                    <li >ABOUT US</li>
                </NavLink>

                <NavLink to={'/services'} onClick={closeMenu}
                    className='list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>
                    <li>SERVICES</li>
                </NavLink>

                <NavLink to={'/products'} onClick={closeMenu}
                    className='list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>
                    <li>PRODUCTS</li>
                </NavLink>

                <NavLink to={'/portfolio'} onClick={closeMenu}
                    className='list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>
                    <li>PORTFOLIO</li>
                </NavLink>

                <NavLink to={'/contact-us'} onClick={closeMenu}
                    className='list-none w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>
                    <li>CONTACT US</li>
                </NavLink>
            </div>

        </div>
    )
}

export default Navbar
