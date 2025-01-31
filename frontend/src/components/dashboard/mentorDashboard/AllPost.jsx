import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsLightningFill, BsImage, BsGrid3X3Gap, BsLink45Deg, BsRocketTakeoffFill } from "react-icons/bs";

const posts = [
  { id: 1, name: "Research Project -1", icon: <BsLightningFill className="text-green-500" />, created: "Jan 4, 2024", activity: "Jan 4, 2024" },
  { id: 2, name: "Research Project -2", icon: <BsImage className="text-green-500" />, created: "Jan 4, 2024", activity: "Jan 4, 2024" },
  { id: 3, name: "Research Project -3", icon: <BsGrid3X3Gap className="text-green-500" />, created: "Jan 4, 2024", activity: "Jan 2, 2024" },
  { id: 4, name: "Research Project -4", icon: <BsLink45Deg className="text-green-500" />, created: "Jan 4, 2024", activity: "Jan 6, 2024" },
  { id: 5, name: "Research Project -5", icon: <BsRocketTakeoffFill className="text-green-500" />, created: "Jan 4, 2024", activity: "Jan 6, 2024" },
  { id: 6, name: "Research Project -6", icon: <BsLightningFill className="text-green-500" />, created: "Jan 4, 2024", activity: "Jan 4, 2024" },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Mentor-Name</h2>
            <p className="text-gray-500">Let's post today!</p>
          </div>
          <div className="flex items-center space-x-3">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="User"
                        className="w-10 h-10 rounded-full border"
                      />
                      <div className="p-3 bg-white shadow-md rounded-lg flex items-center">
                        <FaRegCalendarAlt className="text-gray-600" />
                        <span className="ml-2 text-gray-700">July 14, 2024</span>
                      </div>
                    </div>
        </header>

        <div className="mt-6 flex space-x-6">
          <button className="font-semibold text-gray-700">Completed</button>
          <button className="text-gray-500">Drafts</button>
        </div>

        <div className="mt-6 flex items-center bg-white p-2 rounded-md shadow">
          <FaSearch className="text-gray-400 mx-2" />
          <input
            type="text"
            placeholder="Search Posts"
            className="w-full outline-none"
          />
        </div>

        <div className="mt-6 flex justify-between items-center">
          <h3 className="text-lg text-gray-700 font-semibold">All Posts</h3>
          <Link to="/create-post"><button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">Create Post</button></Link>
        </div>

        <div className="mt-4 bg-white shadow-md rounded-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-gray-500">Post Name</th>
                <th className="p-4 text-gray-500">Task Created</th>
                <th className="p-4 text-gray-500">Last Activity</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b hover:bg-gray-100">
                  <td className="p-4 flex items-center space-x-3">
                    {post.icon}
                    <span className="font-semibold text-gray-700">{post.name}</span>
                  </td>
                  <td className="p-4 text-gray-500">{post.created}</td>
                  <td className="p-4 text-gray-500">{post.activity}</td>
                  <td className="p-4 text-right">
                    <FiMoreVertical className="text-gray-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
