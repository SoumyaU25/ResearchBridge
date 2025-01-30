

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbarr = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation(); // Get the current route

  // Hide navbar for specific routes
  const hideNavbarRoutes = ["/all-post", "/create-post"];
  if (hideNavbarRoutes.includes(location.pathname)) {
    return null; // Do not render navbar
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <div className="text-xl font-bold text-green-700">
          <Link to="/">ResearchBridge</Link>
        </div>

        {/* Navigation & Buttons Container */}
        <div className="flex items-center ml-auto space-x-6">
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-green-600 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/explore" className="text-gray-600 hover:text-green-600 cursor-pointer">
                Explore
              </Link>
            </li>
          </ul>

          {/* Signup Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link to="/signupmentee">
              <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
                Signup as Mentee
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
                Signup as Mentor
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4 text-center">
          <Link to="/" className="block text-gray-600 hover:text-green-600" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/explore" className="block text-gray-600 hover:text-green-600" onClick={() => setIsOpen(false)}>
            Explore
          </Link>
          <Link to="/signupmentee">
            <button className="w-full bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              Signup as Mentee
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
              Signup as Mentor
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbarr;
