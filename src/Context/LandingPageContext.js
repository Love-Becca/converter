import React, { useState, useEffect, createContext,useCallback} from 'react';
import jsPDF from 'jspdf';
export const LandingPageContext = createContext()

const LandingPageContextProvider = (props) => {
    const [files, setFiles] = useState([]);
    const [isFixed, setIsFixed] = useState(false);
    const [iteratedFiles, setIteratedFiles] = useState(new Set()); // FROM ITERATION change to iterated files
    const [downloadFile, setDownloadFile] = useState(false);

    useEffect(() => {   //iterate over multi-dimensional data gotten from input
        if (files.length < 4) {
            for (const i of files) {
                for (const j of i) {
                    setIteratedFiles(prevIteratedFiles=>new Set([...prevIteratedFiles, j]));
                }
            }  
        }
    }, [files]);

    const convertFiles = useCallback(() => {
        const doc = new jsPDF();
        files.map((y)=>{
            Object.values(y).forEach(item=>{
                const reader = new FileReader();
                reader.onload = (e)=>{
                    const url = e.target.result
                    const fileName = item.name.replace(/\.[^/.]+$/, '');
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

    const updateIsFixed = (value) => {
        setIsFixed(value);
    };

    return (
        <LandingPageContext.Provider value={{files, setFiles, iteratedFiles, setIteratedFiles, downloadFile, setDownloadFile, convertFiles, isFixed, updateIsFixed}}>
            {props.children}
        </LandingPageContext.Provider>
    );
}
 
export default LandingPageContextProvider;