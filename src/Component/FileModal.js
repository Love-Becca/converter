import React, { useState,useEffect } from 'react';
import '../Styles/Dashboard.css';
var XLSX = require("xlsx");
console.log(XLSX);

const FileModal = (props) => {
  const [selectedFile, setSelectedFile] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
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
  
  useEffect(() => {
    if (selectedFile.length > 0) {
      const workbook = XLSX.readFile(selectedFile[0].name)
      console.log(workbook);
    }
  }, [selectedFile]);

  const removeFile = (indexToRemove)=>{
    setSelectedFile(prevSelectedFile => {
      return prevSelectedFile.filter((files,index)=> index !== indexToRemove)
    })
  }


  const handleConvert = () => {
    setIsProcessing(true);

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 3000);
  };

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
                <button className="convert-button" onClick={handleConvert}>
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
