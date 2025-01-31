import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md"; // Close button icon

const ResearchPost = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const researchPosts = [
    { id: 1, title: "Project Name - 1", description: "Description for Project 1..." },
    { id: 2, title: "Project Name - 2", description: "Description for Project 2..." },
    { id: 3, title: "Project Name - 3", description: "Description for Project 3..." },
  ];

  const handleApplyClick = (post) => {
    setSelectedPost(post);
  };

  const handleFileChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pdfFile) {
      alert(`Application submitted for "${selectedPost.title}" with file: ${pdfFile.name}`);
      setSelectedPost(null);
      setPdfFile(null);
    } else {
      alert("Please upload a PDF file before submitting.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Simran Singh</h2>
          <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
        </div>
        <p className="text-gray-500 font-semibold mt-1">Let’s apply today!</p>

        {/* Search Bar */}
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Search Posts"
            className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-green-400"
          />
          {/* <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> */}
        </div>

        {/* Research Posts Section */}
        <h3 className="mt-6 text-xl font-bold">All Posts</h3>
        <div className="mt-4 space-y-4">
          {researchPosts.map((post) => (
            <div key={post.id} className="bg-white p-5 rounded-lg shadow-md flex items-center">
              <FaRegBookmark className="text-gray-600 mr-4" />
              <div className="flex-1">
                <h4 className="text-lg font-semibold">{post.title}</h4>
                <p className="text-gray-600 text-sm">{post.description}</p>
              </div>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                onClick={() => handleApplyClick(post)}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form Modal */}
      {selectedPost && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Apply for {selectedPost.title}</h3>
              <button onClick={() => setSelectedPost(null)} className="text-gray-600 hover:text-red-500">
                <MdClose size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Upload Proposal (PDF only)</label>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="mt-2 p-2 border w-full rounded-lg"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white mt-4 px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchPost;
