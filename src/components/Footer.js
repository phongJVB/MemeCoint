import React from 'react';
import './css/Footer.css';
import './css/backedBy.css';
import './css/worldClassExperience.css';
import { Link } from 'react-router-dom';
import BackedByItem from './BackedByItem.js';

function Footer() {
  return (
    <div className='footer-container'>

      <section class="worldClassExperience" style={{
      backgroundImage: "url('./images/Background/back.png')",
    }}>
        <div class="container">
          <h2><span>World Class</span> Experience</h2>
          <p>
            Wall St and Nasdaq
            <span>tech pioneers and leading crypto &amp; blockchain</span> experts
            who have joined forces to redefine the decentralized trading space.
          </p>
        </div>
      </section>
      <section class="world" style={{
      backgroundImage: "url('./images/Background/earth.png')",
    }}>
        <div class="container">
          <div class="top">
            <h2>FINANCIAL SYSTEMS EXPERTISE</h2>
            <ul>
              <li>Co-founded multiple companies, 2 x Nasdaq IPOs (SCNT; VIAN)</li>
              <li>Ex MD of Cisco, VP of Blockchain at IBM</li>
              <li>
                Architected and designed Nasdaq trading systems connecting it to
                global liquidity
              </li>
              <li>
                Co-founder, Diligent: Co-created with Merrill Lynch &amp; Credit
                Suisse
              </li>
              <li>
                Regular speaker at Davos World Economic Forum “Future of Finance”.
              </li>
            </ul>
          </div>

          <div class="line"></div>
          <div class="bottom">
            <h2>DEFI AND CRYPTO EXPERTISE</h2>
            <ul>
              <li>
                Developed smart contracts &amp; crypto economics for
                multiple blockchain and DeFi projects
              </li>
              <li>
                Securely and successfully ran token launches on Bitcoin, Bitshares,
                and Ethereum
              </li>
              <li>Holding technical Patents granted in US and Europe.</li>
              <li>Winners of the DBS Singapore Hackathon</li>
              <li>
                World Economic Forum Keynote Speaker, introduced the world’s first
                Techno-Legal Framework for DAOs
              </li>
            </ul>
          </div>
        </div>


      </section>
      <div class="backedBy" style={{
      backgroundImage: "url('./images/Background/high.png')",
      backgroundRepeat: 'repeat',
    }}>
        <h2 class="backedBy__heading">BACKED BY</h2>
        <div class="container">
          <BackedByItem src='images/backedBy/FacultyCapital.png'/>
          <BackedByItem src='images/backedBy/LD.png'/>
          <BackedByItem src='images/backedBy/AU21.png'/>
          <BackedByItem src='images/backedBy/DigitalStrategies.png'/>
          <BackedByItem src='images/backedBy/GBV.png'/>
          <BackedByItem src='images/backedBy/JRR.png'/>
          <BackedByItem src='images/backedBy/Rarestone.png'/>
          <BackedByItem src='images/backedBy/Moonwhale.png'/>
          <BackedByItem src='images/backedBy/Fission.png'/>
          <BackedByItem src='images/backedBy/Vendetta.png'/>
          <BackedByItem src='images/backedBy/Kyros.png'/>
          <BackedByItem src='images/backedBy/CognitionVP.png'/>
          <BackedByItem src='images/backedBy/TDefi.png'/>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              FLOKKIELON
              <i class='fas fa-dog' />
            </Link>
          </div>
          <small class='website-rights'>FLOKKIELON © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-telegram' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-discord' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
