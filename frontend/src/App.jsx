import { useState } from 'react'
import Navbarr from "./components/home/Navbarr";
import Home from "./components/home/Home"
import Signup from './components/Login-Signup/Signup';
import SignUpMentor from './components/Login-Signup/SignupMentor';
import Login from './components/Login-Signup/Login';
import CreatePost from './components/dashboard/mentorDashboard/CreatePost';
import AllPost from './components/dashboard/mentorDashboard/AllPost';
// import MentorApplications from './components/dashboard/mentorDashboard/MentorApplications';
// import MentorProfile from './components/dashboard/mentorDashboard/MentorProfile';
import MentorProfile from './components/dashboard/mentorDashboard/MentorProfile';
import MentorApplications from './components/dashboard/mentorDashboard/MentorApplications'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
   return(
    <div className="font-sans">
      
        <Navbarr/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUpMentor />} />
        <Route path="/signupmentee" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/loginmentor" element={<LoginMentor />} /> */}
        <Route path="/explore" element={<h1 className="text-center mt-10 text-3xl">Explore Page</h1>} />
        <Route path="/profile" element={<MentorProfile/>} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/all-post" element={<AllPost />} />
        <Route path="/mentee-applications" element={<MentorApplications />} />
        <Route path="/mentor-profile" element={<MentorProfile />} />
        <Route path="/mentor-appl" element={<MentorApplications/>} />
      </Routes>
      
    </div>
   )
}

export default App
