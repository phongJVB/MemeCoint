import React from 'react';

function FeaturedItem(props) {
  return (
    <>
        <a className='featured__item__link' href={props.path}>
            <img
              className='featured__item__img'
              alt='featured item'
              src={props.src}
            />
        </a>
    </>
  );
}

export default FeaturedItem;
