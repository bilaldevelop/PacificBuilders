import React from 'react';

const managementData = [
  {
    name: 'Manzoor Ahmed Khan (Late)',
    title: 'Founder',
    image: 'https://source.unsplash.com/200x200/?man,portrait1', // Replace with actual image URL
  },
  {
    name: 'Hafiz Muhammad Abdullah Khan',
    title: 'CEO',
    image: 'https://source.unsplash.com/200x200/?man,portrait2',
  },
  {
    name: 'Muhammad Ubaidullah Khan',
    title: 'Director',
    image: 'https://source.unsplash.com/200x200/?man,portrait3',
  },
  {
    name: 'Muhammad Saadullah Khan',
    title: 'Director',
    image: 'https://source.unsplash.com/200x200/?man,portrait4',
  },
  {
    name: 'Hamza Manzoor Khan',
    title: 'Director',
    image: 'https://source.unsplash.com/200x200/?man,portrait5',
  },
  {
    name: 'Gohar Manzoor Khan',
    title: 'Director',
    image: 'https://source.unsplash.com/200x200/?man,portrait6',
  },
];

const ManagementProfile = () => {
  return (
    <div className="py-12 px-4 md:px-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Management Profile</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {managementData.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full shadow-md"
            />
            <h3 className="mt-4 font-semibold text-lg">{member.name}</h3>
            <p className="text-gray-700 font-medium">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagementProfile;