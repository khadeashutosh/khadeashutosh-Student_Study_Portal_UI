import React, { useState } from "react";
import {
  FaHome,
  FaStickyNote,
  FaBook,
  FaYoutube,
  FaCheckSquare,
  FaBookOpen,
  FaGlobe,
  FaCalculator,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Flick animation
function useFlick(initialId) {
  const [flickId, setFlickId] = useState(initialId);
  const triggerFlick = (id) => {
    setFlickId(id);
    setTimeout(() => setFlickId(null), 300);
  };
  return [flickId, triggerFlick];
}

const Sidebar = ({
  activeModule,
  onModuleChange,
  isMobileMenuOpen,
  onMobileMenuClose,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const modules = [
    { id: "menu", name: "Menu", icon: FaHome },
    { id: "notes", name: "Notes", icon: FaStickyNote },
    { id: "homework", name: "Homework", icon: FaBook },
    { id: "youtube", name: "YouTube", icon: FaYoutube },
    { id: "todo", name: "To-Do", icon: FaCheckSquare },
    { id: "books", name: "Books", icon: FaBookOpen },
    { id: "dictionary", name: "Dictionary", icon: FaGlobe },
    { id: "wikipedia", name: "Wikipedia", icon: FaGlobe },
    { id: "math", name: "Math Conversion", icon: FaCalculator },
  ];

  const [flickId, triggerFlick] = useFlick(null);

  const handleClick = (moduleId) => {
    onModuleChange(moduleId);
    triggerFlick(moduleId);
    if (isMobileMenuOpen) onMobileMenuClose();
  };

  return (
    <div
      className={`
        fixed md:static inset-y-0 left-0 z-50
        ${collapsed ? "w-30re" : "w-64"}
        bg-gradient-to-br from-purple-50 via-pink-100 to-cyan-50
        backdrop-blur-xl shadow-2xl border-r border-white/40
        transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0
        transition-all duration-500 ease-in-out
      `}
      style={{
        fontFamily: "'Red Hat Display', sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Flip toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-4 top-6 bg-white shadow-lg border border-purple-300
          w-9 h-9 rounded-full flex items-center justify-center
          hover:scale-110 transition-transform duration-300"
        style={{ animation: "flipAnim 0.4s" }}
      >
        {collapsed ? (
          <FaChevronRight className="text-purple-600" />
        ) : (
          <FaChevronLeft className="text-purple-600" />
        )}
      </button>

      {/* Flip Animation */}
      <style>{`
        @keyframes flipAnim {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(180deg); }
          100% { transform: rotateY(0deg); }
        }
        .flick-animate {
          animation: neonGlow 0.3s ease-out;
        }
        @keyframes neonGlow {
          0% { box-shadow: 0 0 0px rgba(255,0,255,0.2); }
          50% { box-shadow: 0 0 25px rgba(255,0,255,0.5); }
          100% { box-shadow: 0 0 0px rgba(255,0,255,0.2); }
        }
      `}</style>

      <div className="flex flex-col h-full pt-16 md:pt-0">
        <nav className="flex-1 px-4 py-8 space-y-2">
          {modules.map((module) => {
            const Icon = module.icon;
            const isActive = activeModule === module.id;
            return (
              <button
                key={module.id}
                onClick={() => handleClick(module.id)}
                className={`
                  w-full flex items-center gap-4 px-5 py-3 rounded-xl font-semibold
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 text-white shadow-xl"
                      : "text-purple-700 hover:bg-purple-50/70"
                  }
                  ${flickId === module.id && isActive ? "flick-animate" : ""}
                `}
              >
                <Icon
                  size={22}
                  className={`${isActive ? "text-white" : "text-purple-500"}`}
                />
                {!collapsed && <span>{module.name}</span>}
              </button>
            );
          })}
        </nav>

        {/* Close button for mobile */}
        <button
          onClick={onMobileMenuClose}
          className="md:hidden absolute top-4 right-4 p-2 text-purple-500 hover:bg-pink-100 rounded-full"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
