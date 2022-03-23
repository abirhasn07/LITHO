import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Food.css';
const Food = ({foods}) => {
  console.log(foods);
  return (
    <section id='popular-food'>
    <p className="food-subtitle">
        
special recipes

    </p>
    <h3 className="food-title">
    POPULAR MENU
    </h3>

    <ul className="category-list">
      <li className="food-items active">STARTERS</li>
      <li className="food-items">VEGETARIAN</li>
      <li className="food-items">DESSERT</li>
      <li className="food-items">DRINKS</li>
      <li className="food-items">SPECIAL</li>
    </ul>

    <div className="food-container">
      {
        foods&&foods.map(foodItem=>{
          return(
            <div className="food-card" key={foodItem.id}>
        <LazyLoadImage
        effect='blur'
        placeholderSrc='https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
        src={foodItem.image} alt="" className="food-img" />
        <div>
        <p className='food-name'>{foodItem.title}</p>
       
        </div>
        <div className="buy-now">
        <p className="food-price">${foodItem.pricePerServing}</p>

        <a href="" className='oder-btn'>Oder Now</a>
        </div>
      </div>
          )
        })
      }
      
    </div>
    </section>
  )
}

export default Food
