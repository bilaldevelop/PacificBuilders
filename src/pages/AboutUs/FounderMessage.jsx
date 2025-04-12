import React from 'react';

const FounderMessage = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-10 md:px-20 lg:px-40">
      <h2 className="text-3xl font-bold text-center mb-10">Founder Message</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-shrink-0">
          <img
            src="https://via.placeholder.com/250" // Replace with your actual image path
            alt="Founder"
            className="rounded-full w-64 h-64 object-cover border-4 border-gray-300"
          />
        </div>
        <div className="text-gray-700 text-justify text-base leading-relaxed max-w-4xl">
          <p className="mb-4">
            Thaheem Construction Company is a flagship company of Thaheem Group. It has been founded by Mr. Manzoor Ahmad Khan Thaheem in 1991. It is one of the most modern, largest vertically integrated construction companies in Pakistan. Thaheem Construction Company has proud of the successful completion of multiple countrywide projects. With Thaheem’s name being synonymous with stability, profitability, brand strength and customer loyalty, our mission is to retain market leadership as the lowest cost producer of the highest quality products – the most enduring competitive edge being the quality of our constructed buildings.
          </p>
          <p className="mb-4">
            It is a great achievement for the Thaheem Group of Companies that what was envisioned at the beginning has now successfully been grasped into a concrete reality irrespective of bureaucratic as well as geographical obstacles. This milestone has only been achieved for the reason that we continue to achieve technical reliability and commercial competitiveness by offering unique construction solutions amongst the competition. We at Thaheem always target to complete all the projects at the promised time without compromising on quality to the best of the customers’ satisfaction. We always consider our customers as our most vital resources in the growth of our business.
          </p>
          <p className="mb-4">
            We find it germane to emphasize that we are fully committed to ensuring customers’ satisfaction with all the products and services bearing the name of Thaheem and keep adhering to stringent quality codes in conducting our business processes on well-defined ethical lines. We are determined to leave no stone unturned in an effort to continuously improve our services and products year after year. In short, I can say that Thaheem group of Companies is not a business anymore. It’s my passion. So, from the platform of Thaheem, we as a team, strive from dawn to dusk to deliver everything we deliver at international standard of quality.
          </p>
          <p className="font-semibold mt-6">
            Manzoor Ahmad Khan (Late)
          </p>
          <p className="font-semibold">
            Founder of Thaheem Construction
          </p>
        </div>
      </div>
    </div>
  );
};

export default FounderMessage;