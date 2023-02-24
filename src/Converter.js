import React,{useState, useEffect} from "react";
import Steps from "./steps";
import './Converter.css'
import cloud from './assets/space.png'
import Processing from "./Processing";
import convert from'./assets/convert.png'


const Body = () => {
    const [data, setData] = useState(new Set());
    const [files, setFiles] = useState([]);

    const convertFile = ()=>{
        console.log("working");
    }

    const handleClick = (e)=>{
        setFiles(prevFiles =>{
            return[
                ...prevFiles,
                e.target.files
            ]
        });        
    }

    useEffect(() => {
        for (const i of files) {
            for (const j of i) {
                setData(prevData=>new Set([...prevData, j]));
            }
        } 
    }, [files]);

    

    const saved = Array.from(data).map(x=>
    <Processing
        key={x.size}
        id={x.size}
        name={x.name}
    />)

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
                    <div className="file-list">
                        <div className="files">
                            {saved}
                        </div>
                        <div className="convert-icon">
                         <img src={convert} alt="convert-file" onClick={convertFile}/>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={cloud} alt="file" className="cloud-image"/>
                </div>
            </div>
            
        </>
    );
}
 
export default Body;