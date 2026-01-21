import React from "react";
import Swal from "sweetalert2";
import { FaTimes, FaSave } from "react-icons/fa";

const HomeworkForm = () => {
  const showAlert = (action) => {
    Swal.fire({
      icon: "info",
      title: `${action} (Static)`,
      text: "This is a static UI. Connect FastAPI backend to save homework.",
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-purple-200 p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">
        Create New Homework (Static)
      </h2>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

        <div>
          <label className="block text-purple-700 mb-1 text-sm">Title</label>
          <input
            className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400"
            placeholder="Assignment title..."
          />
        </div>

        <div>
          <label className="block text-purple-700 mb-1 text-sm">Subject</label>
          <select className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400">
            <option>Mathematics</option>
            <option>Science</option>
            <option>English</option>
            <option>History</option>
            <option>Art</option>
          </select>
        </div>

        <div>
          <label className="block text-purple-700 mb-1 text-sm">Description</label>
          <textarea
            rows="4"
            className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400"
            placeholder="Assignment details..."
          ></textarea>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          
          <button
            type="button"
            onClick={() => showAlert("Cancel")}
            className="px-4 py-3 bg-white border border-purple-300 rounded-lg text-purple-700 hover:bg-purple-50 flex items-center"
          >
            <FaTimes className="mr-2" /> Cancel
          </button>

          <button
            type="button"
            onClick={() => showAlert("Save")}
            className="px-4 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white rounded-lg flex items-center"
          >
            <FaSave className="mr-2" /> Save Homework
          </button>

        </div>
      </form>
    </div>
  );
};

export default HomeworkForm;
