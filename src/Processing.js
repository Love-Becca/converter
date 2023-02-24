import React from 'react';
import file from './assets/file.svg'

const Processing = (data) => {
    console.log(data.name);
    return (
        <>
            <div className="file-attached">
                <img src={file} alt="file"  width="20vw"/>
                <p></p>
            </div>
        </>
    );
}
 
export default Processing;