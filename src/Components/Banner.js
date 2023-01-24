import React from 'react';
import '../styles/Banner.css'; 


export const Banner  = () => {
    return (
    
    <div className='title'>
      <img id='logo' src={require('../images/nysl_logo.png')} alt="Northside Youth Soccer League" />
      <h1>Northside Youth Soccer League</h1>
    </div>
  ); 
    }
  export default Banner;