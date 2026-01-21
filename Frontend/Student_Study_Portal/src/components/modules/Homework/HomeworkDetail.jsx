import React from "react";
import { FaArrowLeft, FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const HomeworkDetail = () => {
  const showAlert = (action) => {
    Swal.fire({
      icon: "info",
      title: `${action} (Static)`,
      text: "This is just a static preview. Connect FastAPI backend.",
    });
  };

  const hw = {
    title: "Math Assignment - Derivatives",
    subject: "Mathematics",
    description: "Solve problems 1–20 on derivatives (chapter 5). Show full steps.",
    dueDate: "2025-12-01",
    priority: "high",
    status: "pending",
    createdAt: "2025-11-20",
  };

  return (
    <div className="bg-white rounded-2xl border border-purple-200 p-8 shadow-lg">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-purple-800">{hw.title}</h1>

        <div className="flex items-center gap-2">
          <button
            onClick={() => showAlert("Mark Complete")}
            className="p-2 text-green-600 border border-green-200 rounded hover:text-green-800"
          >
            <FaCheckCircle />
          </button>

          <button
            onClick={() => showAlert("Edit")}
            className="p-2 text-blue-600 border border-blue-200 rounded hover:text-blue-800"
          >
            <FaEdit />
          </button>

          <button
            onClick={() => showAlert("Delete")}
            className="p-2 text-red-600 border border-red-200 rounded hover:text-red-800"
          >
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Details */}
      <p className="text-sm text-gray-600 mb-4">
        {hw.subject} • Created: {hw.createdAt}
      </p>

      <p className="text-gray-800 mb-6">{hw.description}</p>

      <div className="space-y-2 text-sm text-gray-700">
        <p><strong className="text-purple-700">Status:</strong> {hw.status}</p>
        <p><strong className="text-purple-700">Due:</strong> {hw.dueDate}</p>
        <p><strong className="text-purple-700">Priority:</strong> {hw.priority}</p>
      </div>

      <div className="text-right mt-6">
        <button
          onClick={() => showAlert("Back")}
          className="px-4 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white rounded-lg shadow-md"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default HomeworkDetail;
