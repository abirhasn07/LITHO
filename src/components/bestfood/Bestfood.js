import React from 'react'
import best1 from '../../images/food1.jpg'
import best2 from '../../images/food2.jpg'
import './Bestfood.css'
const Bestfood = () => {
    return (
        <section className='best-food'>
            <div className="best-food-info black">
                <h4 className="best-subtitle">
                    BEST OF RECIPES
                </h4>
                <h2 className='best-title'><span>Delicious</span>
                    breakfast
                    recipes</h2>
            </div>
            <div className="best-img">
                <img src={best1} alt="" className='best-food-img' />
            </div>
            <div className="best-img">
                <img src={best2} alt="" className='best-food-img' />
            </div>
            <div className="best-food-info grey">
                <h4 className="best-subtitle">
                    BEST OF FOODS
                </h4>
                <h2 className='best-title'><span>Healthy</span>
                energetic
                    recipes</h2>
            </div>
        </section>
    )
}

export default Bestfood