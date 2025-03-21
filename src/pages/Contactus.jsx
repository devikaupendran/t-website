import React from 'react'
import { assets } from '../assets/assets'

const Contactus = () => {
    return (
        <div className='w-full'>

            {/* ------------------------ header ----------------------- */}
            <div className='relative'>
                <img src={assets.contactBanner} alt="" className='w-full md:h-full h-[300px] object-cover' />

                <div className='absolute top-10 2xl:top-20 left-10 flex flex-col gap-4'>
                    <h1 className='text-[#ED7F13] text-[30px] lg:text-[60px] 2xl:text-[75px] pt-10'>CONTACT US</h1>
                    <p className='text-white text-[15px] xl:text-[22px] text-wrap'>Ready to take your business to the next level?</p>
                    <p className='text-white text-[15px] max-w-[500px] xl:max-w-[800px] xl:text-[22px] text-wrap pe-3'>Contact us today to learn more about how Tricta Technologies Pvt. Ltd. can help you achieve your goals with our world-class software solutions.</p>
                </div>
            </div>


            {/* --------------- contact details section ---------------  */}
            <div className="container max-w-[1100px] mx-auto px-4 my-30">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                    {/* -------------- row 1-------------  */}
                    <div className="col-span-1 md:col-span-2 xl:col-span-2 bg-gray-200 p-4 flex justify-center"
                        style={
                            {
                                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                            }
                        }>

                        <div className='flex flex-col xl:flex-row items-center gap-8 p-7'>
                            <img src={assets.location} alt="location" className='w-30 h-30 xl:w-35 xl:h-35' />
                            <div className='flex flex-col gap-3'>

                                <div>
                                    <h1 className='font-semibold text-[24px]'>UAE</h1>
                                    <p className='text-[16px]'>Sharjah Media City, Sharjah, UAE</p>
                                </div>
                                <div>
                                    <h1 className='font-semibold text-[24px]'>INDIA</h1>
                                    <p className='text-[16px]'>4th Floor STPI BUILDING, Technopark Campus, <br />  Kariavattom,  Trivandrum Kerala - 695581</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* -------------- row 2 -------------  */}
                    <div className="col-span-1  bg-gray-200 p-4 text-center"
                        style={
                            {
                                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                            }
                        }>

                        <div className='flex flex-col xl:flex-row  items-center gap-8 p-7'>
                            <img src={assets.phone} alt="phone" className='w-30 h-30 xl:w-35 xl:h-35' />
                            <div>
                                <h1>+91 471 2937788</h1>
                                <h1>+91 944 731 8527</h1>
                            </div>
                        </div>
                    </div>

                    {/* -------------- row 3 -------------  */}
                    <div className="col-span-1 bg-gray-200 p-4 text-center"
                        style={
                            {
                                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                            }
                        }>

                        <div className='flex flex-col xl:flex-row  items-center gap-8 p-7'>
                            <img src={assets.message} alt="message" className='w-30 h-30 xl:w-35 xl:h-35' />
                            <h1>info@tricta.com</h1>
                        </div>
                    </div>
                </div>
            </div>



            {/* --------------- contact form section ---------------  */}
            <div className='mb-70'>
                <section className="">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg border md:px-10 border-gray-200 ">
                        <h2 className="mb-4 tracking-tight text-center text-gray-800 text-[40px] md:text-[60px]">Contact Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 sm:text-xl">Have a question? Whether you’re dealing with a technical issue, looking to provide feedback on one of our services, or want to learn more about our tailored IT solutions for your business, we’re here to help!    </p>
                        <form action="#" className="space-y-8">

                            {/* ------------- First Row: Name and Email ------------- */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input type="text" id="name"
                                        className="shadow-sm bg-[#FBFCFD] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3.5 focus:border-gray-500  outline-0" placeholder="Your name" required />
                                </div>

                                <div>
                                    <input type="email" id="email"
                                        className="shadow-sm bg-[#FBFCFD] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3.5 focus:border-gray-500  outline-0" placeholder="Your email" required />
                                </div>
                            </div>

                            {/* ------------- Second Row: Mobile and Subject ------------- */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div>
                                    <input type="text" id="mobile"
                                        className="shadow-sm bg-[#FBFCFD] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3.5 focus:border-gray-500  outline-0" placeholder="Mobile" required />
                                </div>

                                <div>
                                    <input type="text" id="subject"
                                        className="block w-full text-sm text-gray-900 bg-[#FBFCFD] rounded-lg border border-gray-300 shadow-sm p-3.5 focus:border-gray-500  outline-0" placeholder="Subject" required />
                                </div>
                            </div>

                            {/* ------------- Third Row: Message ------------- */}
                            <div>
                                <textarea id="message" rows="6"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-[#FBFCFD] rounded-lg shadow-sm border border-gray-300 focus:border-gray-500  outline-0  resize-none" placeholder="Leave a comment..."></textarea>
                            </div>

                            {/* <!-- Send Button --> */}
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#FC8A1F]  sm:w-fit cursor-pointer focus:outline-none">Send message</button>
                        </form>
                    </div>
                </section>

            </div>
        </div>
    )
}
export default Contactus
