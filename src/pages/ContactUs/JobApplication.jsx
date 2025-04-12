import React from "react";

const JobApplicationForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <form className="w-full lg:w-[90%] space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Job Application</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 px-4 py-4 w-full rounded-md"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 px-4 py-4 w-full rounded-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 px-4 py-4 w-full rounded-md"
          />
          <input
            type="text"
            placeholder="Phone"
            className="border border-gray-300 px-4 py-4 w-full rounded-md"
          />
        </div>

        <input
          type="text"
          placeholder="What position are you applying for?"
          className="border border-gray-300 px-4 py-4 w-full rounded-md"
        />

        <input
          type="file"
          className="file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-gray-100 file:rounded-md file:text-sm text-gray-700"
        />

        <input
          type="text"
          placeholder="URL"
          className="border border-gray-300 px-4 py-4 w-full rounded-md"
        />

        <button
          type="submit"
          className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
