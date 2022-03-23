import React from 'react';
import { FaCocktail } from 'react-icons/fa';
// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import cafe1 from '../../images/cafe1.webp';
import cafe2 from '../../images/cafe2.webp';
import cafe3 from '../../images/cafe3.webp';
import cafe4 from '../../images/cafe4.webp';
import './Cafe.css';


const Cafe = () => {
  return (
    <section className='food-cafe'>
       <div className="food-subtitle">cafe experience</div>
       <h3 className="food-title">EXQUISITE SERVICES</h3>
       
       <Swiper className="mySwiper"
     slidesPerView={2}
     spaceBetween={30}
     autoplay={{
        delay: 1000,
        autoplay:true,
     
       
      }}
      breakpoints={
          {320:{
              slidesPerView:1
          },
          600:{
              slidesPerView:2
          }}
      }
       >
       <SwiperSlide className="cafe-card">
           <img src={cafe1} alt="" className="cafe-img" />
           <div className="cafe-card-info">
               <FaCocktail className="cafe-icon"/>
               <h4 className="cafe-food-name">MODISH FOODS</h4>
               <p>Lorem ipsum dolor amet consectetur adipiscing</p>
           </div>
       </SwiperSlide>
       <SwiperSlide className="cafe-card">
           <img src={cafe2} alt="" className="cafe-img" />
           <div className="cafe-card-info">
               <FaCocktail className="cafe-icon"/>
               <h4 className="cafe-food-name">MODISH FOODS</h4>
               <p>Lorem ipsum dolor amet consectetur adipiscing</p>
           </div>
       </SwiperSlide>
       <SwiperSlide className="cafe-card">
           <img src={cafe3} alt="" className="cafe-img" />
           <div className="cafe-card-info">
               <FaCocktail className="cafe-icon"/>
               <h4 className="cafe-food-name">MODISH FOODS</h4>
               <p>Lorem ipsum dolor amet consectetur adipiscing</p>
           </div>
       </SwiperSlide>
       <SwiperSlide className="cafe-card">
           <img src={cafe4} alt="" className="cafe-img" />
           <div className="cafe-card-info">
               <FaCocktail className="cafe-icon"/>
               <h4 className="cafe-food-name">MODISH FOODS</h4>
               <p>Lorem ipsum dolor amet consectetur adipiscing</p>
           </div>
       </SwiperSlide>
       </Swiper>
      
    </section>
  )
}

export default Cafe