import React from 'react';
import { Link } from 'react-router-dom';

function MarketItem(props) {
  return (
    <>
        <Link className={props.nameClass} to={props.path}>
            <img
              className='market__item__img'
              alt='Market item'
              src={props.src}
            />
        </Link>
    </>
  );
}

export default MarketItem;
