import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className='bg_image'>
    <div className='home'>
      <div className='headerContainer'>
        <h1> E - Pashudhan </h1>
        <div id='empty'/>
        <p> WE BELIEVE IN QUALITY </p>
        <Link to="/about">
          <button>
            KNOW MORE
          </button>
        </Link>
      </div>
    </div>
    </section>
  )
}

export default Hero