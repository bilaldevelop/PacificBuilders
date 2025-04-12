
import React, { useState, useEffect,useRef } from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaIndustry,
  FaPowerOff,
  FaCity,
  FaWarehouse,
  FaCogs
} from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";


import { WiWindy } from 'react-icons/wi';



import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow">
        <CustomSlider/>
        <ThaheemConstruction/>
        <ProjectCarousel/>
        <CEOScreen/>
        {/* <Homepage /> */}
        <HeroSection/>
        {/* <CEOMessage/> */}
        <ProjectsSection/>
        <ContactForm />
      </main>
    </div>
  );
};

// Header Component



const CustomSlider = () => {
  const slides = [
    {
      image: "/images/rice-flour-1.jpg",
      content: "Sitara Chemical Industries Limited",
      description:
        "As a reputable power plant construction company in Pakistan, we ensure professional and quality work for our clients.",
    },
    {
      image: "/images/high-rise-1.jpg",
      content: "Our Team",
      description:
        "Our team focuses on timely completion of projects and delivering matchless quality work at affordable rates.",
    },
    {
      image: "/images/pharma-1.jpg",
      content: "Our Approach",
      description:
        "This approach makes our power and energy infrastructure building services unique.",
    },
    {
      image: "/images/power-and-energy-1.jpg",
      content: "Our Approach",
      description:
        "This approach makes our power and energy infrastructure building services unique.",
    },
    {
      image: "/images/villa-1.jpg",
      content: "Our Approach",
      description:
        "This approach makes our power and energy infrastructure building services unique.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [currentSlide]);

  return (
    <div className="relative w-full">
      {/* Slider Section */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-5 sm:left-10 text-white bg-black/60 p-4 rounded-lg max-w-md">
              <h3 className="text-lg sm:text-xl font-semibold mb-1">{slide.content}</h3>
              <p className="text-sm sm:text-base">{slide.description}</p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-5 top-1/2 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-800 text-white p-2 sm:p-3 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-5 top-1/2 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-800 text-white p-2 sm:p-3 rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center flex-wrap gap-2 sm:gap-4 py-4 px-2 sm:px-4 bg-white">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-16 sm:w-20 h-10 sm:h-12 object-cover rounded-md cursor-pointer transition-all duration-300 ${
              index === currentSlide
                ? "border-2 border-teal-500 shadow-md"
                : "opacity-60 hover:opacity-100"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};


// const CustomSlider = () => {
//   const slides = [
//     {
//       image: "/images/rice-flour-1.jpg",
//       content: "Sitara Chemical Industries Limited",
//       description:
//         "As a reputable power plant construction company in Pakistan, we ensure professional and quality work for our clients.",
//     },
//     {
//       image: "/images/high-rise-1.jpg",
//       content: "Our Team",
//       description:
//         "Our team focuses on timely completion of projects and delivering matchless quality work at affordable rates.",
//     },
//     {
//       image: "/images/pharma-1.jpg",
//       content: "Our Approach",
//       description:
//         "This approach makes our power and energy infrastructure building services unique.",
//     },
//     {
//       image: "/images/power-and-energy-1.jpg",
//       content: "Our Approach",
//       description:
//         "This approach makes our power and energy infrastructure building services unique.",
//     },
//     {
//       image: "/images/villa-1.jpg",
//       content: "Our Approach",
//       description:
//         "This approach makes our power and energy infrastructure building services unique.",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   useEffect(() => {
//     const autoSlide = setInterval(() => {
//       nextSlide();
//     }, 3000);

//     return () => clearInterval(autoSlide);
//   }, [currentSlide]);

//   return (
//     <div className="relative w-full">
//       {/* Slider Section */}
//       <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img
//               src={slide.image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute bottom-10 left-5 sm:left-10 text-white bg-black/60 p-4 rounded-lg max-w-md">
//               <h3 className="text-lg sm:text-xl font-semibold mb-1">{slide.content}</h3>
//               <p className="text-sm sm:text-base">{slide.description}</p>
//             </div>
//           </div>
//         ))}

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-2 sm:left-5 top-1/2 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-800 text-white p-2 sm:p-3 rounded-full"
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-2 sm:right-5 top-1/2 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-800 text-white p-2 sm:p-3 rounded-full"
//         >
//           <FaArrowRight />
//         </button>
//       </div>

//       {/* Thumbnails */}
//       <div className="flex justify-center flex-wrap gap-2 sm:gap-4 py-4 px-2 sm:px-4 bg-white">
//         {slides.map((slide, index) => (
//           <img
//             key={index}
//             src={slide.image}
//             alt={`Thumbnail ${index + 1}`}
//             className={`w-16 sm:w-20 h-10 sm:h-12 object-cover rounded-md cursor-pointer transition-all duration-300 ${
//               index === currentSlide
//                 ? "border-2 border-teal-500 shadow-md"
//                 : "opacity-60 hover:opacity-100"
//             }`}
//             onClick={() => goToSlide(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };



const ThaheemConstruction = () => {
  const sections = [
    {
      image: "/images/image-iso-1.jpg",
      title: "REGISTRARS",
    },
  ];

  return (
    <div className="bg-white p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">
          Thaheem Construction An ISO Certified Company
        </h1>

        <div className="flex flex-col items-center">
          {sections.map((section, index) => (
            <div
              key={index}
              className="w-full max-w-sm sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg"
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto object-cover "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};





const ProjectCarousel = () => {

  const projects = [
    {
      name: 'Karargah Service Apartments Islamabad',
      image: '/images/karaghar-new.jpg',
      address: 'Siri-Nagar Highway H-13 Islamabad',
      details: 'Covered Area: 350,000 sqft | 4 High-Rise Towers | Cash & Carry',
    },
    {
      name: 'IMI Batteries & Metal Industries',
      image: '/images/sabroso-3d.jpg',
      address: 'Hyderabad',
      details: 'Covered Area: 120,000 sqft | Plant Building | Warehouse | Office | Masjid',
    },
    {
      name: 'Citadel Towers Islamabad',
      image: '/images/imi-480x357.jpg',
      address: 'Islamabad',
      details: 'Covered Area: 355,000 sqft | 5 Floors Shopping Mall | 7 Floors Offices | 7 Floors Residences',
    },
    {
      name: 'Citadel Towers Islamabad',
      image: '/images/citadel-3d.jpg',
      address: 'Islamabad',
      details: 'Covered Area: 355,000 sqft | 5 Floors Shopping Mall | 7 Floors Offices | 7 Floors Residences',
    },
    {
      name: 'Citadel Towers Islamabad',
      image: '/images/karaghar-new.jpg',
      address: 'Islamabad',
      details: 'Covered Area: 355,000 sqft | 5 Floors Shopping Mall | 7 Floors Offices | 7 Floors Residences',
    },
  ];
  
  // Custom Arrow Components
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-full cursor-pointer shadow-md"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-full cursor-pointer shadow-md"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
  
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // large tablets/small laptops
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <div className="w-full max-w-4xl mx-auto py-12 relative">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                <p className="text-sm text-gray-600">{project.address}</p>
                <p className="text-sm text-gray-600">{project.details}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};



const CEOScreen = () => {
  return (
    <div className="w-full bg-black text-gray-800 flex flex-col lg:flex-row overflow-hidden lg:w-[100%] mx-auto">
      {/* Left Section - Text */}
      <div className="lg:w-1/2 p-8 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-teal-500">CEO Message</h2>
          <div className="w-5 h-1 bg-teal-500 mt-2" />
        </div>
        <p className="text-gray-400 leading-relaxed">
          Growing companies keep their past in mind and aspire to achieve unprecedented milestones in their future. We at Thaheem Group of Companies work on the same principals of ethics that were the root of our establishment. Since our beginnings, we are committed to providing personal and professional services in a responsive, high-quality manner. And we still abide by these core values.
        </p>
        <button className="border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold px-6 py-2 transition-all duration-300">
          MORE READING
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2 relative">
        <img
          src="/images/Untitled-1.png"
          alt="CEO Building"
          className="object-cover w-full h-full"
        />

        {/* Play Button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-20 h-20 bg-white bg-opacity-70 rounded-full flex items-center justify-center shadow-md">
            <div className="w-0 h-0 border-l-[18px] border-t-[12px] border-b-[12px] border-l-teal-600 border-t-transparent border-b-transparent ml-1"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 w-full flex flex-col lg:flex-row">
          <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white p-4 flex-1">
            <p className="font-semibold">Call For a Quote:</p>
            <p>+92 42-35854938</p>
          </div>
          <button className="bg-white text-teal-700 hover:bg-teal-50 font-semibold px-6 py-4 border-t lg:border-l lg:border-t-0 border-teal-600">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};






// const ProjectCarousel = () => {
//   const projects = [
//     {
//       name: 'Karargah Service Apartments Islamabad',
//       image: '/images/karaghar-new.jpg',
//       address: 'Siri-Nagar Highway H-13 Islamabad',
//       details: 'Covered Area: 350,000 sqft | 4 High-Rise Towers | Cash & Carry',
//     },
//     {
//       name: 'IMI Batteries & Metal Industries',
//       image: '/images/sabroso-3d.jpg',
//       address: 'Hyderabad',
//       details: 'Covered Area: 120,000 sqft | Plant Building | Warehouse | Office | Masjid',
//     },
//     {
//       name: 'Citadel Towers Islamabad',
//       image: '/images/imi-480x357.jpg',
//       address: 'Islamabad',
//       details: 'Covered Area: 355,000 sqft | 5 Floors Shopping Mall | 7 Floors Offices | 7 Floors Residences',
//     },   {
//       name: 'Citadel Towers Islamabad',
//       image: '/images/citadel-3d.jpg',
//       address: 'Islamabad',
//       details: 'Covered Area: 355,000 sqft | 5 Floors Shopping Mall | 7 Floors Offices | 7 Floors Residences',
//     },   {
//       name: 'Citadel Towers Islamabad',
//       image: '/images/karaghar-new.jpg',
//       address: 'Islamabad',
//       details: 'Covered Area: 355,000 sqft | 5 Floors Shopping Mall | 7 Floors Offices | 7 Floors Residences',
//     },
//   ];

//   const carouselRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const scrollToIndex = (index) => {
//     if (carouselRef.current) {
//       const scrollAmount = index * carouselRef.current.offsetWidth;
//       carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
//       setCurrentIndex(index);
//     }
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 3000); // Auto-slide every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     scrollToIndex(currentIndex);
//   }, [currentIndex]);

//   return (
//     <div className="relative w-full max-w-4xl mx-auto py-12">
//       {/* Carousel Container */}
//       <div className="relative overflow-hidden">
//         <div
//           className="flex space-x-6 overflow-hidden snap-x snap-mandatory px-4"
//           ref={carouselRef}
//         >
//           {projects.map((project, index) => (
//             <div key={index} className="snap-start flex-shrink-0 w-80 md:w-96">
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="w-full h-56 object-cover rounded-lg shadow-lg"
//               />
//               <h3 className="text-lg font-semibold text-gray-800 mt-2">{project.name}</h3>
//               <p className="text-sm text-gray-600">{project.address}</p>
//               <p className="text-sm text-gray-600">{project.details}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full shadow-lg"
//       >
//         <FaChevronLeft size={24} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full shadow-lg"
//       >
//         <FaChevronRight size={24} />
//       </button>

//       {/* Pagination Dots */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {projects.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => scrollToIndex(index)}
//             className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400 hover:bg-gray-500'}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };






const HeroSection = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col lg:flex-row"
      style={{
        backgroundImage: "url('/images/xgrid-POST.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Content */}
      <div className="w-full lg:w-2/3 bg-gradient-to-r from-black/80 to-black/60 text-white flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 py-10">
        <div className="border-l-[6px] sm:border-l-[8px] lg:border-l-[10px] border-teal-400 pl-4 mb-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Construction Company In Lahore
          </h1>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl mb-2 font-medium text-teal-100">
          Thaheem Construction Company is Proud to Provide All
        </p>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 font-medium text-teal-100">
          type of Quality Construction Services Since 1991.
        </p>
        <button className="bg-teal-500 hover:bg-teal-600 transition-all text-white font-bold py-2 sm:py-3 px-6 sm:px-8 text-base sm:text-lg w-fit shadow-lg">
          VIEW OUR WORK
        </button>
      </div>

      {/* Right Services Box */}
      <div className="w-full lg:w-1/3 bg-gradient-to-b from-[#1BB095] to-teal-900 text-white p-6 sm:p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">Our Services:</h2>
        <ul className="space-y-4 sm:space-y-6">
          <li className="flex items-center space-x-4">
            <FaBuilding className="text-xl sm:text-2xl md:text-3xl text-white" />
            <span className="text-base sm:text-lg font-semibold">High Rise Buildings</span>
          </li>
          <li className="flex items-center space-x-4">
            <FaIndustry className="text-xl sm:text-2xl md:text-3xl text-white" />
            <span className="text-base sm:text-lg font-semibold">Sugar Industries</span>
          </li>
          <li className="flex items-center space-x-4">
            <FaPowerOff className="text-xl sm:text-2xl md:text-3xl text-white" />
            <span className="text-base sm:text-lg font-semibold">Power Plants</span>
          </li>
          <li className="flex items-center space-x-4">
            <FaWarehouse className="text-xl sm:text-2xl md:text-3xl text-white" />
            <span className="text-base sm:text-lg font-semibold">Rice & Flour Mills</span>
          </li>
          <li className="flex items-center space-x-4">
            <FaCogs className="text-xl sm:text-2xl md:text-3xl text-white" />
            <span className="text-base sm:text-lg font-semibold">Cement Industries</span>
          </li>
        </ul>
      </div>
    </section>
  );
};







// const CEOMessage = () => {
//   return (
//     <div className="bg-gray-100 font-sans">
//       {/* Main Container */}
//       <div className="max-w-[90%] mx-auto py-10 px-4 sm:px-6 lg:px-8">
//         {/* CEO Message Section */}
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Text Content */}
//           <div className="md:w-1/2">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
//               CEO Message
//             </h2>
//             <div className="w-12 h-1 bg-orange-500 mb-4"></div>
//             <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
//               Growing companies keep their past in mind and aspire to achieve unprecedented milestones in their future. We at Thaheem Group of Companies work on the same principals of ethics that were the root of our establishment. Since our beginnings, we are committed to providing personal and professional services in a responsive, high-quality manner. And we still abide by these core values.
//             </p>
//             <button className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition">
//               MORE READING
//             </button>
//           </div>

//           {/* Image with Play Button */}
//           <div className="md:w-1/2 relative">
//             <img
//               src="https://via.placeholder.com/600x400?text=CEO+Message+Building"
//               alt="CEO Message Building"
//               className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
//             />
//             {/* Play Button Overlay */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <button className="bg-white bg-opacity-80 rounded-full p-4 hover:bg-opacity-100 transition">
//                 <svg
//                   className="w-8 h-8 text-gray-800"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M8 5v14l11-7z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Contact Info and Button */}
//         <div className="flex flex-col md:flex-row justify-between items-center mt-6 bg-gray-800 text-white p-4 rounded-lg">
//           <p className="text-base md:text-lg mb-4 md:mb-0">
//             Call For a Quote: <span className="text-orange-500">+92-42-385854938</span>
//           </p>
//           <button className="border-2 border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-800 transition">
//             CONTACT US
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };



const ProjectsSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Completed Projects */}
        <div>
          <img src="/images/Untitled-1.png" alt="Completed Projects" className="w-full rounded-lg shadow-lg" />
          <button className="mt-6 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold py-3 px-6 rounded transition">
            Completed Projects →
          </button>
        </div>

        {/* Projects in Hand */}
        <div>
          <img src="/images/picture.png" alt="Projects in Hand" className="w-full rounded-lg shadow-lg" />
          <button className="mt-6 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-semibold py-3 px-6 rounded transition">
            Projects in Hand →
          </button>
        </div>
      </div>
    </section>
  );
};






// Section 1
// const Homepage = () => {
//   return (
//     <>
//       <div className="bg-gray-800 text-white py-16">
//         <div className="container mx-auto flex flex-col md:flex-row items-center">
//           {/* Left Column: Text Content */}
//           <div className="md:w-1/2 p-8">
//             <h2 className="text-3xl font-bold mb-4">CEO Message</h2>
//             <div className="w-12 h-1 bg-yellow-500 mb-4"></div>
//             <p className="text-lg mb-8">
//               Growing companies keep their past in mind and aspire to achieve unprecedented milestones in their future. We at Thaheem Group of Companies work on the same principles of ethics that were the root of our establishment.
//             </p>
//             <button className="bg-transparent hover:bg-yellow-500 text-yellow-500 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
//               More Reading
//             </button>
//           </div>

//           {/* Right Column: Image */}
//           <div className="md:w-1/2 relative p-8">
//             <img
//               src="/images/Untitled-1.png"
//               alt="Building"
//               className="rounded-lg shadow-xl"
//             />
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//               <button className="bg-white text-gray-800 rounded-full w-16 h-16 flex items-center justify-center opacity-75 hover:opacity-100">
//                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M8 5v14l11-7z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="bg-yellow-700 text-white py-4 flex flex-col md:flex-row items-center justify-between px-8">
//           <div className="text-sm">Call For a Quote: +92 42-35854938</div>
//           <div>
//             <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-200">
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// };




const ContactForm = () => {
  return (
    <div className="w-full h-auto bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Form Side */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white px-8 py-16">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-2">Contact Us</h2>
            <div className="w-12 border-b-4 border-white mb-8"></div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-3 w-full bg-white text-gray-700 placeholder-gray-500 border border-white focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-3 w-full bg-white text-gray-700 placeholder-gray-500 border border-white focus:outline-none"
                />
              </div>
              <textarea
                placeholder="Message"
                rows="6"
                className="w-full px-4 py-3 bg-white text-gray-700 placeholder-gray-500 border border-white focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 border-2 border-white text-white font-semibold tracking-widest hover:bg-white hover:text-[#c07806] transition-all"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="bg-white flex flex-col justify-between">
          <div className="bg-[#1f1f1f] py-10 px-8 flex justify-center space-x-6 text-white text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
          <div className="px-8 py-12 text-gray-800 max-w-xl mx-auto">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-gray-600 mt-1" />
              <p className="text-base font-medium">
                100-Aurangzeb Block, New Garden Town Lahore, 54700, Pakistan.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-gray-600 mt-1" />
              <p className="text-base font-medium">+92 42–35854938</p>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-gray-600 mt-1" />
              <p className="text-base font-medium">admnlhr@thaheemgroup.co</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// const ContactForm = () => {
//   return (
//     <div className="bg-white">
//       <div className="grid grid-cols-1 lg:grid-cols-2">
//         {/* Contact Form Section */}
//         <div className="bg-gradient-to-r from-teal-600 to-teal-800 py-12 px-8">
//           <div className="max-w-md mx-auto">
//             <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
//             <div className="border-b border-white w-12 mb-6"></div>

//             <form className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full px-4 py-2 border rounded-md text-gray-800 focus:ring focus:ring-teal-200 focus:border-teal-400"
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full px-4 py-2 border rounded-md text-gray-800 focus:ring focus:ring-teal-200 focus:border-teal-400"
//                 />
//               </div>
//               <div>
//                 <textarea
//                   placeholder="Message"
//                   rows="4"
//                   className="w-full px-4 py-2 border rounded-md text-gray-800 focus:ring focus:ring-teal-200 focus:border-teal-400"
//                 ></textarea>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   className="bg-transparent hover:bg-white text-white font-semibold py-2 px-4 border border-white hover:text-teal-700 rounded transition-all"
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
//               <a href="#" className="text-teal-600 hover:text-teal-800">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#" className="text-teal-600 hover:text-teal-800">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" className="text-teal-600 hover:text-teal-800">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//               <a href="#" className="text-teal-600 hover:text-teal-800">
//                 <i className="fab fa-instagram"></i>
//               </a>
//             </div>

//             {/* Contact Details */}
//             <div className="space-y-4">
//               <div className="flex items-start space-x-2">
//                 <i className="fas fa-map-marker-alt text-teal-600"></i>
//                 <p className="text-gray-700">
//                   100-Aurangzeb Block, New Garden Town Lahore, 54700, Pakistan.
//                 </p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <i className="fas fa-phone-alt text-teal-600"></i>
//                 <p className="text-gray-700">+92 42-35854938</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <i className="fas fa-envelope text-teal-600"></i>
//                 <p className="text-gray-700">admnlhr@thaheemgroup.co</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };




export default MyPage;
