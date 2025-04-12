import React from 'react';
import { Link } from 'react-router-dom';


const teamData = [
  {
    name: 'Ali Raza',
    designation: 'Legal Advisor',
    image: '/images/ali-raza.jpg',
  },
  {
    name: 'Javed Iqbal',
    designation: 'Account Officer',
    image: '/images/ali-raza.jpg',
  },
  {
    name: 'Toqeer-ul-Hassan',
    designation: 'Admin Manager',
    image: '/images/ali-raza.jpg',
  },
  {
    name: 'Nadeem Shah',
    designation: 'IT Manager',
    image: '/images/ali-raza.jpg',
  },
  {
    name: 'Imran Khan',
    designation: 'Safety Officer',
    image: '/images/ali-raza.jpg',
  },
  {
    name: 'Abdul Qayyum',
    designation: 'Store Incharge',
    image: '/images/ali-raza.jpg',
  },
  {
    name: 'Fahad Ali',
    designation: 'Site Engineer',
    image: '/images/ali-raza.jpg',
  },
  {
    name: 'Zeeshan Ahmad',
    designation: 'Procurement Head',
    image: '/images/ali-raza.jpg',
  },
];

const ManPower = () => {
  return (
    <section className="w-[90%] mx-auto py-12">
    <div className="flex justify-between items-center mb-10">
  <h2 className="text-3xl font-bold text-gray-800">Man Power</h2>
  <Link to="/man-power-list">
    <button className="bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold px-5 py-2 rounded-md transition">
      Man Power List &gt;
    </button>
  </Link>
</div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {teamData.map((person, index) => (
          <div key={index} className="text-center">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-medium text-gray-800">{person.name}</h3>
            <p className="text-sm text-gray-500">Designation: {person.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManPower;