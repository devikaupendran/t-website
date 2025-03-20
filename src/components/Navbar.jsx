import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const location = useLocation(); // Get the current path

    const [isWhiteColor, setIsWhiteColor] = useState(false);
    const [serviceColor, setServiceColor] = useState(false);
    useEffect(() => {
        const path = location.pathname;
        setIsWhiteColor(path === '/' || path.startsWith('/service/'));
        setServiceColor(path.startsWith('/service/'))
    }, [location.pathname])

    // conditions based on the current path

    const menuColor = location.pathname === '/' ? 'text-white' : 'text-[#ff4a17]';
    const padding = location.pathname === '/' ? 'pt-[10px] lg:pt-[55px]' : 'pt-0';
    const boxShadow = location.pathname === '/' ? 'shadow-none' : 'shadow-xl';

    // Define button styles based on current path and hover state
    const getButtonStyle = () => {
        if (location.pathname === '/') {
            // Home page styling  
            return isHovering
                ? {
                    borderColor: '#fff',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    backgroundColor: '#fff',
                    color: '#ff4a17',
                    transition: 'all 0.3s ease'
                }
                : {
                    borderColor: '#fff',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    backgroundColor: 'transparent',
                    color: '#fff',
                    transition: 'all 0.3s ease'
                };
        } else {
            // Other pages styling
            return isHovering
                ? {
                    borderColor: '#ff4a17',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    backgroundColor: '#ff4a17',
                    color: '#fff',
                    transition: 'all 0.3s ease'
                }
                : {
                    borderColor: '#ff4a17',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    backgroundColor: 'transparent',
                    color: '#ff4a17',
                    transition: 'all 0.3s ease'
                };
        }
    };

    // Function to close the menu with animation
    const closeMenu = () => {
        setIsAnimating(true);
        // Wait for animation to complete before hiding the menu
        setTimeout(() => {
            setIsMenuOpen(false);
            setIsAnimating(false);
        }, 500);
    };

    return (
        // ------------------------------------- navbar -------------------------------------
        <div className={`relative z-10 h-[113px] bg-transparent flex justify-between items-center ${boxShadow} px-6 ${padding}`} >

            {/* -------- Logo ------  */}
            <NavLink to='/'>
                <div>
                    <img src={assets.logo} className='w-25 md:w-[180px] md:h-[55px] xl:w-[100%] cursor-pointer' />
                </div>
            </NavLink>

            {/* -------- Options ------  */}
            <div>
                <ul className={`hidden xl:flex justify-around items-center gap-8  ${isWhiteColor ? 'text-white' : 'text-black'}`}>

                    <NavLink to={'/'}><li>HOME</li> </NavLink>
                    <NavLink to={'/about-us'}><li>ABOUT US</li></NavLink>
                    <NavLink to={'/services'}> <li>SERVICES</li></NavLink>
                    <NavLink to={'/products'}><li>PRODUCTS</li></NavLink>
                    <NavLink to={'/portfolio'}> <li>PORTFOLIO</li></NavLink>
                    <NavLink
                        to={'/contact-us'}
                        className='rounded-xl'
                        style={getButtonStyle()}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    > <li className='p-3'>CONTACT US</li>
                    </NavLink>
                </ul>
            </div>

            {/* -------- menu ------  */}
            <div className='block xl:hidden '>
                <i className={`bx bx-menu text-5xl  ${menuColor} cursor-pointer `} onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
            </div>


            {/* ------ menu options --------  */}
            {
                (isMenuOpen || isAnimating) &&
                (
                    <div className={`absolute top-0 left-0 w-full flex flex-col items-center gap-6  backdrop-blur-md ${serviceColor ? 'text-white' : 'text-black'}`}
                        style={{
                            animation: isAnimating ? 'menuCloseAnimation 0.5s forwards' : 'menuOpenAnimation 0.5s forwards',
                        }}>

                        <div className='w-full relative'>
                            <img src={assets.close} alt="" className='cursor-pointer absolute top-3 right-3 text-5xl' onClick={closeMenu} />
                        </div>

                        <NavLink to={'/'} onClick={closeMenu}
                            className='list-none font-semibold text-[22px] w-full text-center mt-12 p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>
                            <li>HOME</li>
                        </NavLink>

                        <NavLink to={'/about-us'} onClick={closeMenu}
                            className='list-none font-semibold text-[22px] w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>
                            <li>ABOUT US</li>
                        </NavLink>

                        <NavLink to={'/services'} onClick={closeMenu}
                            className='list-none font-semibold text-[22px] w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>
                            <li>SERVICES</li>
                        </NavLink>

                        <NavLink to={'/products'} onClick={closeMenu}
                            className='list-none font-semibold text-[22px] w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>
                            <li>PRODUCTS</li>
                        </NavLink>

                        <NavLink to={'/portfolio'} onClick={closeMenu}
                            className='list-none font-semibold text-[22px] w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>
                            <li>PORTFOLIO</li>
                        </NavLink>

                        <NavLink to={'/contact-us'} onClick={closeMenu}
                            className='list-none font-semibold text-[22px] w-full text-center p-4 hover:bg-orange-400 hover:text-white transition-all cursor-pointer'>
                            <li>CONTACT US</li>
                        </NavLink>
                    </div>
                )
            }

        </div>
    )
}

export default Navbar
