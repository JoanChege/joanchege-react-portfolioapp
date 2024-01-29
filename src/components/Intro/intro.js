import React from 'react';
import './intro.css';
import bg from '../../assets/profile.jpg';

const Intro = () => {
  return (
    <div className='wrapper'>
      <section className='featured-box' id='home'>
        <div className='featured-text'>
          <div className='spanh'>
            <span className='hello'>HELLO!</span>
            </div>
            <span className='introtext'>I am Joan Chege</span>
            <p className='intropara'>
            Currently, I am learning front-end development to be a dedicated front-end devoloper who 
            crafts visually stunning and user-friendly websites. If interested scroll down and get to know more about me.
            </p>
        </div>
        <img src={bg} alt="Profile" className='bg' /> 
        </section>
    </div>
  )
}

export default Intro;
