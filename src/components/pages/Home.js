import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Social from '../Social';
import Featured from '../Featured';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Social />
      <Featured/>
      <Footer />
    </>
  );
}

export default Home;
