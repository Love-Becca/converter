import React from "react";
import Steps from "./steps";
import './Converter.css'
import cloud from './assets/space.png'
import file from './assets/file.svg'

const Body = () => {
    const handleClick = (e)=>{
        const files = e.target.files;
    }
    return ( 
        <>
            <div className="hero-body">
                <div className="info-group">
                    <div className="hero-info">
                        <h2 className="hero-title">File Converter</h2>
                        <p className="hero-details">To get started use the button below and select files to convert from your laptop.</p>
                    </div>
                    <div className="hero-steps">
                        <Steps />
                    </div>
                    <label className="button" htmlFor="upload">Choose File</label>
                    <input type="file" id="upload" onChange={handleClick}/>
                    {/* <template>
                        <div className="file-attached">
                            <img src={file} alt="file" />
                            <p>{files}</p>
                        </div>
                    </template> */}
                </div>
                <div className="hero-image">
                    <img src={cloud} alt="file" className="cloud-image"/>
                </div>
            </div>
            
        </>
    );
}
 
export default Body;