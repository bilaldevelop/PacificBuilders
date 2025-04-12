import React from 'react';

const PacificBuilders = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Image */}
        <div className="mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/pacific-builders-hero.jpg"
              alt="Pacific Builders Project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                Nationwide Construction Excellence
              </h1>
            </div>
          </div>
        </div>

        {/* Content Grid with Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/pacific-office.jpg"
              alt="Pacific Builders Office"
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Premier Construction Company in Lahore
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to <strong className="text-blue-600">Pacific Builders</strong>, your 
              comprehensive construction partner. With our network of 5 regional offices 
              across Pakistan, we deliver unmatched quality in residential and 
              commercial projects.
            </p>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img
              src="/images/pacific-project-1.jpg"
              alt="Residential Project"
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img
              src="/images/pacific-project-2.jpg"
              alt="Commercial Complex"
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img
              src="/images/pacific-project-3.jpg"
              alt="Infrastructure Project"
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-blue-600 text-white py-8 px-6 rounded-xl shadow-xl mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              WHY CHOOSE PACIFIC BUILDERS?
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div>Years Experience</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold mb-2">250+</div>
                <div>Completed Projects</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold mb-2">5</div>
                <div>Regional Offices</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Banner */}
        <div className="bg-gray-800 text-white py-6 px-6 rounded-xl shadow-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">
              PACIFIC BUILDERS CONSTRUCTION COMPANY
            </h3>
            <p className="opacity-90">
              Nationwide Operations | ISO 9001 Certified | 24/7 Client Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PacificBuilders;