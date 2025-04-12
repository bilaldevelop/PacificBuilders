import React from "react";

const PECCertificates = () => {
  return (
    <div className="flex justify-center px-4 py-10 bg-white">
      <div className="w-full lg:w-[90%]">
        <h2 className="text-xl font-semibold mb-2">PEC Certificates</h2>
        <h3 className="text-lg font-medium mb-2">
          Pec Certified construction company in Lahore Pakistan
        </h3>
        <p className="text-gray-700 mb-6">
          Pakistan engineering council award category C6/C5 to shaheen{" "}
          <strong>construction company in Lahore Pakistan</strong> for
          performing construction operations all over the country.
        </p>

        {/* Image 1 - PEC Building */}
        <img
          src="/images/Pacific Builders Profile_pages-to-jpg-0039.jpg" // ← Replace with your actual image or local path
          alt="PEC Building"
          className="w-full mb-6 rounded shadow-md"
        />

        {/* Images - Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="/images/Pacific Builders Profile_pages-to-jpg-0039.jpg" // ← Replace with actual image or local path
            alt="PEC License"
            className="w-full rounded shadow-md"
          />
          <img
            src="public\images\Pacific Builders Profile_pages-to-jpg-0039.jpg" // ← Replace with actual image or local path
            alt="pecbuild1"
            className="w-full rounded shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PECCertificates;
