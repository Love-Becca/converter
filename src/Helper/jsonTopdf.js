import { PDFDocument } from 'pdf-lib';

export function convertJsonToPdf(file) {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = async () => {
    const content = JSON.parse(reader.result);
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    // Convert JSON to string
    const contentString = JSON.stringify(content, null, 2);
    console.log(contentString);
    page.drawText(contentString, {
      x: 50,
      y: 500,
      size: 12,
    });

    const pdfBytes = await pdfDoc.save();
  };
}