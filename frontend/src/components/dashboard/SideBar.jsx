import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ role }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Define mentee and mentor routes separately
  const menteeRoutes = [
    { name: "Profile", path: "/mentee-profile" },
    { name: "Research Opportunities", path: "/research-post" },
    { name: "Applications", path: "/mentee-applications" },
  ];

  const mentorRoutes = [
    { name: "Profile", path: "/mentor-profile" },
    { name: "Create Post", path: "/create-post" },
    { name: "All Posts", path: "/all-post" },
    { name: "Applications", path: "/mentor-applications" },
  ];

  // Select menu based on role
  const menuItems = role === "mentee" ? menteeRoutes : mentorRoutes;

  return (
    <div className="w-64 h-screen bg-white shadow-md p-4">
      <Link to="/"><h1 className="text-green-600 text-2xl font-bold mb-6">Research Bridge</h1></Link>

      <ul>
        {menuItems.map((item) => (
          <li key={item.path} className="mb-2 font-medium">
            <Link
              to={item.path}
              className={`block py-2 px-4 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
