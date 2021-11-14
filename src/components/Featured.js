import React from 'react';
import './css/Featured.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeaturedItem from './FeaturedItem';

function Featured() {
  return (
    <section class="featuredOn">
      <h2 class="featuredOn__heading">Featured on</h2>
      <div class="container">
        <FeaturedItem
          href='https://www.yahoo.com/entertainment/xfai-solution-illiquid-defi-markets-165959475.html'
          src='images/featured/YahooFinanceLogo.png'
        />
        <FeaturedItem
          href='https://www.benzinga.com/markets/cryptocurrency/21/04/20543935/xfai-has-a-solution-to-illiquid-defi-markets'
          src='images/featured/Benzinga.png'
        />
        <FeaturedItem
          href='https://thedailychain.com/how-xfai-makes-holding-small-cap-tokens-profitable/'
          src='images/featured/Bitcoin.com.png'
        />
        <FeaturedItem
          href='https://news.bitcoin.com/defi-venture-xfai-reveals-liquidity-generation-event-project-backed-by-angel-investor-roger-ver/'
          src='images/featured/TheDailyHodl.png'
        />
        <FeaturedItem
          href='https://dailyhodl.com/2021/04/02/au21-capital-invests-in-xfais-dex-liquidity-oracle/'
          src='images/featured/CoinCodex.png'
        />
        <FeaturedItem
          href='https://coincodex.com/article/10969/ld-capital-invests-in-xfais-dex-liquidity-oracle-solution/'
          src='images/featured/TechBullion.png'
        />
        <FeaturedItem
          href='https://techbullion.com/liquidity-generation-events-could-become-new-standard-for-blockchain-project-launches/'
          src='images/featured/CryptoNewsFlash.png'
        />
        <FeaturedItem
          href='https://cryptonomist.ch/2021/04/01/bitcoin-com-roger-ver-progetto-defi/'
          src='images/featured/TheCryptoEconomist.png'
        />
        <FeaturedItem
          href='https://www.coinspeaker.com/digital-strategies-joins-xfais-lge-as-an-initial-liquidity-provider/'
          src='images/featured/Coinspeaker.png'
        />
        <FeaturedItem
          href='https://www.newsbtc.com/news/company/the-top-blockchain-launches-to-watch-in-q2/'
          src='images/featured/NewsBTC.png'
        />
      </div>
    </section>
  );
}

export default Featured;
