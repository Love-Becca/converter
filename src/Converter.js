import React from "react";
import './Converter.css'
import cloud from './assets/space.png'

const Body = () => {
    return ( 
        <>
            <div className="hero-body">
                <div className="hero-info">
                    <h2 className="hero-title">File Converter</h2>
                    <p className="hero-details">To get started use the button below and select files to convert from your laptop.</p>
                    <input type="file"/>
                </div>
                <div className="hero-image">
                    <img src={cloud} alt="file" className="cloud-image"/>
                </div>
            </div>
        </>
    );
}
 
export default Body;