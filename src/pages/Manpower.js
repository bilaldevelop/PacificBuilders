import React from 'react';

const manpowerData = [
  { id: 1, role: 'Project Manager', count: 5 },
  { id: 2, role: 'Civil Engineer', count: 10 },
  { id: 3, role: 'Electrical Engineer', count: 4 },
  { id: 4, role: 'Safety Officer', count: 2 },
  { id: 5, role: 'Foreman', count: 8 },
  { id: 6, role: 'Carpenter', count: 12 },
  { id: 7, role: 'Laborer', count: 20 },
];

const ManpowerSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Our Manpower
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {manpowerData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.role}
                </h3>
                <p className="mt-2 text-gray-600">
                  Number of Employees: {item.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManpowerSection;