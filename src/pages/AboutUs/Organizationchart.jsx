import React from "react";

const OrganizationChart = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-6">Organizational Chart</h2>
      <img
        src="/images/Pacific Builders Chart.jpg"
        alt="Thaheem Group Organizational Chart"
        className="w-full max-w-5xl border rounded shadow"
      />
    </div>
  );
};

export default OrganizationChart;
