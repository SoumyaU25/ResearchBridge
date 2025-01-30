
import { FaRegCalendarAlt } from "react-icons/fa";


const MentorApplications = () => {
  const applications = [
    { name: "User-Name 1", project: "Project-Name 1", date: "Jan 4, 2024" },
    { name: "User-Name 2", project: "Project-Name 2", date: "Jan 4, 2024" },
    { name: "User-Name 3", project: "Project-Name 3", date: "Jan 2, 2024" },
    { name: "User-Name 4", project: "Project-Name 4", date: "Jan 6, 2024" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-blue-600">Research Bridge</h2>
        <nav className="mt-8 space-y-4">
          <a href="#" className="flex items-center space-x-2 text-gray-700 font-medium">
            <span>📂</span> <span>Profile</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 font-medium">
            <span>📜</span> <span>Posts</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 font-medium">
            <span>📑</span> <span>Applications</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700 font-medium">
            <span>💬</span> <span>Message</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Mentor-Name</h1>
            <p className="text-gray-600">Let's finish your task today!</p>
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
        </div>

        {/* Tabs */}
        <div className="mt-6 flex space-x-6 border-b pb-2">
          {["All", "Approved", "Pending"].map((tab) => (
            <button key={tab} className="text-gray-700 font-medium hover:text-blue-600">
              {tab}
            </button>
          ))}
        </div>

        {/* Applications Table */}
        <div className="mt-6 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg text-gray-700 font-semibold">Applications</h2>
          <table className="w-full mt-4">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="text-left p-2">Applicant Name</th>
                <th className="text-left p-2">Project Name</th>
                <th className="text-left p-2">Applied Date</th>
                <th className="text-left p-2">View</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 flex items-center space-x-2">
                    <span className="text-purple-600">⚡</span>
                    <span>{app.name}</span>
                  </td>
                  <td className="p-2">{app.project}</td>
                  <td className="p-2">{app.date}</td>
                  <td className="p-2 text-blue-500 cursor-pointer">View Statement</td>
                  <td className="p-2 flex space-x-2">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-md">Accept</button>
                    <button className="bg-gray-500 text-white px-4 py-1 rounded-lg">Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
      </main>
    </div>
  );
};

export default MentorApplications;
