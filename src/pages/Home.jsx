import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '../components/Hero';
import FeaturedDishes from '../components/FeaturedDishes';
import TodaySpecial from '../components/TodaySpecial';
import WhyChooseUs from '../components/WhyChooseUs';
import MenuPreview from '../components/MenuPreview';
import Categories from '../components/Categories';
import ChefRecommendations from '../components/ChefRecommendations';
import SpecialOffers from '../components/SpecialOffers';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import GalleryPreview from '../components/GalleryPreview';
import ReservationCTA from '../components/ReservationCTA';
import InstagramFeed from '../components/InstagramFeed';
import Newsletter from '../components/Newsletter';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <>
      <Hero />
      <FeaturedDishes />
      <TodaySpecial />
      <WhyChooseUs />
      <MenuPreview />
      <Categories />
      <ChefRecommendations />
      <SpecialOffers />
      <Stats />
      <Testimonials />
      <GalleryPreview />
      <ReservationCTA />
      <InstagramFeed />
      <Newsletter />
    </>
  );
};

export default Home;
