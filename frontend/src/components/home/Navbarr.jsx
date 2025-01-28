import React from 'react'

const Navbarr = () => {
  return (
    <nav className="bg-white shadow-lg">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <div className="text-xl font-bold text-gray-800">ResearchBridge</div>
      <ul className="flex space-x-6">
        <li className="text-gray-600 hover:text-green-600 cursor-pointer">Home</li>
        <li className="text-gray-600 hover:text-green-600 cursor-pointer">Research Post</li>
        <li className="text-gray-600 hover:text-green-600 cursor-pointer">Explore</li>
        <li className="text-gray-600 hover:text-green-600 cursor-pointer">User Profile</li>
      </ul>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Register Now
      </button>
    </div>
  </nav>
  )
}

export default Navbarr
