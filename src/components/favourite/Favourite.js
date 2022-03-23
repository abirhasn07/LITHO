import React from 'react'
import img1 from '../../images/home-restaurant-img-02.png'
import img2 from '../../images/home-restaurant-img-03.png'
import img3 from '../../images/home-restaurant-img-04.png'
import './Favourite.css'
const Favourite = () => {
  return (
    <section className='favourite'>
      <h6 className="food-subtitle">restaurant favourite</h6>
      <h3 className="food-title">CHEF'S SPECIAL</h3>
      <div className="favourite-container">
          <div className="favourite-card">
              <img src={img1} alt="Appeteaser blatter"className='fav-img' />
              <div className="favourite-card-info">
                 
                  
                      <h4>Appeteaser blatter</h4>
                      <p>Ipsum is simply dolor text</p>
                 
              </div>
          </div>
          <div className="favourite-card">
              <img src={img2} alt="Appeteaser blatter" className='fav-img'/>
              <div className="favourite-card-info">
            
               
                      <h4>Appeteaser blatter</h4>
                      <p>Ipsum is simply dolor text</p>
             
              </div>
          </div>
          <div className="favourite-card">
              <img src={img3} alt="Appeteaser blatter" className='fav-img'/>
              <div className="favourite-card-info">
                 
                  
                      <h4>Appeteaser blatter</h4>
                      <p>Ipsum is simply dolor text</p>
                  
              </div>
          </div>
      </div>
    </section>
  )
}

export default Favourite
