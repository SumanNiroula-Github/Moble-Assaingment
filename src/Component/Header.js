import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import {
  FaInfoCircle,
  FaPhoneAlt,
  FaLightbulb,
  FaThumbsUp,
  FaSignOutAlt,
} from "react-icons/fa"; // Import icons from react-icons

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleLogout = () => {
    // Clear session or auth token
    localStorage.removeItem("authToken");

    // Navigate to login page
    navigate("/login"); // Navigate to the login page after logout
  };

  return (
    <header className="bg-indigo-600 p-4 text-white flex justify-between items-center">
      {/* Website Logo (clickable and takes to home page) */}
      <Link
        to="/"
        className="text-4xl font-bold hover:text-gray-200 flex items-center"
      >
        <span>Green Future</span>
      </Link>

      {/* Navigation Links with Icons */}
      <nav className="space-x-6 flex items-center">
        <Link
          to="/about"
          className="text-xl font-bold hover:text-gray-200 flex items-center"
        >
          <FaInfoCircle className="mr-2" /> About Us
        </Link>
        <Link
          to="/contact"
          className="text-xl font-bold hover:text-gray-200 flex items-center"
        >
          <FaPhoneAlt className="mr-2" /> Contact Us
        </Link>
        <Link
          to="/submit-idea"
          className="text-xl font-bold hover:text-gray-200 flex items-center"
        >
          <FaLightbulb className="mr-2" /> Idea Submission
        </Link>

        <Link
          to="/view-idea"
          className="text-xl font-bold hover:text-gray-200 flex items-center"
        >
          <FaThumbsUp className="mr-2" /> Vote Ideas
        </Link>

        {/* My Idea */}
        <Link
          to="/myidea"
          className="text-xl font-bold hover:text-gray-200 flex items-center"
        >
          <FaLightbulb className="mr-2" /> My Idea
        </Link>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="text-xl font-bold hover:text-gray-200 flex items-center"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
