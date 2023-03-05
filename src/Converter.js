import React,{useState, useEffect, useCallback} from "react";
import Steps from "./Steps";
import './Converter.css'
import cloud from './assets/hero-image.png'
import RenderDisplayFiles from "./Processing";
import convert from'./assets/convert.png'
import jsPDF from 'jspdf';
import download from './assets/download.png'
import ConverterHeader from './ConverterHeader'
import {Link} from 'react-router-dom'


const Body = () => {
    const fileErrorMessage = "Maximum file reached";
    const [iteratedFiles, setIteratedFiles] = useState(new Set()); // FROM ITERATION change to iterated files
    const [files, setFiles] = useState([]);
    const [fileUrl, setFileUrl] = useState([])
    const [loading, setLoading] = useState({ 
        isLoading: false
    });
    const [downloadFile, setDownloadFile] = useState(false);

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
    },[downloadFile, loading.isLoading])


    const handleChange = (eventTarget)=>{  //get files from input
        if (!loading.isLoading && files.length <= 3){
            setFiles(prevFiles =>[...prevFiles, eventTarget.files]);
            setFileUrl(prevFileUrl =>[...prevFileUrl, eventTarget.value])
        };
    }
    const convertFiles = useCallback(() => {
        const doc = new jsPDF();
        let fileName
        files.map((y)=>{
            Object.values(y).forEach(item=>{
                const reader = new FileReader();
                reader.onload = (e)=>{
                    const url = e.target.result
                    fileName = item.name.replace(/\.[^/.]+$/, '');
                    const pageWidth = doc.internal.pageSize.getWidth();
                    const imgProps = doc.getImageProperties(url);
                    const pdfHeight = (imgProps.height * pageWidth) / imgProps.width;
                    doc.addImage(url, 'JPEG', 10, 20, pageWidth - 20, pdfHeight - 20, null, 'FAST');
                    doc.save(`${fileName}.pdf`);
                };
                reader.readAsDataURL(item);
               
            })
            
        })
        
    }, [files]);

    useEffect(() => {   //iterate over multi-dimensional data gotten from input
        if (files.length < 4) {
            for (const i of files) {
                for (const j of i) {
                    setIteratedFiles(prevIteratedFiles=>new Set([...prevIteratedFiles, j]));
                }
            }  
        }
    }, [files]);

    const displayFiles = Array.from(iteratedFiles).map(items=>
    <RenderDisplayFiles
        key={items.size}
        id={items.size}
        name={items.name}
    />)


    return(
        <>
            <ConverterHeader getFile ={()=>convertFiles()} loadState={downloadFile} />
            <div className="hero-body">
                <div className="info-group">
                    <div className="hero-info">
                        <h2 className="hero-title">File Converter</h2>
                        <p className="hero-details">To get started use the button below and select files to convert from your laptop.</p>
                    </div>
                    <div className="hero-steps">
                        <Steps />
                    </div>
                    <div className="choose-file">
                        <label className="button" htmlFor="upload">Choose File</label>
                        <input type="file" id="upload" multiple={false} accept=".jpg,.png,.xlsx,.doc,.docx,.xml,application/msword" onChange={(e)=>handleChange(e.target)}/>
                        <p className="error-message">{files.length > 3 && fileErrorMessage}</p>
                    </div>
                    <div className="file-list">
                        <div className="files">
                            {displayFiles}
                        </div>
                        <div className={files.length !== 0 && loading.isLoading && !downloadFile?"loader": "hide"}></div>
                        <div className="convert-icon">
                            {files.length !== 0 && !loading.isLoading && (
                                <img src={convert} alt="convert-file" onClick={toggle} className="show" />
                            )}
                            {downloadFile && <img src={download} alt="download-file" className="show" onClick={convertFiles}/>}
                        </div>
                    </div>
                
                </div>
                <div className="hero-image">
                    <img src={cloud} alt="file" className="cloud-image"/>
                </div>
            </div>
            <p className="convert_other_files">Image only.<Link to='signup'>Convert other files?</Link></p>
            
        </>
    );
}
 
export default Body;