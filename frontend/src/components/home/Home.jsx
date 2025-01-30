import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const features = [
        {
          title: "Explore Page",
          description: " Discover a curated library of research papers, resources, and insights shared by mentors and mentees to fuel your academic and professional growth.",
        },
        {
          title: "Research Post",
          description: "Stay updated with exclusive opportunities where mentors share projects and research collaborations, giving mentees a chance to work directly under their guidance.",
        },
        {
          title: "User Dashboard",
          description: "Tailored to your needs, the dashboard helps you manage connections, track research progress, access shared resources, and stay organized.",
        },
      ];
  return (
    <div>
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 px-6 py-12">
      {/* Left Side: Text Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
           Welcome to <span className="text-green-500">ResearchBridge</span>
         </h1>
         <p className="text-lg text-gray-600 mb-6">
          Where Ideas Meet <span className="text-green-500">Opportunities</span>
         </p>
         <Link to="/login">
         <button className="bg-green-500 text-white px-3 py-3 rounded hover:bg-green-600">
           Get Started
         </button>
         </Link>
      </div>

      {/* Right Side: Image */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src="\src\assets\heroimg.png"
          alt="Hero"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>

    
     {/* About us */} 
     <section className="py-16 bg-white">
      <div className="container mx-auto text-center shadow-md p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-gray-600">
        Welcome to ResearchBridge, a platform designed to connect mentors and mentees, fostering collaboration and innovation in research. We bring together passionate researchers and eager learners, enabling knowledge sharing, project collaboration, and meaningful partnerships.
        At ResearchBridge, we aim to create a community where ideas thrive, opportunities emerge, and research flourishes. Let's connect, collaborate, and innovate together.
        </p>
      </div>
    </section>
    
     {/* Features */} 
     <section className="py-16 bg-white-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Offer</h2>
        <div className="flex justify-center space-x-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

     {/* Footer */} 
    <footer className="bg-gray-800 py-6 text-center text-white">
    <p>© 2025 ResearchBridge. All rights reserved.</p>
    </footer>

    </div>
  )
}

export default Home
