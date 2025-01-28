import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-green-500">ResearchBridge</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Where Ideas Meet <span className="text-green-500">Opportunities</span>
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
          Register
        </button>
      </div>
    </section>
  )
}

export default Hero
