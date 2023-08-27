'use client'
import React, { useState } from 'react';
import PriceSlider from '../priceSlider';

const PriceRange = () => {
    const [priceRange, setPriceRange] = useState([0, 1000]);

    const handlePriceChange = (value: any) => {
        setPriceRange(value);
    };

    const handleMinInputChange = (e: any) => {
        const minValue = parseInt(e.target.value);
        setPriceRange([minValue, priceRange[1]]);
    };

    const handleMaxInputChange = (e: any) => {
        const maxValue = parseInt(e.target.value);
        setPriceRange([priceRange[0], maxValue]);
    };

    return (
        <div className="mx-auto py-8 flex flex-col  items-center">
            <div className="flex space-x-4 my-4">
                <input                    
                    type="number"
                    value={priceRange[0]}
                    onChange={handleMinInputChange}
                    className="w-24 h-12 px-2 bg-gray-100 text-black"
                />
                <span className='flex items-center'>-</span>
                <input                   
                    type="number"
                    value={priceRange[1]}
                    onChange={handleMaxInputChange}
                    className="w-24 h-12 px-2  bg-gray-100 text-black"
                />
            </div>
            <div className='mx-auto'>
                <PriceSlider
                    minValue={0}
                    maxValue={1000} // Change this to your desired max price value
                    value={priceRange}
                     onChange={handlePriceChange}
                />
            </div>



        </div>
    );
};

export default PriceRange;
