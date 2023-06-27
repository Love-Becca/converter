import React from 'react';
import cloud from '../assets/hero-image.png'

const HeroImage = () => {
    return (
        <div className="hero-image">
            <img src={cloud} alt="file" className="cloud-image"/>
        </div>
    );
}
 
export default HeroImage;