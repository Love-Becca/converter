import React from 'react';
import file from './assets/file.svg';
import convert from './assets/convert.png'

const Processing = (data) => {
    
    return (
        <>
            <div className="file-attached">
                <img src={file} alt="file"  width="20vw"/>
                <span className='file-name'>{data.name.toLowerCase()}</span>

            </div>
        </>
    );
}
 
export default Processing;