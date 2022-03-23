import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import chef from '../../images/chef.jpg'
import './Chef.css'
const Chef = () => {
  return (
    <section className='chef'>
      <img src={chef} alt="" className="chef-img" />
      <div className="chef-info">
          <span className="quote">
     <ImQuotesLeft/>
          </span>
          <h3 className="chef-title">
          Masterchef <span>message</span>
          </h3>
          <p className="chef-subtitle">
          Unique and delicious dishes from the worlds best masterchefs
          </p>
          <p className='chef-talk'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit eiusmod tempor incididunt labore et dolore magna minim veniam nostrud exercitation ullamco
          </p>
          <span className='chef-signature'>jemmy smith</span>
      </div>
    </section>
  )
}

export default Chef
