import React from 'react';
import '../Styles/Banner.css'; 


export const Banner  = () => {
    return (
    
    <div className='title'>
        <img id='logo' src={require('../Images/nysl_logo.png')} alt="Northside Youth Soccer League" />
		<h1>Northside Youth Soccer League</h1>
	</div>
    


    
  ); 
    }
  export default Banner;