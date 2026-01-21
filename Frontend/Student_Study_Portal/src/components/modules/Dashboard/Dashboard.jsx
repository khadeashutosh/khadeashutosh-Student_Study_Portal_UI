import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  FaStickyNote,
  FaBook,
  FaYoutube,
  FaCheckSquare,
  FaBookOpen,
  FaGlobe,
  FaCalculator,
  FaHome,
} from "react-icons/fa";

const Dashboard = () => {
  const backendAlert = () => {
    Swal.fire({
      icon: "info",
      title: "Static Dashboard",
      text: "Connect FastAPI backend to load real dashboard data.",
    });
  };

  const quickAccess = [
    { id: "notes", name: "Notes", icon: FaStickyNote },
    { id: "homework", name: "Homework", icon: FaBook },
    { id: "youtube", name: "YouTube", icon: FaYoutube },
    { id: "todo", name: "To-Do", icon: FaCheckSquare },
    { id: "books", name: "Books", icon: FaBookOpen },
    { id: "dictionary", name: "Dictionary", icon: FaGlobe },
    { id: "wikipedia", name: "Wikipedia", icon: FaGlobe },
    { id: "math", name: "Math Conversion", icon: FaCalculator },
  ];

  const stats = [
    { title: "Total Notes", value: "--" },
    { title: "Homework Due", value: "--" },
    { title: "To-Do Items", value: "--" },
    { title: "Books Read", value: "--" },
  ];

  const recentActivity = [
    { action: "No recent activity.", time: "Connect backend", icon: "📌" },
  ];

  const [flippedId, setFlippedId] = useState(null);

  const triggerFlip = (id) => {
    setFlippedId(id);
    setTimeout(() => setFlippedId(null), 400);
    backendAlert();
  };

  return (
    <div className="w-full min-h-screen p-8 bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] font-sans">

      {/* Flip Animation */}
      <style>{`
        .flip-animate {
          animation: flipAnim 0.4s;
          perspective: 1000px;
        }
        @keyframes flipAnim {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(0deg); }
        }
      `}</style>

      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-purple-200">

        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-purple-700">
              Dashboard Overview
            </h1>
            <p className="text-purple-500 mt-2">
              Everything at a glance — static preview.
            </p>
          </div>

          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-300 rounded-2xl flex items-center justify-center shadow-xl">
            <FaHome className="text-purple-800" size={30} />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border border-purple-200 hover:shadow-2xl transition-all"
            >
              <p className="text-sm text-purple-600">{stat.title}</p>
              <p className="text-3xl font-bold text-purple-700 mt-1">{stat.value}</p>
              <p className="text-sm text-purple-400 mt-2">
                Backend data required
              </p>
            </div>
          ))}
        </div>

        {/* Quick Access */}
        <h2 className="text-xl font-semibold text-purple-700 mb-4">
          Quick Access
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickAccess.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => triggerFlip(item.id)}
                className={`bg-white rounded-xl shadow-xl p-6 border border-purple-200 cursor-pointer hover:shadow-2xl transition-all ${
                  flippedId === item.id ? "flip-animate" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 rounded-xl flex items-center justify-center shadow-md">
                    <Icon className="text-purple-900" size={26} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-purple-700 mt-4">
                  {item.name}
                </h3>
                <p className="text-sm text-purple-500">
                  (Static) Click for more
                </p>
              </div>
            );
          })}
        </div>

        {/* Recent Activity */}
        <h2 className="text-xl font-semibold text-purple-700 mb-4">
          Recent Activity
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-purple-200">
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-purple-50 rounded-xl shadow-sm"
              >
                <span className="text-2xl">{activity.icon}</span>
                <div className="ml-4">
                  <p className="text-purple-700 font-medium">
                    {activity.action}
                  </p>
                  <p className="text-purple-500 text-sm">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
