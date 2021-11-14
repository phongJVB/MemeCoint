import React from 'react';

function BackedByItem(props) {
    return (
    <>
        <img 
        src={props.src} 
        alt="backed-item"
        className={props.className}
        />
    </>
    ); 
}

export default BackedByItem;