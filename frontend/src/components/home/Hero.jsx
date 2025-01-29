import React from 'react'

const Hero = () => {
  return (
    // <section className="bg-gray-100 py-20">
    //   <div className="container mx-auto flex flex-col items-center text-center">
    //     <h1 className="text-4xl font-bold text-gray-800 mb-4">
    //       Welcome to <span className="text-green-500">ResearchBridge</span>
    //     </h1>
    //     <p className="text-lg text-gray-600 mb-6">
    //       Where Ideas Meet <span className="text-green-500">Opportunities</span>
    //     </p>
    //     <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
    //       Register
    //     </button>
    //   </div>
    // </section>
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 px-6 py-12">
      {/* Left Side: Text Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
           Welcome to <span className="text-green-500">ResearchBridge</span>
         </h1>
         <p className="text-lg text-gray-600 mb-6">
          Where Ideas Meet <span className="text-green-500">Opportunities</span>
         </p>
         <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
           Get Started
         </button>
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
  )
}

export default Hero
