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

import { auth, db } from './Firebase'; // Import authentication
import { doc, getDoc } from "firebase/firestore";

function Layout() {
  const location = useLocation();
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state while fetching role

  
  useEffect(() => {
    const fetchUserRole = async () => {
      setLoading(true);
      const user = auth.currentUser; // Get currently logged-in user
      //console.log("User ID:", user.uid);
      if (user) {
        try {
          let userRole = null; // Variable to store the role

          // 1️⃣ Check in Mentors Collection
          const mentorDocRef = doc(db, "mentor", user.uid);
          const mentorSnap = await getDoc(mentorDocRef);

          if (mentorSnap.exists() && mentorSnap.data().role) {
            userRole = mentorSnap.data().role; // Get role from Firestore
          } else {
            // 2️⃣ If not in mentors, check in Mentees Collection
            const menteeDocRef = doc(db, "mentees", user.uid);
            const menteeSnap = await getDoc(menteeDocRef);

            if (menteeSnap.exists() && menteeSnap.data().role) {
              userRole = menteeSnap.data().role; // Get role from Firestore
            }
          }

          if (userRole) {
            setRole(userRole); // Set role from Firestore data
            console.log(userRole)
          } else {
            console.error("Role not found in Firestore.");
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      }
      setLoading(false);
    };

    fetchUserRole();
  }, []);

  // Paths where Sidebar should be hidden
  const hideSidebarPaths = ["/", "/signup", "/signupmentee", "/login", "/explore"];
  const showSidebar = role && !hideSidebarPaths.includes(location.pathname);

  return (
    <div className="font-sans">
      <Navbarr />
      <div className="flex">
        {/* Show Sidebar only if role exists and user is on a dashboard page */}
        {showSidebar && <Sidebar role={role} />}

        {/* Main content */}
        <div className="flex-1 p-6">
          {loading ? (
            <h1 className="text-center mt-10 text-2xl">Loading...</h1>
          ) : (
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
          )}
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

