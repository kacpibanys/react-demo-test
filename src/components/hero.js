import React from 'react';
import './Hero.css';
import hero from './front.png';
import Collapsible from './collapsible';
import collab_img from './youth+knowledge.png';
import blog_img from './patryk.png';
function Hero() {
  return (
    <div className="content">
      <img className="hero-image" src={hero} alt="hero" />
      <div className='sections'>
        <div className='title-box'>
          <p className='motto'>Your company is ready for big<br />
            moves and we are here for it.<br />
            for big moves </p>
          <p className='services'>Services</p>
        </div>
        <Collapsible />
        <div className='aboutus'>
          <div className="aboutus-section">
            <p className='aboutus-section-p'>About us</p>
          </div>

          <div className='aboutus-wrapper'>

            <div className='collab'>
              <img className="collab-image" src={collab_img} alt="collab-img" />
              <p>Nicest collaboration you'll ever had!</p>
            </div>
            <div className='blog'>
              <img className="blog-image" src={blog_img} alt="blog-img" />
              <p>| Head of development | Yakuza master</p>
              <a className='blog-link' href='#'>check my blog</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero