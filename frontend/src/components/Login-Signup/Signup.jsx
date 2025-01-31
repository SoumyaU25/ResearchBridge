import  { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [university, setUniversity] = useState("");
  const [education, setEducation] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [about, setAbout] = useState("");
  const [myWork, setMyWork] = useState("");

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('signing up a user....');

    if(username && email && password  && confirmPassword && university && education){
      if(password != confirmPassword){
        // return toast.error("Password dont match");
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        await setDoc(doc(db, "mentees", user.uid), {
          username,
          email,
          university,
          education,
          role: "mentee", 
          createdAt: new Date(),
        });
        navigate("/mentee-profile");
      } catch (error) {
        console.error("Error signing up:", error.message);
      }
      //console.log('successful....', userCredential);
    }else{
      // return toast.error("All fields are mandatory");
      return;
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-10 mb-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Welcome !
        </h2>
        <h3 className="text-lg font-medium text-center text-gray-600 mb-6">
          Sign Up As Mentee
        </h3>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700">User name</label>
            <input onChange={e => setUsername(e.target.value)} value={username}
              type="text"
              placeholder="Enter your user name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input onChange={e => setEmail(e.target.value)} value={email} 
              type="email"
              placeholder="Enter your email id"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input onChange={e => setPassword(e.target.value)} value={password} 
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="button"
              className="absolute top-10 right-4 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Role */}
          {/* <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <input
              type="text"
              placeholder="Enter your role here e.g., Mentor/Mentee"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div> */}

          {/* Education */}
          <div className="mb-4">
            <label className="block text-gray-700">Education</label>
            <input onChange={e => setEducation(e.target.value)} value={education} 
              type="text"
              placeholder="Enter your highest education"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* University */}
          <div className="mb-4">
            <label className="block text-gray-700">University</label>
            <input onChange={e => setUniversity(e.target.value)} value={university} 
              type="text"
              placeholder="Enter your university name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700">Confirm Password</label>
            <input onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password again"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="button"
              className="absolute top-10 right-4 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-gray-700">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Register Button */}
          <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition duration-300">
            Register
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
