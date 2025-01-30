import { useState } from 'react'
import Navbarr from "./components/home/Navbarr";
import Home from "./components/home/Home"
import Signup from './components/Login-Signup/Signup';
import SignUpMentor from './components/Login-Signup/SignupMentor';
import Login from './components/Login-Signup/Login';
import CreatePost from './components/dashboard/mentorDashboard/CreatePost';
import AllPost from './components/dashboard/mentorDashboard/AllPost';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
   return(
    <div className="font-sans">
      <Router>
        <Navbarr/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUpMentor />} />
        <Route path="/signupmentee" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/loginmentor" element={<LoginMentor />} /> */}
        <Route path="/research-post" element={<h1 className="text-center mt-10 text-3xl">Research Post Page</h1>} />
        <Route path="/explore" element={<h1 className="text-center mt-10 text-3xl">Explore Page</h1>} />
        <Route path="/profile" element={<h1 className="text-center mt-10 text-3xl">User Profile Page</h1>} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/all-post" element={<AllPost />} />
      </Routes>
      </Router>
    </div>
   )
}

export default App
