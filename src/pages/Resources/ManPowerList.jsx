import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ManPowerList = () => {
  const tableRef = useRef();

  const handleDownloadPDF = () => {
    html2canvas(tableRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("man-power-list.pdf");
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Man Power List</h1>
        <button
          onClick={handleDownloadPDF}
          className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
        >
          Download PDF
        </button>
      </div>

      <div ref={tableRef} className="space-y-10">
        {/* Engineers Table */}
        <table className="w-full border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 font-semibold text-gray-700">Engineers</th>
              <th className="p-2 font-semibold text-gray-700">Qualification</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Muhammad Ubaidullah Khan", "BSc, Civil Engineer /Civil/25607"],
              ["Muhammad Rafique Mian", "BSc, Civil Engineer /Civil/01166"],
              ["Muhammad Rashid Anwar", "MSc,Mech Engineer Mech/00471"],
              ["Muhammad Aslam", "BSc, Chem Engineer /Chem/68"],
              ["Muhammad Zulfiqar Ahmad", "BSc,Elect Engineer /Elect/15413"],
              ["Muhammad Ajmal", "BSc,Elect Engineer /Elect/48454"],
            ].map(([name, qualification], i) => (
              <tr key={i}>
                <td className="p-2 border-t">{name}</td>
                <td className="p-2 border-t">{qualification}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Administration Department Table */}
        <table className="w-full border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 font-semibold text-gray-700">Administration Department</th>
              <th className="p-2 font-semibold text-gray-700">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-t">Toqeer ul Hassan</td>
              <td className="p-2 border-t">B.A.</td>
            </tr>
            <tr>
              <td className="p-2">Muhammad Hussain Shakeel</td>
              <td className="p-2">B.A.</td>
            </tr>
          </tbody>
        </table>

        {/* Corporate & Engineering Advisor */}
        <table className="w-full border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 font-semibold text-gray-700">Corporate & Engineering Advisor</th>
              <th className="p-2 font-semibold text-gray-700">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-t">Engr. Zaki ud Din Sheikh</td>
              <td className="p-2 border-t">M.Sc. Civil (MD. U.S.A.)</td>
            </tr>
          </tbody>
        </table>

        {/* Quantity Surveyors Table */}
        <table className="w-full border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 font-semibold text-gray-700">Quantity Surveyors</th>
              <th className="p-2 font-semibold text-gray-700">Qualification</th>
            </tr>
          </thead>
          <tbody>
            {/* Add rows here if needed */}
            <tr>
              <td className="p-2 border-t">---</td>
              <td className="p-2 border-t">---</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManPowerList;
