import React from 'react';
import '../App.css';
import './css/HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarketItem from './MarketItem';

function HeroSection() {
  return (
    <div style={{
      backgroundImage: "url('./images/background_star_1.jpg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div className='hero-container container' >
        <div className="hero-text-logo"  >
          <img src="/images/TextLogo.png" alt="textLogo"></img>
        </div>
        <div className="hero-content">
          <h2><span>Predict <strong>THE FUTURE</strong> </span> <br />
            <span>of the moon mission by <br />
              <strong>creating it</strong>.</span>
          </h2>
          <img className="logo" src="/images/Logo256x256.png" alt="Logo"></img>
        </div>
        <div className="hero-market">
          <MarketItem
            src='images/coingecko-logo.png'
            path='/'
          />
          <MarketItem
            nameClass='mt-15'
            src='images/coinmarketcap-logo.png'
            path='/'
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
