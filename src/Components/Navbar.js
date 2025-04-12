import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ChevronDown, X } from "lucide-react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Home", href: "/MyPage" },
    {
      title: "About Us",
      href: "/about",
      dropdown: true,
      items: [
        
        { label: "Mission & Vision", href: "/mission-and-vision" },
        { label: "Organizational Chart", href: "/organizational-chart" },
        { label: "Founder Message", href: "/founder-message" },
        { label: "Management Profile", href: "/management-profile" },
        { label: "Major Clients", href: "/major-clients" },
        // { label: "Man Power", href: "/about" },
        // { label: "Our History", href: "/MyPage" },
        // { label: "Country Wide Operations", href: "/country-wide-operations" },
        // { label: "CEO", href: "/ceo" },
        // { label: "ContactForm", href: "/contactform" },

        
        
      ],
    },
    {
      title: "Our Projects",
      href: "/projects",
      dropdown: true,
      items: [
        { label: "PROJECT IN HAND", href: "/project-in-hand" },
        { label: "PROJECT COMPLETED", href: "/project-in-hand" },
      ],
    },
    {
      title: "Our Services",
      href: "/services",
      dropdown: true,
      items: [
        { label: "POWER PLANTS", href: "/power-plants" },
        { label: "RISE & FLOUR MILLS", href: "/rice-flour-mills-2" },
      ],
    },

    {
      title: "Resources",
      href: "/resources",
      dropdown: true,
      items: [
        { label: "Tools and PLANTS", href: "/tools-and-plants" },
        { label: "Man Power", href: "/man-power" },
      ],
    },

    {
      title: "Credentials",
      href: "/credentials",
      dropdown: true,
      items: [
        { label: "PEC-Certificates", href: "/pec-certificates" },
        { label: "Affiliation Certificates", href: "/affiliation-certificates" },
        { label: "Completion Certificates", href: "/completion-certificates" },
      ],
    },
    {
      title: "Pacific Builders",
      href: "/pacific-builders",
      dropdown: true,
      items: [
        { label: "Pacific Concrete", href: "/Pacific-concrete" },
        { label: "Ready Mix Concrete", href: "/Pacific-mix-concrete" },
      ],
    },

    {
      title: "Contact Us",
      href: "/contact",
      dropdown: true,
      items: [
        { label: "Office Location", href: "/office-location" },
        { label: "Job Application", href: "/job-application" },
      ],
    },

  ];

  return (
    <nav className={`bg-white shadow sticky top-0 z-50 py-6 transition-all ${isScrolled ? "shadow-lg" : ""}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-10">
          <Link to="/" className="flex items-center">
            <img src="/images/cropped-Artboard-1@2x-291x97.png" alt="Pacific Builders Logo" className="h-16 object-contain" />
          </Link>
          <div className="hidden md:block">
            <img src="/images/2.png" alt="Right side" className="h-22 w-auto" />
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600 hover:text-emerald-600" aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <div className={cn("md:flex", isOpen ? "block" : "hidden")}>
        <ul className="flex flex-col items-start space-y-2 md:flex-row md:space-x-8 md:items-center md:space-y-0 md:mx-auto mt-10 px-4">
            {navItems.map((item) => (
              <li key={item.title} className="relative group dropdown-container">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(item.title);
                      }}
                      className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600 py-2 md:py-0"
                    >
                      <span>{item.title}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.title ? "rotate-180" : ""}`} />
                    </button>
                    {activeDropdown === item.title && (
                      <ul className="md:absolute md:top-full md:left-0 mt-2 w-48 mx-auto md:mx-0 bg-white rounded-md shadow-lg py-1 z-50">
                        {item.items?.map((subItem) => (
                          <li key={subItem.href}>
                            <Link to={subItem.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600" onClick={() => setIsOpen(false)}>
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.href} className="block py-2 md:py-0 text-gray-600 hover:text-emerald-600" onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <button className="text-gray-600 hover:text-emerald-600 py-2 md:py-0" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// ✅ Export Navbar as default
export default Navbar;