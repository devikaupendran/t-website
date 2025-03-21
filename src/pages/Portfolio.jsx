import React, { useState } from 'react';
import { portfolioData } from '../assets/portfolio-assets';
import { motion } from 'framer-motion';

const Portfolio = () => {
    // State to manage the selected category
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Function to handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // Filter portfolioData based on selected category
    const filteredPortfolioData = selectedCategory === 'All'
        ? portfolioData
        : portfolioData.filter(product => product.category === selectedCategory);

    // Get unique categories
    const categories = ['All', ...new Set(portfolioData.map(product => product.category))];

    return (
        <div className='w-full mb-30'>
            <div>
                <h1 className='text-center text-[60px] md:text-[75px] pt-10'>Our Portfolio</h1>
            </div>

            {/*---------- Category Filter ----------*/}
            <div className="text-center mt-10">
                <div className="flex flex-column xl:flex-row justify-center gap-5 mx-4">
                    {
                        categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-4 xl:px-7 xl:py-3 rounded-full xl:text-[18px] font-medium cursor-pointer
                                ${selectedCategory === category ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                {category}
                            </button>
                        ))
                    }
                </div>
            </div>

            {/* -------------------- Portfolio Grid with Framer Motion -------------------- */}
            <div className='w-full flex justify-center items-center mt-20 px-10'>
                <motion.div
                    className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-17'
                    layout
                    key={selectedCategory}  // Change key when the category changes to trigger a re-render
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                >
                    {
                        filteredPortfolioData.map((product, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    className="relative group"
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -100 }}
                                    transition={{ duration: 1.5, delay: index * 0.4 }}
                                >
                                    {/* ------------------- Image container with fixed size ------------------- */}
                                    <div className="relative h-[300px] overflow-hidden cursor-pointer rounded-[20px]">
                                        <img
                                            src={product.image}
                                            alt="product image"
                                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                                        />
                                        {/* ------------------- Overlay on hover -------------------*/}
                                        <div className='absolute inset-0 bg-black bg-opacity-100 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex flex-col justify-center items-center text-white'>
                                            <p className="mb-4 text-center text-[20px] p-3">{product.description}</p>
                                            <a href={product.link} target="_blank" rel="noopener noreferrer" className='p-4 bg-white opacity-100 rounded-full'>
                                                <i className='bx bx-link text-[#ff4a17] font-bold text-[35px]'></i>
                                            </a>
                                        </div>
                                        <p className='absolute hidden group-hover:block top-2 left-2 bg-[#ff4a17] bg-opacity-100 text-white rounded-2xl p-3 '>{product.category}</p>
                                    </div>

                                    {/*------------------- Product name -------------------*/}
                                    <div className='m-4 p-3'>
                                        <h1 className="text-center text-xl text-[20px] font-semibold">{product.name}</h1>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </div>
        </div >
    )
}

export default Portfolio;
