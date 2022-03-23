import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { BsTelephonePlus } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <div className="footer-card">
                <IoLocationOutline className="footer-icon"/>
                <h5>CONTACT US</h5>
                <h6>401 Broadway, 24th Floor New York, NY 10013</h6>
            </div>
            <div className="footer-card">
                <BsTelephonePlus className="footer-icon"/>
                <h5>LET'S TALK</h5>
                <a href="tel:+1-800-222-000">Phone: 1-800-222-000</a> <br />
             
                <a href="tel:+1-800-222-000">Fax: 1-800-222-002</a>
             
            </div>
            <div className="footer-card">
                <FiMail className="footer-icon"/>
                <h5>CONTACT US</h5>
                <h6>401 Broadway, 24th Floor New York, NY 10013</h6>
            </div>
            <div className="footer-card">
                <BiWorld className="footer-icon"/>
                <h5>CONTACT US</h5>
                <h6>401 Broadway, 24th Floor New York, NY 10013</h6>
            </div>
        </div>
        {/* <div className="footer">
            <FiCoffee className="coffe-icon"/>
        </div> */}
    </footer>
  )
}

export default Footer