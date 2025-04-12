import React from 'react';
import { Link } from 'react-router-dom';

const toolsData = [
  {
    name: 'Batching Plants',
    quantity: '07 Nos',
    image: '/images/compact-batching-plant1-1.jpg',
  },
  {
    name: 'Transit Mixers',
    quantity: '07 Nos',
    image: '/images/comp-rooler1-2.jpg',
  },
  {
    name: 'Concrete Pumps',
    quantity: '03 Nos',
    image: '/images/concretemixer1-1.jpg',
  },
  {
    name: 'Loaders',
    quantity: '04 Nos',
    image: '/images/conrete-pump1-2.jpg',
  },
  {
    name: 'Generators',
    quantity: '02 Nos',
    image: '/images/generators-1.jpg',
  },
  {
    name: 'Scaffolding',
    quantity: 'Quantity = 1,345,803 Rft',
    image: '/images/scaffoldingpipes-1.jpg',
  },
  {
    name: 'Welding Plants',
    quantity: 'Quantity = 138 Nos',
    image: '/images/welding-plant-2.jpg',
  },
  {
    name: 'Mixer Machines',
    quantity: 'Quantity = 87 Nos',
    image: '/images/concretemixer1-1.jpg',
  },
];

const ToolsAndPlants = () => {
  return (
    <section className="px-4 py-12 w-full lg:w-[90%] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Tools & Plants</h2>
        <Link to="/tools-and-plants-list">
        <button className="bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold px-5 py-2 rounded-md transition">
          Tools & Plant List &gt;
        </button>
        </Link>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {toolsData.map((tool, index) => (
          <div key={index} className="text-center">
            <img
              src={tool.image}
              alt={tool.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">{tool.name}</h3>
            <p className="text-sm text-gray-500">Quantity = {tool.quantity}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsAndPlants;
