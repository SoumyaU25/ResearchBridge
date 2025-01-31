import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { format } from "date-fns";

const CreatePost = () => {
  const [selectedDomain, setSelectedDomain] = useState("");

  return (
    <div className="flex h-screen bg-[#F9F5FF]">
      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4 ">Anurag Sharma</h3>
            <p className="text-gray-500">Let's post today!</p>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="User"
              className="w-10 h-10 rounded-full border"
            />
            <div className="p-3 bg-white shadow-md rounded-lg flex items-center">
              <FaRegCalendarAlt className="text-gray-600" />
              <span className="ml-2 text-gray-700">Jan 31, 2025</span>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700">Create Post</h2>

          <div className="mt-4">
            <label className="text-gray-700 font-semibold">Research Project Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded mt-2"
              placeholder="Enter project name"
              defaultValue="Tech requirements"
            />
          </div>

          <div className="mt-4">
            <label className="text-gray-700 font-semibold">Description</label>
            <textarea
              className="w-full border p-2 rounded mt-2"
              placeholder="Enter a description..."
            ></textarea>
          </div>

          <div className="mt-4">
            <label className="text-gray-700 font-semibold">Select Research Project Domain:</label>
            <div className="space-y-2 mt-2">
              {[
                "Create a user flow of social application design",
                "Create a user flow of social application design",
                "Create a user flow of social application design",
                "Interactive prototype for app screens of deltamime project",
                "Interactive prototype for app screens of deltamime project",
              ].map((option, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="domain"
                    value={option}
                    checked={selectedDomain === option}
                    onChange={() => setSelectedDomain(option)}
                    className="h-4 w-4"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg">Create Post</button>
            <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg">Save Draft</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreatePost;
