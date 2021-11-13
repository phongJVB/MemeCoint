import React from 'react';
import './css/Social.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialItem from './SocialItem';

function Social() {
  return (
    <div style={{
      backgroundImage: "url('./images/background_star_1.jpg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div className="social container">
        <SocialItem
          icon='fas fa-link'
          text='DYOR safu and contract details'
        />
        <SocialItem
          icon='fab fa-telegram'
          text='Join the Lorde Edge telegram guild and make friends'
        />
        <SocialItem
          icon='fab fa-twitter'
          text='Keep up to date to the Lorde preachings'
        />
        <SocialItem
          icon='fas fa-link'
          text='Read the LordePaper for future plans'
        />
        <div className="social-logo">
          <img src="images/Logo256x256.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Social;
