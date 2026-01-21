import React, { useState } from "react";
import Swal from "sweetalert2";
import laptopImage from "../../assets/laptop.jpg";
import { FaArrowLeft, FaSignOutAlt } from "react-icons/fa";

const LogoutPage = ({ onBackToLogin }) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const confirmLogout = async () => {
    setIsFlipping(true);
    setIsProcessing(true);

    await Swal.fire({
      icon: "success",
      title: "Logged Out",
      text: "You have been logged out successfully.",
      confirmButtonColor: "#9b2c3d",
    });

    setTimeout(() => {
      setIsFlipping(false);
      setIsProcessing(false);
      if (onBackToLogin) onBackToLogin();
    }, 1000);
  };

  const goBack = () => {
    setIsFlipping(true);
    Swal.fire({
      icon: "info",
      title: "Returning to Login",
      text: "Taking you back...",
      timer: 1000,
      showConfirmButton: false,
    });

    setTimeout(() => {
      setIsFlipping(false);
      if (onBackToLogin) onBackToLogin();
    }, 950);
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] perspective-1000 flex items-center justify-center p-6">

      {/* MAIN WRAPPER (Same style as LoginPage) */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT SIDE */}
        <div className="flex items-center justify-center">
          <div
            className={`w-full max-w-md p-8 text-center ${isFlipping ? "animate-flip" : ""}`}
          >
            <h1 className="text-4xl font-extrabold text-purple-700 mb-6">
              Logged Out
            </h1>

            <p className="text-purple-700 text-lg mb-6">
              Thank you for using our application.
            </p>

            <div className="bg-white/50 backdrop-blur-md border border-purple-300 rounded-xl p-4 mb-8">
              <p className="text-purple-800">
                <strong>Tip:</strong> Always log out when using a shared computer.
              </p>
            </div>

            {/* LOGOUT BUTTON */}
            <button
              onClick={confirmLogout}
              disabled={isProcessing}
              className="
                w-full py-3 rounded-lg text-white font-semibold shadow-lg
                flex items-center justify-center
                bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500
                hover:opacity-90 transition disabled:opacity-50
              "
            >
              {isProcessing ? "Processing..." : "Confirm Logout"}
              <FaSignOutAlt className="ml-2" />
            </button>

            {/* BACK BUTTON */}
            <button
              onClick={goBack}
              className="
                w-full mt-4 py-3 px-4 rounded-lg shadow-sm border border-purple-300
                bg-white text-purple-700 flex items-center justify-center
                hover:bg-purple-50 transition
              "
            >
              <FaArrowLeft className="mr-2" /> Back to Login
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
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

      {/* Animation */}
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

export default LogoutPage;
