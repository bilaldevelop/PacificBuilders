import React from "react";

const MissionVision = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 p-10">
      {/* Left Content */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Construction Company in Lahore Pakistan Mission and Vision
        </h3>
        <p className="text-gray-700 mb-4">
          We strive to be a dynamic team, providing the highest
          <span className="text-blue-500 font-semibold"> quality construction services </span>
          available to make <span className="font-semibold">Pakistan</span> modern and prosper.
        </p>
        <p className="text-gray-700 mb-4">
          We, at <span className="font-bold">Thaheem Group of Companies</span>, are committed to stay and
          become the construction option by choice; pursuing excellence through discipline,
          experience, and dedication.
        </p>
        <p className="text-gray-700">
          Innovation and modern techniques of construction are at the core of our values to continue delivering the quality services to our customers. Our
          <span className="font-semibold"> vision </span>
          is not just a dream. It is a promise of a better tomorrow. This promise is clearly visible in our operations which are based on excellence,
          purpose-built architectural designs, creativity, comfort, and durability.
        </p>
      </div>

      {/* Right Image */}
      <div className="relative lg:w-1/2 w-full">
        <img
          src="./images/mission-vision.jpg"
          alt="Construction Site"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default MissionVision;
