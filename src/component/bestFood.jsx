import React from 'react';

import Bestfood from '../assets/bestfood.jpg'

const BestFood = () => {
    return (
        <div className="hero bestfood min-h-screen bg-base-200 ">
        <div className=" hero-content flex-col lg:flex-row-reverse ">
          <img src={Bestfood} className=" sm:w-[300px] md:w-[500px] lg:w-[800px] h-[300px] lg:h-[400px] rounded-lg shadow-2xl p-2" />
          <div className='md:text-center'>
            <h1 className="text-lg font-bold">Who Are We </h1>
            <h1 className="text-2xl font-bold">We Are Providing Best Fast Food</h1>
            <p className="py-6 ">Our commitment to quality is evident in every aspect of our menu. Immerse yourself in a world of flavor with our carefully curated selection of burgers, fries, wraps, and more, each made with the finest ingredients and prepared with precision. We understand the value of your time, and our efficient service ensures that you get your favorite fast food fix without compromising on taste or freshness.</p>
        
          </div>
        </div>
      </div>
    );
};

export default BestFood;