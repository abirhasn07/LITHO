import React from 'react'
import img1 from '../../images/img1.webp'
import img2 from '../../images/img2.webp'
import img3 from '../../images/img3.webp'
import './Special.css'
const Special = () => {
  return (
    <section id='special'>
    <p className="food-subtitle">
        
    peoples choice
        
            </p>
            <h3 className="food-title">
            SPECIAL DISHES
            </h3>
    <div className="special-container">
<div className="special-card">
    <img src={img1} alt="" className="special-img" />
    <p>HOT CHICKEN BREAST</p>
    <ul>
        <li>TOMATOS</li>
        <li>PARMESAN</li>
        <li>BASIL</li>
    </ul>
</div>
<div className="special-card">
    <img src={img2} alt="" className="special-img" />
    <p>PERFECT KENTUCKY</p>
    <ul>
        <li>TOMATOS</li>
        <li>PARMESAN</li>
        <li>BASIL</li>
    </ul>
</div>
<div className="special-card">
    <img src={img3} alt="" className="special-img" />
    <p>CHILLY CHEESE STEAK</p>
    <ul>
        <li>TOMATOS</li>
        <li>PARMESAN</li>
        <li>BASIL</li>
    </ul>
</div>
    </div>
    </section>
  )
}

export default Special