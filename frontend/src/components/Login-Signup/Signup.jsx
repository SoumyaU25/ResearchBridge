import React, { useState }  from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-10 mb-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Welcome !
        </h2>
        <h3 className="text-lg font-medium text-center text-gray-600 mb-6">
          Sign Up As Mentee
        </h3>
        
        <form>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700">User name</label>
            <input
              type="text"
              placeholder="Enter your user name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email id"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input
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
            <input
              type="text"
              placeholder="Enter your highest education"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* University */}
          <div className="mb-4">
            <label className="block text-gray-700">University</label>
            <input
              type="text"
              placeholder="Enter your university name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700">Confirm Password</label>
            <input
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
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Register
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
