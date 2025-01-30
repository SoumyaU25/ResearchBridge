import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Welcome!
        </h2>
        <h3 className="text-xl font-bold text-center text-gray-800 mb-6">
          Log In
        </h3>

        <form>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter registered Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
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
              Forgot Password ?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Login
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600 mt-4">
            <div>Don't have an Account? </div>
            <div>
              <Link to="/signup" className="text-blue-500 hover:underline">
                Register as Mentor
              </Link>
            </div>

            <Link to="/signupmentee" className="text-blue-500 hover:underline">
              Register as Mentee
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
