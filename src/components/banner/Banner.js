import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import bannerMain from '../../images/banner-main.png'
import './Banner.css'

const Banner = () => {
  return (
    <section id='banner '>
      <LazyLoadImage
      data-aos="zoom-in"
      src={bannerMain} alt="main banner" className='main-banner'
      effect='blur' />
    </section>
  )
}

export default Banner
