import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carousel.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import { productCarousalSlides } from '../../assets/product-assets';

const HeaderCarousel = () => {

    // Set up auto-slide
    useEffect(() => {
        const intervalId = setInterval(() => {
            const swiper = document.querySelector('.swiper').swiper;
            swiper.slideNext();
        }
            , 6000);

        return () => clearInterval(intervalId);
    }, []);
    // Create refs for the navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="swiper-container relative  md:w-[68%] rounded-[20px] left-0 top-10  md:left-6 xl:left-20 xl:top-15 2xl:top-17">
            <Swiper
                slidesPerView= {1}
                spaceBetween={30}
                loop= {true}
                pagination={
                    {
                        clickable: true,
                        bulletActiveClass: 'swiper-pagination-bullet-active orange-bullet'
                    }
                }
                navigation={false} // Disable default navigation
                modules={[Pagination, Navigation]}
                className="mySwiper rounded-[20px]"
            >
                {productCarousalSlides.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={slide} alt={`Slide ${index}`} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* Custom navigation buttons (outside Swiper but inside container) */}
            <div
                ref={prevRef}
                className="hidden  custom-nav-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 md:w-10 md:h-10  bg-white/80 rounded-full md:flex items-center justify-center shadow-md cursor-pointer"
                onClick={
                    () => {
                        const swiper = document.querySelector('.swiper').swiper;
                        swiper.slidePrev();
                    }
                }
            >
                <i className="bx bx-chevron-left text-2xl"></i>
            </div>

            <div
                ref={nextRef}
                className="hidden custom-nav-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 md:w-10 md:h-10  bg-white/80 rounded-full md:flex items-center justify-center shadow-md cursor-pointer"
                onClick={
                    () => {
                        const swiper = document.querySelector('.swiper').swiper;
                        swiper.slideNext();
                    }
                }
            >
                <i className="bx bx-chevron-right text-2xl"></i>
            </div>
        </div>
    );
}
export default HeaderCarousel