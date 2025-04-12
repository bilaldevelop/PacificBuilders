import React, { useRef } from 'react';

const certificateImages = [
  '/images/93.jpg',
  '/images/93 (1).jpg',
  '/images/93 (1).jpg',
  '/images/93.jpg',

];

const CompletionCertificates = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -500, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 500, behavior: 'smooth' });
  };

  return (
    <section className="w-[90%] mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Completion Certificates</h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-amber-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-amber-800 transition"
        >
          &#8249;
        </button>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pr-4"
        >
          {certificateImages.map((src, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] border rounded shadow"
            >
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-amber-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-amber-800 transition"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default CompletionCertificates;