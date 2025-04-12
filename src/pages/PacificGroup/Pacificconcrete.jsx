import React, { useState } from "react";

const TCCConstruction = () => {
  const images = [
    {
      url: "https://via.placeholder.com/600x400?text=Industrial+Plant",
      caption: "",
    },
    {
      url: "https://via.placeholder.com/600x400?text=Textile+Mill",
      caption: "Sapphire Textile Mills Ltd Feroz Wattwan, Sheikhupura",
    },
    {
      url: "https://via.placeholder.com/600x400?text=High+Rise+Building",
      caption: "",
    },
    {
      url: "https://via.placeholder.com/600x400?text=Power+Plant",
      caption: "",
    },
    {
      url: "https://via.placeholder.com/600x400?text=School+Building",
      caption: "",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % images.length);
  };

  const visibleImages = [
    images[startIndex],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
  ];

  return (
<div className="bg-white px-8 py-12 font-sans w-full lg:w-[90%] mx-auto">

      {/* Heading Section */}
      <h2 className="text-3xl font-bold text-black mb-2">TCC Construction</h2>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Quality construction services in Lahore, Pakistan
      </h3>
      <p className="text-gray-700 text-base leading-relaxed mb-8">
        <span className="text-blue-600 font-bold">TCC Construction</span> is
        the subsidiary of <span className="font-semibold">Thaheem</span>{" "}
        Construction <span className="font-semibold">Company</span>. Its head
        office situated in <span className="font-semibold">Lahore</span>. It is
        offering construction <span className="font-semibold">services</span>{" "}
        all over <span className="font-semibold">Pakistan</span> in the plains,
        hills and mountainous terrains. After successfully completing a variety
        of several construction projects such as{" "}
        <span className="text-blue-600 font-medium">
          high rise buildings, sugar industries, power plants, rice and flour
          mills, paper industries, textile and stitching units, automobile
          industries, pharmaceutical and hospitals, school and college
          buildings, industrial projects, oil and solvent plants
        </span>
        , we are confident to say that we deliver matchless{" "}
        <span className="font-semibold">quality</span> construction service at
        affordable rates.
      </p>

      {/* Image Gallery */}
      <div className="relative">
        {/* Images Row */}
        <div className="flex gap-4">
          {visibleImages.map((img, index) => (
            <div key={index} className="w-1/3">
              <img
                src={img.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded shadow-md"
              />
              {img.caption && (
                <p className="text-sm text-center text-gray-600 mt-2">
                  {img.caption}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white rounded-full p-3 hover:bg-orange-700 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white rounded-full p-3 hover:bg-orange-700 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TCCConstruction;
