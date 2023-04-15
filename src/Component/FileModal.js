import React, { useState } from 'react';
import '../Styles/Dashboard.css';

const FileModal = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

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
                <input type="file" id="files" accept=".csv,.xlsx,.html,.json,.xml,.pdf" onChange={handleFileChange} className="input_file" />
                <label className='label' htmlFor='files'>Upload File</label>
            </div>
            {selectedFile && (
            <p className="selected_file">{selectedFile.name}</p>
            )}
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
  );
};

export default FileModal;
