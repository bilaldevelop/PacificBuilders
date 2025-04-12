import React from 'react';

const CEOPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* CEO Image */}
          <div className="relative group">
            <img
              src="/images/ceo-portrait.jpg"
              alt="CEO Name"
              className="w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-300"
            />
            <div className="absolute inset-0 border-8 border-white/20 rounded-2xl pointer-events-none" />
          </div>

          {/* CEO Introduction */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              John <span className="text-blue-600">Doe</span>
            </h1>
            <p className="text-2xl text-gray-600 font-medium">
              Chief Executive Officer
            </p>
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="text-lg text-gray-600 italic">
                "Building tomorrow's legacy through innovation and leadership"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Biography</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              With over <strong className="text-blue-600">15+ years</strong> of 
              executive experience in the construction industry, John Doe has 
              pioneered groundbreaking projects across Pakistan. His leadership 
              at <strong>Pacific Builders</strong> has resulted in...
            </p>
            <p>
              A graduate of <strong>NUST</strong> with an MBA from 
              <strong>LUMS</strong>, John combines technical expertise with 
              strategic vision. His commitment to sustainable development...
            </p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: '🏗️',
                title: 'Projects Completed',
                value: '250+'
              },
              {
                icon: '📈',
                title: 'Company Growth',
                value: '300%'
              },
              {
                icon: '🏆',
                title: 'Industry Awards',
                value: '15+'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.value}</div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership Philosophy</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-gray-600">
                "True progress comes from challenging conventional methods and 
                embracing new technologies..."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Team Empowerment</h3>
              <p className="text-gray-600">
                "Great achievements are never individual efforts - they're the 
                result of collaborative excellence..."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              Email: <a href="mailto:ceo@pacificbuilders.com" className="text-blue-600 hover:underline">ceo@pacificbuilders.com</a>
            </p>
            <p className="text-lg text-gray-600">
              LinkedIn: <a href="#" className="text-blue-600 hover:underline">linkedin.com/in/johndoe</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOPage;