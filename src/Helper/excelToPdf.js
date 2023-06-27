import XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

export const handleConvert = (files, setIsProcessing, setIsCompleted) => {
    setIsProcessing(true);
    const promises = [];
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = (e) => {
          const bufferArray = e.target.result;
          const wb = XLSX.read(bufferArray, { type: "buffer" });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws, {header:1});
          const doc = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: [792, 612] // 11 x 8.5 inches
          });          
          autoTable(doc, {
            head: [data[0]],
            body: data.slice(1),
            cellStyles: { 
              fontSize: 10, 
              lineHeight: 1.2, 
              cellPadding: 2,
              overflow: 'linebreak' 
            },
            startY: 20,
            styles: { overflow: 'linebreak' }
          });
          doc.save(`${file.name.slice(0, file.name.lastIndexOf("."))}.pdf`);
          resolve(data);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
  
      promises.push(promise);
    }
  
    Promise.all(promises)
      .then((data) => {
        console.log(data);
        setIsProcessing(false);
        setIsCompleted(true);
      })
      .catch((error) => {
        console.log(error);
        setIsProcessing(false);
        setIsCompleted(false);
      });
  };
  
  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
    
  // }