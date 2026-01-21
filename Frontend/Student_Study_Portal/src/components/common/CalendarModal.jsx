import React, { useRef, useEffect, useState } from "react";
import { FaCalendar, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const CalendarModal = ({ isOpen, onClose, position }) => {
  const modalRef = useRef(null);

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const onClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };
    if (isOpen) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isOpen]);

  if (!isOpen) return null;

  const style = {
    position: "fixed",
    top: position.top,
    left: position.left,
    zIndex: 999999,
  };

  return (
    <div style={style}>
      <div
        ref={modalRef}
        className="bg-white/70 backdrop-blur-lg border border-purple-300 shadow-xl rounded-xl p-4 min-w-[240px]"
      >
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-bold text-purple-700 flex items-center">
            <FaCalendar className="mr-1 text-pink-600" /> Calendar
          </h2>

          <button
            onClick={onClose}
            className="p-1 text-gray-600 hover:bg-gray-200 rounded-full"
          >
            <FaTimes size={12} />
          </button>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
              )
            }
            className="p-1 hover:bg-purple-100 rounded-full"
          >
            <FaChevronLeft size={12} />
          </button>

          <span className="text-xs font-semibold text-purple-700">
            {currentDate.toLocaleString("default", { month: "short" })}{" "}
            {currentDate.getFullYear()}
          </span>

          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
              )
            }
            className="p-1 hover:bg-purple-100 rounded-full"
          >
            <FaChevronRight size={12} />
          </button>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 text-center text-xs text-gray-700 mb-1">
          {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        {/* Calendar Days */}
        <CalendarDays currentDate={currentDate} />

        <div className="text-xs text-purple-700 text-center mt-2 border-t pt-2">
          Today: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;

const CalendarDays = ({ currentDate }) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const days = [];
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) days.push(<div key={"e" + i}></div>);

  for (let d = 1; d <= totalDays; d++) {
    const isToday =
      new Date().toDateString() === new Date(year, month, d).toDateString();

    days.push(
      <div
        key={d}
        className={`text-xs h-7 flex items-center justify-center rounded 
          ${isToday
            ? "bg-gradient-to-r from-purple-300 to-pink-300 text-black font-bold shadow"
            : "hover:bg-purple-100 text-gray-700"
          }`}
      >
        {d}
      </div>
    );
  }

  return <div className="grid grid-cols-7 gap-1">{days}</div>;
};
