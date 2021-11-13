import React from 'react';
import { Link } from 'react-router-dom';

function SocialItem(props) {
  return (
    <>
      <div className='social-item'>
        <div className='social-item-icon'>
          <Link
            class={props.classSocialItem}
            to={props.path}
            target='_blank'
            aria-label={props.label}
          >
            <i className={props.icon} />
          </Link>
        </div>
        <div className='social-item-text'>
          {props.text}
        </div>
      </div>
    </>
  );
}

export default SocialItem;
