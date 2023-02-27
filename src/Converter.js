import React,{useState, useEffect, useCallback, useMemo} from "react";
import Steps from "./steps";
import './Converter.css'
import cloud from './assets/hero-image.png'
import Processing from "./Processing";
import convert from'./assets/convert.png'
import jsPDF from 'jspdf';


const Body = () => {
    const fileError = "Maximum file reached";
    const [data, setData] = useState(new Set()); // FROM ITERATION
    const [files, setFiles] = useState([]); //DATA FROM INPUT
    const [values, setValues] = useState([])
    const [loading, setLoading] = useState({    //HANDLE LOADING
        isLoading: false
    });

    const toggle = useCallback((x)=>{    //loading feature
        setLoading(prevLoading=>{
            return{
                ...prevLoading,
                isLoading:!loading.isLoading
            }
        })
    },[loading.isLoading])


    const handleChange = (e)=>{  //get files from input
        if (loading.isLoading === false){
            setFiles(prevFiles =>[...prevFiles, e.files]);
            setValues(prevValues =>[...prevValues, e.value])
        };
               
    }
    const handleFiles = useCallback(() => {
        const doc = new jsPDF();
        const fileNames = [];
        files.map((y)=>{
            Object.values(y).forEach(item=>{
                const reader = new FileReader();
                reader.onload = (e)=>{
                    const url = e.target.result
                    const fileName = item.name.replace(/\.[^/.]+$/, '');
                    const pageWidth = doc.internal.pageSize.getWidth();
                    const imgProps = doc.getImageProperties(url);
                    const pdfHeight = (imgProps.height * pageWidth) / imgProps.width;
                    doc.addPage();
                    doc.addImage(url, 'JPEG', 10, 20, pageWidth - 20, pdfHeight - 20, null, 'FAST');
                   // fileNames.push(fileName);
                   doc.save(`${fileName}.pdf`); //CURRENTLY SAVING ONE PICTURE
                };
                reader.readAsDataURL(item);
               
            })
        })
        
    }, [files]);

    useEffect(() => {   //iterate over multi-dimensional data gotten from input
        if (files.length < 4) {
            for (const i of files) {
                for (const j of i) {
                    setData(prevData=>new Set([...prevData, j]));
                }
            }  
        }
    }, [files]);

    const saved = Array.from(data).map(x=> // render data TO FILE
    <Processing
        key={x.size}
        id={x.size}
        name={x.name}
    />)

    return <>
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
                <input type="file" id="upload" multiple={false} accept=".jpg,.png,.xlsx,.doc,.docx,.xml,application/msword" onChange={(e)=>handleChange(e.target)}/>
                <p className="error-message">{files.length > 3 && fileError}</p>
                <div className="file-list">
                    <div className="files">
                        {saved}
                    </div>
                    <div className={files.length !== 0 && loading.isLoading?"loader": "hide"}></div>
                    <div className="convert-icon">
                        {files.length !== 0 && !loading.isLoading && (
                            <img src={convert} alt="convert-file" onClick={()=>{toggle();handleFiles()}} className="show" />
                        )}
                    </div>
                </div>
               
            </div>
            <div className="hero-image">
                <img src={cloud} alt="file" className="cloud-image"/>
            </div>
        </div>
        
    </>;
}
 
export default Body;