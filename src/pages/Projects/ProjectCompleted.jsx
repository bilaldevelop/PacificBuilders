import React from 'react';

const ProjectsCompleted = () => {
  return (
    <div className="px-6 py-12 bg-white text-gray-800">
      <p className="max-w-4xl mx-auto text-start text-lg leading-relaxed">
      <h2 className="text-3xl font-bold text-start mb-6">Project Completed</h2>
        Thaheem <strong>construction company</strong> has an infinite list of <strong>completed projects</strong> range from 
        <strong> cement industries</strong>, 
        <span className="text-blue-500 font-medium"> high rise buildings</span>, 
        <span className="text-blue-500 font-medium"> Daycare Centers</span>, feed mills, 
        poultry farms, school and college buildings, 
        <span className="text-blue-500 font-medium"> warehouse buildings</span>, 
        chemical and detergent plants, industrial, textile, flour mills, 
        <span className="text-blue-500 font-medium"> power and energy</span>, pharmaceuticals and hospitals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto text-[18px]">
        <ul className="space-y-2 text-amber-700 font-semibold list-disc list-inside">
          <li>High Rise Buildings</li>
          <li>Paper Industries</li>
          <li>Rice & Flour Mills</li>
          <li>Power & Energy</li>
          <li>Cement Industries</li>
          <li>Sugar Industries</li>
          <li>Chemical/Detergent Plants</li>
          <li>Oil & Solvent Plants</li>
          <li>Poultry Farms & Hatcheries</li>
          <li>Textile & Stitching Unit</li>
        </ul>
        <ul className="space-y-2 text-amber-700 font-semibold list-disc list-inside">
          <li>Automobile Industries</li>
          <li>Hospitals</li>
          <li>Battery Recycling Plants</li>
          <li>Mosques</li>
          <li>Daycare Center Building</li>
          <li>Feed Mills</li>
          <li>Ware Houses / Shells/Godowns</li>
          <li>Industrial Projects</li>
          <li>School & Colleges Buildings</li>
          <li>Pharmaceutical Industries</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectsCompleted;