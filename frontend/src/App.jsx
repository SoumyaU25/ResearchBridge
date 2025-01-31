import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbarr from "./components/home/Navbarr";
import Home from "./components/home/Home";
import Signup from './components/Login-Signup/Signup';
import SignUpMentor from './components/Login-Signup/SignupMentor';
import Login from './components/Login-Signup/Login';
import CreatePost from './components/dashboard/mentorDashboard/CreatePost';
import AllPost from './components/dashboard/mentorDashboard/AllPost';
import MentorApplications from './components/dashboard/mentorDashboard/MentorApplications';
import MentorProfile from './components/dashboard/mentorDashboard/MentorProfile';
import ResearchPost from './components/dashboard/menteeDashboard/ResearchPost';
import Applications from './components/dashboard/menteeDashboard/Applications';
import MenteeProfile from "./components/dashboard/menteeDashboard/MenteeProfile";
import Sidebar from './components/dashboard/SideBar';  

function Layout() {
  const location = useLocation();
  const [role, setRole] = useState(null);

  // Fetch role from localStorage (simulate authentication)
  useEffect(() => {
     const userRole = "mentor";// localStorage.getItem("userRole"); // "mentor" or "mentee"
    setRole(userRole);
  }, []);

  // Hide Sidebar on these pages
  const hideSidebarPaths = ["/", "/signup", "/signupmentee", "/login", "/explore"];
  const showSidebar = role && !hideSidebarPaths.includes(location.pathname);

  return (
    <div className="font-sans">
      <Navbarr />
      <div className="flex">
        {/* Show Sidebar only when logged in */}
        {showSidebar && <Sidebar role={role} />}

        {/* Main content */}
        <div className="flex-1 p-6">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUpMentor />} />
            <Route path="/signupmentee" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/explore" element={<h1 className="text-center mt-10 text-3xl">Explore Page</h1>} />
            <Route path="/profile" element={<h1 className="text-center mt-10 text-3xl">User Profile Page</h1>} />

            {/* Mentee Dashboard */}
            {role === "mentee" && (
              <>
                <Route path="/mentee-profile" element={<MenteeProfile />} />
                <Route path="/research-post" element={<ResearchPost />} />
                <Route path="/mentee-applications" element={<Applications />} />
              </>
            )}

            {/* Mentor Dashboard */}
            {role === "mentor" && (
              <>
                <Route path="/mentor-profile" element={<MentorProfile />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/all-post" element={<AllPost />} />
                <Route path="/mentor-applications" element={<MentorApplications />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Layout />
  );
}

export default App;
