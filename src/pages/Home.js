import React from 'react';
import Banner from '../components/banner/Banner';
import Bestfood from '../components/bestfood/Bestfood';
import Booking from '../components/booking/Booking';
import Cafe from '../components/cafeExperiance/Cafe';
import Chef from '../components/chef/Chef';
import Favourite from '../components/favourite/Favourite';
import Food from '../components/food/Food';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Special from '../components/special/Special';

const Home = ({foods}) => {
  return (
    <>
      <Header />
      <Banner />
      <Food foods={foods}/>
      <Special/>
      <Chef/>
      <Bestfood/>
      <Favourite/>
      <Cafe/>
      <Booking/>
      <Footer/>
    </>
  )
}

export default Home