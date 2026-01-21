import React from "react";
import Swal from "sweetalert2";
import { FaArrowLeft, FaEdit, FaTrash } from "react-icons/fa";

const NoteDetail = ({ onBack }) => {
  const noBackend = (action) => {
    Swal.fire({
      icon: "info",
      title: action,
      text: "This feature is static. Connect FastAPI backend.",
    });
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] flex justify-center">

      <div className="bg-white border border-purple-200 p-8 rounded-2xl shadow-2xl w-full max-w-3xl">

        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center text-purple-700 hover:text-purple-900 font-semibold"
          >
            <FaArrowLeft className="mr-2" />
            Back to Notes
          </button>

          <div className="flex space-x-2">
            <button
              onClick={() => noBackend("Edit Disabled")}
              className="p-2 border border-purple-300 rounded-lg text-purple-700 hover:bg-purple-50"
            >
              <FaEdit />
            </button>

            <button
              onClick={() => noBackend("Delete Disabled")}
              className="p-2 border border-pink-300 rounded-lg text-pink-700 hover:bg-pink-50"
            >
              <FaTrash />
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-purple-800">Note Title</h1>

          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">
              Category
            </span>
            <span>Created: Today</span>
          </div>

          <p className="text-gray-700 mt-4 whitespace-pre-line">
            Note content displayed here.  
            This is static preview only.
          </p>
        </div>

      </div>
    </div>
  );
};

export default NoteDetail;
