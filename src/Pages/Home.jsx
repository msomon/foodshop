import React from 'react';
import About from '../component/About';
import Foods from '../component/foods';
import Contact from '../component/Contact';
import { NavLink } from 'react-router-dom';
import Reviews from '../component/reviews';

const Home = () => {



  return (

    <div>
    
    <div className=''>
      <About></About>
      <Foods></Foods>
      <Reviews></Reviews>
      <Contact></Contact>
    </div>
    </div>
  );
};

export default Home;