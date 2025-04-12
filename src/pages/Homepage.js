// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Homepage = () => {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   const slides = [
//     {
//       title: 'Construction Company In Lahore',
//       description: 'Thaheem Construction Company is Proud to Provide All types of Quality Construction Services Since 1991.',
//       imageUrl: 'https://via.placeholder.com/600x800/4A5568/FFFFFF?text=Slide+1',
//       services: [
//         'High Rise Buildings',
//         'Sugar Industries',
//         'Power Plants',
//       ],
//     },
//     {
//       title: 'Another Construction Project',
//       description: 'Providing top-notch construction services with a focus on quality and innovation.',
//       imageUrl: 'https://via.placeholder.com/600x800/2D3748/FFFFFF?text=Slide+2',
//       services: [
//         'Rice & Flour Mills',
//         'Cement Industries',
//         'Infrastructure',
//       ],
//     },
//     {
//       title: 'Building the Future',
//       description: 'Committed to excellence in every project we undertake, ensuring client satisfaction.',
//       imageUrl: 'https://via.placeholder.com/600x800/1A202C/FFFFFF?text=Slide+3',
//       services: [
//         'Renovations',
//         'Consulting',
//         'Project Management',
//       ],
//     },
//   ];
//   return (
//     <>
//     <div className="bg-gray-800 text-white py-16">
//       <div className="container mx-auto flex flex-col md:flex-row items-center">

//         {/* Left Column: Text Content */}
//         <div className="md:w-1/2 p-8">
//           <h2 className="text-3xl font-bold mb-4">CEO Message</h2>
//           <div className="w-12 h-1 bg-yellow-500 mb-4"></div>
//           <p className="text-lg mb-8">
//             Growing companies keep their past in mind and aspire to achieve unprecedented milestones in their future. We at Thaheem Group of Companies work on the same principals of ethics that were the root of our establishment. Since our beginnings, we are committed to providing personal and professional services in a responsive, high-quality manner. And we still abide by these core values.
//           </p>
//           <button className="bg-transparent hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
//             More Reading
//           </button>
//         </div>

//         {/* Right Column: Image */}
//         <div className="md:w-1/2 relative p-8">
//           <img
//             src="https://via.placeholder.com/640x480" // Replace with your image URL
//             alt="Building"
//             className="rounded-lg shadow-xl"
//           />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             <button className="bg-white text-gray-800 rounded-full w-16 h-16 flex items-center justify-center opacity-75 hover:opacity-100">
//               <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="bg-yellow-700 text-white py-4 flex flex-col md:flex-row items-center justify-between px-8">
//         <div className="text-sm">
//           Call For a Quote: +92 42-35854938
//         </div>
//         <div>
//           <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-200">
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </div>

//     <div className="bg-gray-100">
//       <Slider {...sliderSettings}>
//         {slides.map((slide, index) => (
//           <div key={index} className="flex flex-col md:flex-row">
//             {/* Left Column: Image and Text */}
//             <div className="md:w-1/2 relative">
//               <img
//                 src={slide.imageUrl}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute top-1/4 left-1/4 p-8">
//                 <div className="w-12 h-1 bg-yellow-500 mb-4"></div>
//                 <h2 className="text-3xl font-bold text-white mb-4">{slide.title}</h2>
//                 <p className="text-lg text-white mb-8">{slide.description}</p>
//                 <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
//                   View Our Work
//                 </button>
//               </div>
//             </div>

//             {/* Right Column: Services List */}
//             <div className="md:w-1/2 bg-yellow-500 text-white p-8">
//               <h3 className="text-2xl font-bold mb-4">Our Services:</h3>
//               <ul>
//                 {slide.services.map((service, i) => (
//                   <li key={i} className="flex items-center mb-2">
//                     <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                     </svg>
//                     {service}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>

//     <div className="bg-white">
//       <div className="grid grid-cols-1 lg:grid-cols-2">
//         {/* Contact Form Section */}
//         <div className="bg-amber-600 py-12 px-8">
//           <div className="max-w-md mx-auto">
//             <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
//             <div className="border-b border-white w-12 mb-6"></div>

//             <form className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring focus:ring-white focus:border-white"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring focus:ring-white focus:border-white"
//                 />
//               </div>
//               <div>
//                 <textarea
//                   placeholder="Message"
//                   rows="4"
//                   className="w-full px-4 py-2 border rounded-md text-gray-700 focus:ring focus:ring-white focus:border-white"
//                 ></textarea>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   className="bg-transparent hover:bg-white text-white font-semibold py-2 px-4 border border-white hover:text-amber-600 rounded"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* Contact Information Section */}
//         <div className="py-12 px-8">
//           <div className="max-w-md mx-auto">
//             {/* Social Icons */}
//             <div className="flex justify-end space-x-4 mb-8">
//               <a href="#" className="text-gray-500 hover:text-gray-700">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#" className="text-gray-500 hover:text-gray-700">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" className="text-gray-500 hover:text-gray-700">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//               <a href="#" className="text-gray-500 hover:text-gray-700">
//                 <i className="fab fa-instagram"></i>
//               </a>
//             </div>

//             {/* Contact Details */}
//             <div className="space-y-4">
//               <div className="flex items-start space-x-2">
//                 <i className="fas fa-map-marker-alt text-gray-500"></i>
//                 <p className="text-gray-700">100-Aurangzeb Block, New Garden Town Lahore, 54700, Pakistan.</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <i className="fas fa-phone-alt text-gray-500"></i>
//                 <p className="text-gray-700">+92 42-35854938</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <i className="fas fa-envelope text-gray-500"></i>
//                 <p className="text-gray-700">admnlhr@thaheemgroup.co</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Homepage;