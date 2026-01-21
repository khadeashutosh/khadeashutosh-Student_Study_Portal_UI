import React, { useState } from "react";
import laptopImage from "../../assets/laptop.jpg";
import { FaSignOutAlt } from "react-icons/fa";

const DashboardPage = ({ user, onLogout }) => {
  const [isFlipping, setIsFlipping] = useState(false);

  const stats = [
    { title: "Total Notes", value: "12", change: "+2", color: "text-blue-600" },
    { title: "Homework Due", value: "5", change: "+1", color: "text-red-600" },
    { title: "To-Do Items", value: "8", change: "-2", color: "text-green-600" },
    { title: "Books Read", value: "25", change: "+3", color: "text-purple-600" },
  ];

  const quickActions = [
    { title: "Create Note", color: "bg-blue-500" },
    { title: "Add Homework", color: "bg-green-500" },
    { title: "New To-Do", color: "bg-yellow-500" },
    { title: "Search YouTube", color: "bg-red-500" },
  ];

  const handleLogout = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsFlipping(false);
      onLogout();
    }, 1000);
  };

  return (
    <div className="w-full h-screen flex overflow-hidden bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] perspective-1000">
      {/* LEFT SIDE */}
      <div
        className={`flex-1 flex flex-col justify-center px-16 space-y-6 ${
          isFlipping ? "animate-flip" : ""
        }`}
      >
        <div>
          <h1 className="text-4xl font-extrabold text-purple-700 drop-shadow-md mb-2">
            Welcome Back, {user?.name || "Ashu Khade"}!
          </h1>
          <p className="text-purple-700 font-medium">
            Administrator • Last login: Today, 10:30 AM
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/50 backdrop-blur-md p-4 rounded-lg border border-purple-300">
              <p className="text-sm text-purple-700 font-semibold">{stat.title}</p>
              <p className="text-xl font-bold text-purple-900">{stat.value}</p>
              <p className={`text-sm ${stat.color}`}>{stat.change} from last week</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className={`bg-white/70 backdrop-blur-sm border border-purple-300 rounded-md p-3 hover:bg-white transition`}
            >
              <div
                className={`${action.color} w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-2`}
              >
                <span className="text-white text-xs font-bold">
                  {action.title.charAt(0)}
                </span>
              </div>
              <p className="text-xs text-center text-purple-700 font-semibold">
                {action.title}
              </p>
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="
            w-full py-3 rounded-md text-white font-semibold shadow-lg
            flex items-center justify-center
            bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500
            hover:opacity-90 transition
          "
        >
          <FaSignOutAlt className="mr-2" /> Log Out
        </button>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="flex-1 h-full flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f7c6ff]/40 via-[#f5b4d4]/40 to-[#acd9ff]/40"></div>
        <img
          src={laptopImage}
          alt="Laptop"
          className="w-full h-full object-contain relative z-10"
        />
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
          @media (max-width: 768px) {
            .flex-1 { px-4 !important; }
          }
        `}
      </style>
    </div>
  );
};

export default DashboardPage;
