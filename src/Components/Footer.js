// import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-400 py-12">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
//         {/* About Section */}
//         <div>
//           <h3 className="text-lg font-semibold text-amber-500 mb-4">ABOUT</h3>
//           <p className="text-sm mb-4">
//             Thaheem Group of Companies is committed to excellence through
//             discipline, experience, and dedication.
//           </p>
//           <div className="text-sm space-y-2">
//             <p className="flex items-center gap-2">
//               <FaMapMarkerAlt className="text-amber-500" /> 100-Aurangzeb Block, New Garden Town Lahore, Pakistan
//             </p>
//             <p className="flex items-center gap-2">
//               <FaPhoneAlt className="text-amber-500" /> +92 35854938
//             </p>
//             <p className="flex items-center gap-2">
//               <FaEnvelope className="text-amber-500" /> admin@thaheemgroup.co
//             </p>
//           </div>
//         </div>

//         {/* Company Section */}
//         <div>
//           <h3 className="text-lg font-semibold text-amber-500 mb-4">COMPANY</h3>
//           <ul className="text-sm space-y-2">
//             {["Mission & Vision", "Major Clients", "Thaheem Concrete", "TCC Construction", "Thaheem Mix Concrete"].map((item, index) => (
//               <li key={index}>
//                 <a href="#" className="hover:text-white">{item}</a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Projects Section */}
//         <div>
//           <h3 className="text-lg font-semibold text-amber-500 mb-4">PROJECTS</h3>
//           <ul className="text-sm space-y-2">
//             {["Project Completed", "Project In Hand"].map((item, index) => (
//               <li key={index}>
//                 <a href="#" className="hover:text-white">{item}</a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Certifications & Sitemap Section */}
//         <div>
//           <h3 className="text-lg font-semibold text-amber-500 mb-4">CERTIFICATIONS</h3>
//           <ul className="text-sm space-y-2">
//             {["ISO Certificates", "PEC Certificates"].map((item, index) => (
//               <li key={index}>
//                 <a href="#" className="hover:text-white">{item}</a>
//               </li>
//             ))}
//           </ul>
//           <h3 className="text-lg font-semibold text-amber-500 mt-6 mb-4">SITEMAP</h3>
//           <ul className="text-sm space-y-2">
//             <li>
//               <a href="#" className="hover:text-white">Click Me For Sitemap</a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Social Media & Footer Bottom */}
//       <div className="border-t border-gray-700 mt-8 pt-6 text-center">
//         <div className="flex justify-center space-x-6 mb-4">
//           <a href="#" className="text-gray-400 hover:text-white text-lg">
//             <FaFacebookF />
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white text-lg">
//             <FaLinkedinIn />
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white text-lg">
//             <FaTwitter />
//           </a>
//         </div>
//         <p className="text-xs text-gray-500">
//           Designed and Developed by <a href="#" className="text-white font-semibold">M.Bilal Yousaf</a>
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-teal-400 mb-4">ABOUT</h3>
          <p className="text-sm mb-4">
            Pacific Builders is committed to excellence through
            discipline, experience, and dedication.
          </p>
          <div className="text-sm space-y-2">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-teal-400" /> 100-Aurangzeb Block, New Garden Town Lahore, Pakistan
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-teal-400" /> +92 35854938
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-teal-400" /> admin@pacificbuilders.co
            </p>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold text-teal-400 mb-4">COMPANY</h3>
          <ul className="text-sm space-y-2">
            {["Mission & Vision", "Major Clients", "Our Team", "What We Do", "Careers"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-lg font-semibold text-teal-400 mb-4">PROJECTS</h3>
          <ul className="text-sm space-y-2">
            {["Completed Projects", "Ongoing Projects"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications & Sitemap Section */}
        <div>
          <h3 className="text-lg font-semibold text-teal-400 mb-4">CERTIFICATIONS</h3>
          <ul className="text-sm space-y-2">
            {["ISO Certificates", "PEC Certificates"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold text-teal-400 mt-6 mb-4">SITEMAP</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="#" className="hover:text-white transition-colors">Click Me For Sitemap</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media & Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-teal-400 hover:text-white text-lg transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="text-teal-400 hover:text-white text-lg transition-colors">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-teal-400 hover:text-white text-lg transition-colors">
            <FaTwitter />
          </a>
        </div>
        <p className="text-xs text-gray-500">
          Designed and Developed by <a href="#" className="text-white font-semibold">M. Bilal Yousaf</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
