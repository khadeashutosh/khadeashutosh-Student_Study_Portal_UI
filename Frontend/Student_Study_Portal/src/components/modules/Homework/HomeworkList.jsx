import React from "react";
import Swal from "sweetalert2";

const STATIC_HOMEWORK = [
  {
    id: 1,
    title: "Math Assignment - Derivatives",
    subject: "Mathematics",
    description: "Solve problems 1–20 on derivatives (chapter 5). Show full steps.",
    dueDate: "2025-12-01",
    priority: "high",
    status: "pending",
    createdAt: "2025-11-20",
  },
  {
    id: 2,
    title: "History Essay - Industrial Revolution",
    subject: "History",
    description: "Write a 1000-word essay on the effects of the Industrial Revolution.",
    dueDate: "2025-12-05",
    priority: "medium",
    status: "in-progress",
    createdAt: "2025-11-18",
  },
  {
    id: 3,
    title: "Science Lab - Acid-Base Titration",
    subject: "Science",
    description: "Complete the titration experiment and submit observations and conclusions.",
    dueDate: "2025-12-08",
    priority: "low",
    status: "pending",
    createdAt: "2025-11-15",
  },
];

const HomeworkList = () => {
  const alertAction = (action) => {
    Swal.fire({
      icon: "info",
      title: `${action} (Static)`,
      text: "This is a static UI. Connect FastAPI backend to enable real functionality.",
    });
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8 border border-purple-200">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-purple-700">Homework</h1>
            <p className="text-purple-500 mt-1">Your assignments — static preview.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => alertAction("Add Homework")}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white rounded-lg shadow-md hover:opacity-90"
            >
              Add Homework
            </button>

            <button
              onClick={() => alertAction("Refresh")}
              className="px-3 py-2 border border-purple-200 rounded-lg text-purple-700 hover:bg-purple-50"
            >
              Refresh
            </button>
          </div>
        </div>

        {/* STATIC LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATIC_HOMEWORK.map((hw) => (
            <div
              key={hw.id}
              className="bg-white rounded-2xl border border-purple-200 p-6 shadow-sm hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-purple-800 font-semibold text-lg">{hw.title}</h3>

                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    hw.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : hw.status === "in-progress"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {hw.status}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4">{hw.subject} • Due: {hw.dueDate}</p>

              <p className="text-gray-700 text-sm line-clamp-3 mb-4">{hw.description}</p>

              <div className="flex justify-between items-center text-sm">
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                  {hw.priority}
                </span>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => alertAction("View")}
                    className="text-purple-700 hover:text-purple-900"
                  >
                    View
                  </button>

                  <button
                    onClick={() => alertAction("Edit")}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => alertAction("Delete")}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-purple-500 mt-8">
          This list is static. Connect backend to load real homework.
        </div>
      </div>
    </div>
  );
};

export default HomeworkList;
