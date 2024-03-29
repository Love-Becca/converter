import React,{useState, useCallback, useContext, lazy, Suspense } from "react";
import Steps from "./Steps";
import '../Styles/Converter.css'
import RenderDisplayFiles from "./Processing";
import convert from'../assets/convert.png'
import download from '../assets/download.png'
import {Link} from 'react-router-dom'
import { LandingPageContext } from "../Context/LandingPageContext";


const HeroPreview = lazy(() => import('./HeroImg.js'));

const Body = () => {
    const fileErrorMessage = "Maximum file reached";
    const {files, setFiles, iteratedFiles, downloadFile, setDownloadFile, convertFiles} = useContext(LandingPageContext);
    const [loading, setLoading] = useState({ 
        isLoading: false
    });
    
    const toggle = useCallback(()=>{
        setLoading(prevLoading=>{
            return{
                ...prevLoading,
                isLoading:!loading.isLoading
            }
        });
        setInterval(() => {
            setDownloadFile(!downloadFile)
        }, 3000);
    },[downloadFile, loading.isLoading, setDownloadFile])


    const handleChange = (eventTarget)=>{  //get files from input
        if (!loading.isLoading && files.length <= 3){
            setFiles(prevFiles =>[...prevFiles, eventTarget.files]);
        };
    }
    

    const displayFiles = Array.from(iteratedFiles).map(items=>
    <RenderDisplayFiles
        key={items.size}
        id={items.size}
        name={items.name}
    />)


    return(
        <>
            <div className="hero-body">
                <div className="info-group">
                    <div className="hero-info">
                        <h2 className="hero-title">File Converter</h2>
                        <p className="hero-details">To get started use the button below and select files to convert from your device.</p>
                    </div>
                    <div className="hero-steps">
                        <Steps />
                    </div>
                    <div className="choose-file">
                        <label className="button" htmlFor="upload">Choose Image</label>
                        <input type="file" id="upload" multiple={false} accept=".jpg,.png,.xlsx,.doc,.docx,.xml,application/msword" onChange={(e)=>handleChange(e.target)}/>
                        <p className="error-message">{files.length > 3 && fileErrorMessage}</p>
                    </div>
                    <div className="file-list">
                        <div className="files">
                            {displayFiles}
                        </div>
                        <div className={files.length !== 0 && loading.isLoading && !downloadFile?"loader": "hide"}></div>
                        <div className="convert-icon">
                            {files.length !== 0 && !loading.isLoading && !downloadFile &&( //added downloadFile to stop it from rendering after file is ready for download
                                <img src={convert} alt="convert-file" onClick={toggle} className="show" />
                            )}
                            {downloadFile && <img src={download} alt="download-file" className="show" onClick={convertFiles}/>}
                        </div>
                    </div>
                
                </div>
                <Suspense fallback={"Loading ...."}>
                    <HeroPreview />
                </Suspense>
            </div>
            <p className="convert_other_files">Image only.<Link to='signup'>Convert other files?</Link></p>
            
        </>
    );
}
 
export default Body;