import React, { useState,useEffect } from 'react';
import '../Styles/Dashboard.css';
import XLSX from 'xlsx';


const FileModal = (props) => {
  const [selectedFile, setSelectedFile] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  console.log(selectedFile[0]);
  const fileTypes = {
    excel: {
      ext: [".csv" , ".xlsx", ".xml"]
    },
    json:{
      ext: ".json"
    },
    pdf: {
      ext: ".pdf"
    },
    compress : {
      ext: ".pdf"
    },
    html:{
      ext: ".html"
    },
    xml:{
      ext: ".xml"
    }
  };

  const fileType = fileTypes[props.clicked_card];
  
  const getFilesByFileType = (fileList, selectedFileType) => {
    return [...fileList].filter(file => {
      if (typeof selectedFileType.ext === "string") {
        return file.name.endsWith(selectedFileType.ext);
      } else if (Array.isArray(selectedFileType.ext)) {
        return selectedFileType.ext.some(ext => file.name.endsWith(ext));
      }
    });
  };
  
  const handleFileChange = (event) => {
    const selectedFileType = fileTypes[props.clicked_card];
    let pdfFiles = [];
  
    if (selectedFileType) {
      pdfFiles = getFilesByFileType([...event.target.files], selectedFileType);
    }
    
    const fileToAdd = [...selectedFile || [], ...pdfFiles];
      
    if (fileToAdd.length <= 5) {
      setSelectedFile(fileToAdd);
    }

  };
  

  const removeFile = (indexToRemove)=>{
    setSelectedFile(prevSelectedFile => {
      return prevSelectedFile.filter((files,index)=> index !== indexToRemove)
    })
  }

  
  const handleConvert = (file)=>{
    setIsProcessing(true);
    const promise = new Promise((resolve, reject)=>{
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e)=>{
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, {type:"buffer"});
        const wsname = wb.SheetNames[1];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      }
      fileReader.onerror = (error) =>{
        reject(error);
      }
    })

    promise.then((d)=>{
      console.log(d)
    })

    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 3000);
  }
  
  

  const handleDownload = () => {
    // Implement download logic here
    console.log('File downloaded!');
  };

  const onClose = () => {
    setSelectedFile(null);
    setIsProcessing(false);
    setIsCompleted(false);
    props.onClose();
  };

  return (
    <div className="modal_body">
      <div className="modal_container">
            <div className="modal_header">
                <h2>Select a file to convert</h2>
                <button onClick={onClose}>↩</button>
            </div>
            <div className="input_file_container">
               <input type="file" id="files" accept={Array.isArray(fileType.ext)? fileType.ext.join(", "): fileType.ext} multiple onChange={handleFileChange} className="input_file" />
                <label className='label' htmlFor='files'>Upload File</label>
            </div>
            {selectedFile && selectedFile.map((file,index) => 
              <div className='file_list' id={`file${index}`}  key={`file ${index}`}>
                <p className="selected_file">{file.name}</p>
                <p id="close"onClick={()=>removeFile(index)}>❌</p>
              </div>
            )}
            <div className='convert_download'>
                <button className="convert-button" onClick={()=>handleConvert(selectedFile[0])}>
                {isProcessing ? (
                    <div className="processing-animation"></div>
                ) : (
                    <div>
                        Convert
                        <i className="convert-icon"></i>
                    </div>
                )}
                </button>
                {isCompleted && (
                <button className="download-button" onClick={handleDownload}>
                    Download
                    <i className="download-icon"></i>
                </button>
                )}
            </div>
        </div>
    </div>
  );
};

export default FileModal;
