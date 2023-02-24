import React from 'react';
import './Converter.css'

const Steps = () => {
    return (  
        <div className='step-body'>
            <div className='step-1'>
                <div>1</div>
                <p>choose file</p>
            </div>
            <span className='line'></span>
            <div className='step-2'>
                <div>2</div>
                <p>convert</p>
            </div>
            <span className='line'></span>
            <div className='step-3'>
                <div>3</div>
                <p>Download pdf</p>
            </div>
        </div>
    );
}
 
export default Steps;