import React from 'react'

const Features = () => {
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
  )
}

export default Features
