import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaTimes, FaSave } from "react-icons/fa";

const NoteForm = ({ onCancel }) => {
  const showAlert = () => {
    Swal.fire({
      icon: "info",
      title: "Cannot Save",
      text: "This is a static UI. Connect FastAPI backend to save notes.",
    });
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] flex justify-center">

      <div className="bg-white border border-purple-200 p-8 rounded-2xl shadow-2xl w-full max-w-3xl">

        <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
          Create New Note
        </h2>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

          <div>
            <label className="text-purple-700 font-semibold mb-1 block">Title</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="text-purple-700 font-semibold mb-1 block">Category</label>
            <select className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400">
              <option>General</option>
              <option>Programming</option>
              <option>Mathematics</option>
              <option>Science</option>
              <option>History</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="text-purple-700 font-semibold mb-1 block">Content</label>
            <textarea
              rows={6}
              className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-3 bg-white border border-purple-300 rounded-lg text-purple-700 hover:bg-purple-50 flex items-center"
            >
              <FaTimes className="mr-2" /> Cancel
            </button>

            <button
              type="button"
              onClick={showAlert}
              className="px-4 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white rounded-lg shadow-md hover:opacity-90 flex items-center"
            >
              <FaSave className="mr-2" /> Save Note
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default NoteForm;
