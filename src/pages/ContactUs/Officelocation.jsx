import React from 'react';

const OfficeLocation = () => {
  return (
    <div className="w-full lg:w-[90%] mx-auto px-4 py-10 font-sans text-gray-800">

      {/* Title */}
      <h2 className="text-2xl font-semibold text-center mb-6">Office Location</h2>

      {/* Google Map */}
      <div className="w-full mb-10">
        <iframe
          title="Office Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13613.69590988053!2d74.31002194817359!3d31.51216264803583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905b024eaaff7%3A0xf0f4bb6898a43ddf!2sThaheem%20Construction%20Company!5e0!3m2!1sen!2s!4v1680102938446!5m2!1sen!2s"
          className="w-full h-[350px] border-none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Info + Form */}
      <div className="grid md:grid-cols-4 gap-8 mb-10">
        {/* Lahore Office */}
        <div>
          <h3 className="font-semibold mb-2">CONTACT US</h3>
          <p>Head Office Lahore:</p>
          <p>103-Greenpark Block, New Garden Town Lahore, 54000, Pakistan</p>
          <p>Telephone: +92-42-35845288</p>
          <p>Fax: +92-42-35845288</p>
          <p>Email: contact@thaheemgroup.co</p>
        </div>

        {/* Karachi Office */}
        <div>
          <h3 className="font-semibold mb-2">KARACHI OFFICE</h3>
          <p>Regional Office Karachi:</p>
          <p>Adam Arcade, 6th Floor Suite 604, Old Sabzi Mandi, Karachi, Pakistan</p>
          <p>Telephone: +92-21-36332186</p>
          <p>Mobile phone: +92-322-8525746</p>
          <p>Email: karachi@thaheemgroup.co</p>
        </div>

        {/* Islamabad Office */}
        <div>
          <h3 className="font-semibold mb-2">ISLAMABAD OFFICE</h3>
          <p>Regional Office Islamabad:</p>
          <p>House#17-C, Street#3, Iqbal Town, Airport Housing Society, Rawalpindi, Pakistan</p>
          <p>Telephone: +92-346-4408509</p>
          <p>Mobile phone: +92-321-5131977</p>
          <p>Website: www.thaheemgroup.co</p>
        </div>

        {/* Hyderabad Office */}
        <div>
          <h3 className="font-semibold mb-2">HYDERABAD OFFICE</h3>
          <p>Regional Office Hyderabad:</p>
          <p>D-209, Sana Arcade, Latifabad #8, District Jamshoro, Hyderabad, Pakistan</p>
          <p>Telephone: +92-22-2617441</p>
          <p>Email: secretary@thaheem.com</p>
          <p>Website: www.thaheemgroup.co</p>
        </div>
      </div>

      {/* Message Form */}
      <div className="w-full max-w-4xl mx-auto">
        <h3 className="font-semibold text-lg mb-4">SEND US A MESSAGE</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border p-2 w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border p-2 w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border p-2 w-full"
            />
          </div>
          <textarea
            placeholder="Message"
            className="border p-2 w-full h-40 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded float-right"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default OfficeLocation;
