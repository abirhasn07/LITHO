import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { GiFrenchFries } from 'react-icons/gi'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import banner from '../../images/banner-1.jpg'
import './Header.css'

const Header = () => {
    const [menu,setMenu]=useState(true)
    return (
        <header>

            <nav id='nav'>

                <div className="logo">
                    LITHO
                </div>

                <ul className={menu?"nav-list" :"nav-list active"}>
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Shop</li>
                    <li className="nav-item">Blog</li>
                    <li className="nav-item">Contact</li>
                </ul>

                <div className="booking">
                    <a href="#">Book a Table</a>
                </div>

                <div className="menu-icon hide">

                    {
                        menu?
                    <span className="open-icon">
                        <FaBars  size="1.5rem"
                       color='#ca943d' onClick={()=>setMenu(!menu)}/>
                    </span>:
                    <span className="close-icon">
                        <FaTimes  color='#ca943d'  size="1.5rem" onClick={()=>setMenu(!menu)}/>
                    </span>
                    }
                </div>


            </nav>

            {/* hero section  */}
            <section id='hero'>
              
                    <LazyLoadImage
                    effect="blur"
                     src={banner} alt="banner image" className='hero-img' />
                    <div className="hero-info">
                        <span className="hero-icon">
                            <GiFrenchFries size="4rem" color='#ca943d'
                            className='fries-icon' />
                        </span>
                        <h1 className="hero-title">
                            DELICIOUS
                            COOKING
                        </h1>
                        <h6 className="hero-subtitle">
                            EXPERIENCE THE TASTE OF ITALY
                        </h6>
                        <a href="" className="hero-booking hide">
                            BOOK A TABLE
                        </a>
                    </div>
              
            </section>
            {/* hero section  */}

        </header>
    )
}

export default Header