import React from 'react';
import './css/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Interesting Articles</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>            
            <CardItem
              src='images/card_1.jpg'
              text='Elon Musk aka "Doge Father" AKA Worlds Smartest Man Recognized Baby Doge Coin Only 1 Month After Launch'
              label='Hot'
              path='https://twitter.com/elonmusk/status/1410529698497630212'
            />
            <CardItem
              src='images/card_2.png'
              text='Elon Musk Following BTC, ETH, FLOKIELON'
              label='Hot'
              path='https://twitter.com/elonmusk/status/1451015695106560000'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/card_floki_3.png'
              text='Floki Frunkpuppy'
              label='News'
              path='https://twitter.com/elonmusk/status/1444840184500129797'
            />
            <CardItem
              src='images/card_floki_4.png'
              text='Floki has arrived'
              label='News'
              path='https://twitter.com/elonmusk/status/1437179881260032016'
            />
            <CardItem
              src='images/doge_moon.jpg'
              text='FllokiElonMars Go To The Moon'
              label='News'
              path='https://coin68.com/series-chien-luoc-giao-dich-hieu-qua-to-the-moon-voi-dogecoin/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
