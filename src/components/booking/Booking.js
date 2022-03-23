import React from 'react'
import booking1 from '../../images/booking1.webp'
import booking2 from '../../images/booking2.webp'
import booking3 from '../../images/booking3.webp'
import booking4 from '../../images/booking4.webp'
import './Booking.css'
const Booking = () => {
  return (
    <section className='table-booking'>
        <div className="booking-container">
        <div className="booking-card">
            <img src={booking1} alt="" className="booking-img" />
            <div className="booking-info">
<h4>DELICIOUS BURGER</h4>
<button className='active'>BOOK SEAT NOW</button>
            </div>
        </div>
        <div className="booking-card">
            <img src={booking2} alt="" className="booking-img" />
            <div className="booking-info">
<h4>UPCOMING
FOOD EVENTS</h4>
<button>BOOK SEAT NOW</button>
            </div>
        </div>
        <div className="booking-card">
            <img src={booking4} alt="" className="booking-img" />
            <div className="booking-info">
<h4>HEALTHY
COOKING
NIGHT</h4>
<button>BOOK SEAT NOW</button>
            </div>
        </div>
        <div className="booking-card">
            <img src={booking3} alt="" className="booking-img" />
            <div className="booking-info">
<h4>BARBEQUE FESTIVAL</h4>
<button className='active'>BOOK SEAT NOW</button>
            </div>
        </div>
        </div>
        
    </section>
  )
}

export default Booking