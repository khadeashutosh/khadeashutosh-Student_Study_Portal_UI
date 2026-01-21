import React, { useState, useRef, useEffect } from "react";
import {
  FaBell,
  FaUser,
  FaClock,
  FaCalendar,
  FaSignOutAlt,
} from "react-icons/fa";

import ClockModal from "./ClockModal";
import CalendarModal from "./CalendarModal";

const Header = ({ user, onLogout }) => {
  const [showClock, setShowClock] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const clockRef = useRef(null);
  const calendarRef = useRef(null);

  const [clockPos, setClockPos] = useState({ top: 0, left: 0 });
  const [calendarPos, setCalendarPos] = useState({ top: 0, left: 0 });

  const openClock = () => {
    if (clockRef.current) {
      const rect = clockRef.current.getBoundingClientRect();
      setClockPos({
        top: rect.bottom + 8,
        left: rect.left - 60,
      });
    }
    setShowClock(true);
    setShowCalendar(false);
  };

  const openCalendar = () => {
    if (calendarRef.current) {
      const rect = calendarRef.current.getBoundingClientRect();
      setCalendarPos({
        top: rect.bottom + 8,
        left: rect.left - 120,
      });
    }
    setShowCalendar(true);
    setShowClock(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md border-b border-purple-200/40 sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Search */}
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <input
              type="text"
              placeholder="Search across all modules..."
              className="w-full px-4 py-2 pl-10 border border-purple-200 rounded-lg
              focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 
                0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 ml-6">

          {/* Notification */}
          <button className="relative p-2 rounded-full hover:bg-purple-100 text-purple-600">
            <FaBell size={20} />
            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Clock */}
          <button
            ref={clockRef}
            onClick={openClock}
            className="p-2 text-purple-600 hover:bg-purple-100 rounded-full"
          >
            <FaClock size={20} />
          </button>

          {/* Calendar */}
          <button
            ref={calendarRef}
            onClick={openCalendar}
            className="p-2 text-purple-600 hover:bg-purple-100 rounded-full"
          >
            <FaCalendar size={20} />
          </button>

          {/* User */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 rounded-full flex items-center justify-center shadow">
              <FaUser className="text-white" size={16} />
            </div>
            <span className="hidden md:block text-sm font-medium text-gray-700">
              {user?.name || "Ashu Khade"}
            </span>
          </div>

          {/* Logout */}
          <button
            onClick={onLogout}
            className="p-2 text-purple-600 hover:bg-purple-100 rounded-full"
          >
            <FaSignOutAlt size={20} />
          </button>
        </div>
      </div>

      {/* Modals */}
      <ClockModal isOpen={showClock} onClose={() => setShowClock(false)} position={clockPos} />
      <CalendarModal isOpen={showCalendar} onClose={() => setShowCalendar(false)} position={calendarPos} />
    </header>
  );
};

export default Header;
