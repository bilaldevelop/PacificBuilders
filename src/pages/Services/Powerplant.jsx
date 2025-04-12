// import React from 'react';

// const SugarMill = () => {
//   return (
//     <div className="min-h-screen bg-white px-4 py-10 flex justify-center items-start">
//       <div className="w-full max-w-screen-xl lg:w-[90%] flex flex-col lg:flex-row gap-8">
//         {/* Text Content */}
//         <div className="flex-1">
//           <h1 className="text-3xl font-bold text-gray-900 mb-6">Sugar Industries</h1>
          
//           <h2 className="text-2xl font-bold text-gray-900 leading-tight">
//             Sugar Mill Construction Services by Thaheem <br /> Construction Company
//           </h2>
          
//           <p className="text-gray-700 mt-4 leading-relaxed">
//             Below is a list of our successfully completed <strong>sugar mill construction</strong> projects. We at <strong>Thaheem Construction Company</strong> are committed to provide quality <strong>sugar mill construction services</strong> at affordable rates in <strong>Pakistan</strong>. With an experienced and highly professional team we are confident to say that our company is one of the best <strong>sugar mill construction companies in Pakistan</strong>.
//           </p>

//           {/* Bullet Points */}
//           <ul className="list-disc pl-5 mt-4 text-gray-800 space-y-1">
//             <li>JDW Sugar Mills Limited</li>
//             <li>JK Sugar Mills (Pvt) Ltd</li>
//             <li>Deharki Sugar Mills (Pvt) Ltd</li>
//             <li>Ghotki Sugar Mills (Pvt) Ltd</li>
//             <li>Indus Sugar mills (Pvt) Ltd</li>
//             <li>Dewan Sugar Mills (Pvt) Ltd</li>
//           </ul>
//         </div>

//         {/* Image */}
//         <div className="flex-shrink-0 w-full lg:w-[40%]">
//           <img
//             src="/images/rafhanmaize600-1-1.jpg"
//             alt="Sugar Mill Construction"
//             className="w-full rounded shadow"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SugarMill;


import React from "react";

const SugarIndustries = () => {
  return (
    <div className="w-[90%] mx-auto py-12 flex flex-col lg:flex-row items-start gap-8">
      {/* Left Text Section */}
      <div className="lg:w-2/3 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Sugar Industries</h2>
        <h3 className="text-2xl font-bold text-gray-800 leading-tight">
          Sugar Mill Construction Services by Thaheem Construction Compnay
        </h3>
        <p className="text-gray-700">
          Below is a list of our successfully completed <strong>sugar mill construction</strong> projects. We at <strong>Thaheem Construction Company</strong> are committed to provide quality <strong>sugar mill construction services</strong> at affordable rates in <strong>Pakistan</strong>. With an experienced and highly professional team we are confident to say that our company is one of the best <strong>sugar mill construction companies in Pakistan</strong>.
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>JDW Sugar Mills Limited</li>
          <li>JK Sugar Mills (Pvt) Ltd</li>
          <li>Deharki Sugar Mills (Pvt) Ltd</li>
          <li>Ghotki Sugar Mills (Pvt) Ltd</li>
          <li>Indus Sugar mills (Pvt) Ltd</li>
          <li>Dewan Sugar Mills (Pvt Ltd</li>
        </ul>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/3">
        <img
          src="/images/rafhanmaize600-1-1.jpg"
          alt="Sugar Mill Construction"
          className="w-full h-auto rounded"
        />
      </div>
    </div>
  );
};

export default SugarIndustries;
