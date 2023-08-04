import React from 'react'
import './card.css'
import lemon from './lemon.jpg'

const Card = () => {
  return (
    <>
      
      <div className='card'>
        <img src={lemon} alt="lemon" />
        <div className='card-container'>
          <h4>Dog Name</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      </div>
    </>
  );
}

export default Card
