import React from 'react'

const Features = () => {
    const features = [
        {
          title: "Explore Page",
          description: "Discover research papers, resources, and insights.",
        },
        {
          title: "Research Post",
          description: "Exclusive opportunities from mentors to mentees.",
        },
        {
          title: "User Dashboard",
          description: "Manage connections, research progress, and resources.",
        },
      ];
  return (
    <section className="py-16 bg-gray-100">
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
  )
}

export default Features
