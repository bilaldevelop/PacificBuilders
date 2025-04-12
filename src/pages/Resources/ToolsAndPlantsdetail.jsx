import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ToolsAndPlantsdetail = () => {
  const tableRef = useRef();

  const handleDownloadPDF = () => {
    const input = tableRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("tools-and-plants.pdf");
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Tools & Plants List</h1>
        <button
          onClick={handleDownloadPDF}
          className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
        >
          Download PDF
        </button>
      </div>

      <div ref={tableRef} className="overflow-x-auto">
        <h2 className="text-lg font-semibold underline mb-4">PHYSICAL RESOURCES</h2>

        <table className="min-w-full border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 font-semibold text-gray-700">Instruments</th>
              <th className="p-2 font-semibold text-gray-700">Unit</th>
              <th className="p-2 font-semibold text-gray-700">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-t">Theodolites</td>
              <td className="p-2 border-t">Nos</td>
              <td className="p-2 border-t">9</td>
            </tr>
            <tr>
              <td className="p-2">Instrument Levels</td>
              <td className="p-2">Nos</td>
              <td className="p-2">72</td>
            </tr>
            <tr>
              <td className="p-2">Total Station</td>
              <td className="p-2">Nos</td>
              <td className="p-2">5</td>
            </tr>

            <tr className="bg-gray-100">
              <td className="p-2 font-semibold text-gray-700">Plant & Machinery</td>
              <td className="p-2 font-semibold text-gray-700">Unit</td>
              <td className="p-2 font-semibold text-gray-700">Quantity</td>
            </tr>

            {[
              ["Batching Plant", "Nos", 7],
              ["Transit Mixers", "Nos", 7],
              ["Loader Machine", "Nos", 4],
              ["Concrete Pump", "Nos", 3],
              ["Chain Blocks", "Nos", 200],
              ["Steel Cutting Machine", "Nos", 21],
              ["Power Floor Machine", "Nos", 3],
              ["Block Making Machine", "Nos", 2],
            ].map(([name, unit, qty], index) => (
              <tr key={index}>
                <td className="p-2">{name}</td>
                <td className="p-2">{unit}</td>
                <td className="p-2">{qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToolsAndPlantsdetail;
