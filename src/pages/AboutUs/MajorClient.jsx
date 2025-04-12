import React from 'react';

const logos = [
  // Replace these with actual logo URLs from Unsplash or your image directory
  'https://via.placeholder.com/150x80?text=Logo+1',
  'https://via.placeholder.com/150x80?text=Logo+2',
  'https://via.placeholder.com/150x80?text=Logo+3',
  'https://via.placeholder.com/150x80?text=Logo+4',
  'https://via.placeholder.com/150x80?text=Logo+5',
  'https://via.placeholder.com/150x80?text=Logo+6',
  'https://via.placeholder.com/150x80?text=Logo+7',
  'https://via.placeholder.com/150x80?text=Logo+8',
  'https://via.placeholder.com/150x80?text=Logo+9',
  'https://via.placeholder.com/150x80?text=Logo+10',
  'https://via.placeholder.com/150x80?text=Logo+11',
  'https://via.placeholder.com/150x80?text=Logo+12',
  'https://via.placeholder.com/150x80?text=Logo+13',
  'https://via.placeholder.com/150x80?text=Logo+14',
  'https://via.placeholder.com/150x80?text=Logo+15',
  'https://via.placeholder.com/150x80?text=Logo+16',
  'https://via.placeholder.com/150x80?text=Logo+17',
  'https://via.placeholder.com/150x80?text=Logo+18',
  'https://via.placeholder.com/150x80?text=Logo+19',
  'https://via.placeholder.com/150x80?text=Logo+20',
  'https://via.placeholder.com/150x80?text=Logo+21',
  'https://via.placeholder.com/150x80?text=Logo+22',
  'https://via.placeholder.com/150x80?text=Logo+23',
  'https://via.placeholder.com/150x80?text=Logo+24',
  'https://via.placeholder.com/150x80?text=Logo+25',
  'https://via.placeholder.com/150x80?text=Logo+26',
  'https://via.placeholder.com/150x80?text=Logo+27',
  'https://via.placeholder.com/150x80?text=Logo+28',
  'https://via.placeholder.com/150x80?text=Logo+29',
  'https://via.placeholder.com/150x80?text=Logo+30',
];

const LogosGallery = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <h2 className="text-2xl font-semibold text-center mb-8">Our Partners</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="w-[150px] h-[80px] flex items-center justify-center p-2 border rounded shadow-sm bg-white hover:shadow-md transition">
            <img src={logo} alt={`Logo ${index + 1}`} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosGallery;