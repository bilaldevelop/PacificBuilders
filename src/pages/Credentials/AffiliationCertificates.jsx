import React from 'react';

const certificateImages = [
  '/images/111.jpg',
  '/images/Chamber-of-Commerce-2019-20.jpg',
  '/images/Construction-Association-Of-Pakistan.jpg',
  '/certificates/certificate4.jpg',
];

const AffiliationCertificates = () => {
  return (
    <section className="w-[90%] mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Affiliation Certificates</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificateImages.map((src, index) => (
          <div
            key={index}
            className="border rounded shadow overflow-hidden"
          >
            <img
              src={src}
              alt={`Certificate ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AffiliationCertificates;
