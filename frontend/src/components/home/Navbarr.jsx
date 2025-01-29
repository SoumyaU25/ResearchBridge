import React from 'react';
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Link to="/">ResearchBridge</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-600 hover:text-green-600 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/research-post" className="text-gray-600 hover:text-green-600 cursor-pointer">
              Research Post
            </Link>
          </li>
          <li>
            <Link to="/explore" className="text-gray-600 hover:text-green-600 cursor-pointer">
              Explore
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-gray-600 hover:text-green-600 cursor-pointer">
              User Profile
            </Link>
          </li>
        </ul>

        {/* Register Button */}
        <Link to="/signup">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            login now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbarr;

