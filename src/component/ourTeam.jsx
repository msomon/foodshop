import React, { useRef, useState } from 'react';
import Img from "../assets/team.jpg"
import Img2 from "../assets/team2.webp"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './ourTeam.css';

// import required modules
import { Pagination, EffectCoverflow } from 'swiper/modules';

const OurTeam =()=> {
  return (
    <div className='mt-28 mb-20'>
        <div>
            <h1 className='text-center text-4xl text-primary font-bold mb-6'>Our Team</h1>
        </div>
      <Swiper
       effect={'coverflow'}
       grabCursor={true}
       centeredSlides={true}
       slidesPerView={'auto'}
       coverflowEffect={{
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       }}
       pagination={true}
       modules={[EffectCoverflow, Pagination]}
       className="mySwiper"
      >
       
        <SwiperSlide>
         
    <div className="card  bg-base-100 shadow-xl">
   <figure className="px-10 pt-10">
    <img src={Img} alt="Team member" className="rounded-xl h-32 w-24" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Jimmey Aenderson</h2>
    <h2 className="text-lg">Chief Executive</h2>
   
  </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
         
    <div className="card  bg-base-100 shadow-xl">
   <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Team member" className="rounded-xl h-32 w-24" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Harry Boy</h2>
    <h2 className="text-lg"> Executive</h2>
   
  </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
         
    <div className="card  bg-base-100 shadow-xl">
   <figure className="px-10 pt-10">
    <img src={Img2} alt="Team member" className="rounded-xl h-32 w-24" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Lokisoon Fui</h2>
    <h2 className="text-lg">Chief Executive</h2>
   
  </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
         
    <div className="card  bg-base-100 shadow-xl">
   <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Team member" className="rounded-xl h-32 w-24" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Ander Betis</h2>
    <h2 className="text-lg"> Executive</h2>
   
  </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
         
    <div className="card  bg-base-100 shadow-xl">
   <figure className="px-10 pt-10">
    <img src={Img2} alt="Team member" className="rounded-xl h-32 w-24" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Hira Butik</h2>
    <h2 className="text-lg">Chief Executive</h2>
   
  </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
         
    <div className="card  bg-base-100 shadow-xl">
   <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Team member" className="rounded-xl h-32 w-24" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Sinci Pali</h2>
    <h2 className="text-lg"> Executive</h2>
   
  </div>
  </div>
        </SwiperSlide>

       
      </Swiper>
    </div>
  );
}


export default OurTeam