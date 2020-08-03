import React from 'react';
import HeroImage from '../../assets/heroImage.jpg';

function Hero() {
  return (
    <img
      src={HeroImage}
      alt='HeroImage'
      style={{ width: '98%', marginBottom: '20px' }}
    />
  );
}

export default Hero;
