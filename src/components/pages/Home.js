import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Social from '../Social';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Social />
      <Footer />
    </>
  );
}

export default Home;
