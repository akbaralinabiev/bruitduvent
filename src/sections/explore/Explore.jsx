import React, { useState } from 'react';
import './explore.css';
import { item1, item2, item3, item4, item5, item6, item7 } from './import.js';

const Explore = () => {
  const items = [
    { image: item1, description: 'Elegance Unveiled' },
    { image: item2, description: 'Chic Reverie' },
    { image: item3, description: 'Urban Vogue' },
    { image: item4, description: 'Sartorial Whispers' },
    { image: item5, description: 'Glamour Fusion' },
    { image: item6, description: 'Opulent Aura' },
    { image: item7, description: 'Chic Reverie' },
  ];

  const [visibleItems, setVisibleItems] = useState(3);

  const handleLoadMore = () => {
    // Increase the number of visible items by 3
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  return (
    <div className='explore-wrapper' id='explore'>
     <h3 className='header-text'>My recent works</h3>
      <div className='products'>
        {items.slice(0, visibleItems).map((item, index) => (
          <div className='product-item' key={index}>
            <img src={item.image} alt='' />
            <h5>{item.description}</h5>
          </div>
        ))}
      </div>
      {visibleItems < items.length && (
        <button className='load-more-button' onClick={handleLoadMore}>
          See More
        </button>
      )}
    </div>
  );
};

export default Explore;
