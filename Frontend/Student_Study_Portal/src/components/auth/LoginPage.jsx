import React, { useState } from "react";
import Swal from "sweetalert2";
import laptopImage from "../../assets/laptop.jpg";
import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";

const LoginPage = ({ onLogin, loginError }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please enter both username and password",
      });
      return;
    }

    setIsFlipping(true);
    setIsLoading(true);

    try {
      const result = onLogin ? await onLogin({ username, password }) : null;

      if (result && result.success) {
        await Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome ${username}!`,
        });
      } else if (result && !result.success) {
        await Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: result.message || loginError || "Invalid credentials",
        });
      } else {
        if (loginError) {
          await Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: loginError,
          });
        } else {
          await Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: `Welcome ${username}!`,
          });
        }
      }
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong!",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setIsFlipping(false), 1000);
    }
  };

  const handleFlipAction = (actionName) => {
    setIsFlipping(true);
    Swal.fire({
      icon: "info",
      title: actionName,
      text: `${actionName} clicked`,
    });
    setTimeout(() => setIsFlipping(false), 1000);
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] perspective-1000 flex items-center justify-center p-6">

      {/* 🔥 SINGLE MAIN CONTAINER (Merged Both Sections) */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LOGIN SECTION */}
        <div className="flex items-center justify-center">
          <div className={`w-full max-w-md p-8 ${isFlipping ? "animate-flip" : ""}`}>
            <h1 className="text-3xl font-bold text-purple-700 text-center mb-8">
              Log In
            </h1>

            {(loginError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm mb-6">
                {loginError}
              </div>
            )) || (
              !onLogin && (
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-md text-sm mb-6">
                  Login handler not connected
                </div>
              )
            )}

            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Username */}
              <div>
                <label className="block text-sm font-semibold text-purple-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full px-4 py-3 border border-purple-300 rounded-lg bg-white focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-colors"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-purple-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 border border-purple-300 rounded-lg bg-white focus:ring-2 focus:ring-purple-400 focus:border-purple-400 outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-purple-600 hover:text-purple-800"
                  >
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </button>
                </div>

                <a
                  href="#"
                  onClick={() => handleFlipAction("Forgot Password")}
                  className="text-sm text-pink-600 hover:underline mt-2 inline-block"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-lg text-white font-semibold shadow-lg flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 hover:opacity-90 transition disabled:opacity-50"
              >
                {isLoading ? "Logging in..." : "LOGIN"}
                <FaArrowRight className="ml-2" />
              </button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-purple-300" />
              <span className="px-4 text-purple-700 font-medium">OR</span>
              <hr className="flex-grow border-pink-300" />
            </div>

            {/* Face ID */}
            <button
              type="button"
              onClick={() => handleFlipAction("Face ID Login")}
              className="w-full py-3 px-4 rounded-lg shadow-sm border border-cyan-400 bg-white text-purple-700 flex items-center justify-center hover:bg-gray-50 transition"
            >
              <FaEye size={16} className="mr-2 text-pink-600" /> Login with Face ID
            </button>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex items-center justify-center">
          <div className="w-full h-96 lg:h-[500px] flex items-center justify-center">
            <img
              src={laptopImage}
              alt="Laptop"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Flip Animation */}
      <style>
        {`
          .perspective-1000 { perspective: 1000px; }
          .animate-flip {
            transform-style: preserve-3d;
            animation: flip 1s ease-in-out forwards;
          }
          @keyframes flip {
            0% { transform: rotateY(0deg); }
            50% { transform: rotateY(180deg); }
            100% { transform: rotateY(0deg); }
          }
        `}
      </style>

    </div>
  );
};

export default LoginPage;
