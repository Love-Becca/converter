import React from 'react';
import '../Styles/Dashboard.css'

const FileModal = ({open, onClose}) => {
  return (
        <div className="modal_body">
            <div className="modal_container">
                <h1>yahhh</h1>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default FileModal;