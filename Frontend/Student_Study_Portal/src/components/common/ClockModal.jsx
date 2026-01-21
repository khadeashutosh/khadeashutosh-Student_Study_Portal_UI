import React, { useRef, useEffect, useState } from "react";
import { FaClock, FaTimes } from "react-icons/fa";

const ClockModal = ({ isOpen, onClose, position }) => {
  const modalRef = useRef(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(tick);
  }, []);

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
        className="bg-white/70 backdrop-blur-lg border border-purple-300 shadow-lg rounded-xl p-4 min-w-[180px]"
      >
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold text-purple-700 flex items-center">
            <FaClock className="mr-1 text-purple-600" /> Time
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-200 rounded-full"
          >
            <FaTimes size={10} />
          </button>
        </div>

        <div className="text-center">
          <div className="text-xl font-bold text-gray-900">
            {time.toLocaleTimeString([], { hour12: true })}
          </div>
          <div className="text-xs text-gray-600">{time.toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
};

export default ClockModal;
