import React, { useState } from "react";

const Applications = () => {
  const applications = [
    { id: 1, name: "Project-Name 1", date: "Jan 4, 2024", status: "Accepted" },
    { id: 2, name: "Project-Name 2", date: "Jan 4, 2024", status: "Pending" },
    { id: 3, name: "Project-Name 3", date: "Jan 2, 2024", status: "Rejected" },
    { id: 4, name: "Project-Name 4", date: "Jan 6, 2024", status: "Pending" },
  ];

  const [filter, setFilter] = useState("All");

  const filteredApplications =
    filter === "All"
      ? applications
      : applications.filter((app) => app.status === filter);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Simran Singh</h2>
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <p className="text-gray-500 font-semibold mt-1">
          Let’s finish your task today!
        </p>

        {/* Stylish Tabs for Filtering */}
        <div className="flex gap-4 mt-6">
          {["All", "Accepted", "Pending"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
                ${
                  filter === status
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Applications Table */}
        <h3 className="mt-6 text-xl font-bold">Applications</h3>
        <table className="w-full mt-4 bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100 text-gray-700 font-medium">
            <tr>
              <th className="p-3 text-left">Research Post Name</th>
              <th className="p-3 text-left">Applied Date</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.length > 0 ? (
              filteredApplications.map((app) => (
                <tr key={app.id} className="border-t">
                  <td className="p-3">{app.name}</td>
                  <td className="p-3 text-gray-800 font-medium">{app.date}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-lg text-white ${
                        app.status === "Accepted"
                          ? "bg-green-600"
                          : app.status === "Pending"
                          ? "bg-gray-400"
                          : "bg-red-600"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-4 text-center text-gray-500">
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
