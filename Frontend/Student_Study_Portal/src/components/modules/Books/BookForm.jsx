import React from "react";
import Swal from "sweetalert2";
import { FaTimes, FaSave } from "react-icons/fa";

const BookForm = ({ onCancel }) => {
  const alertUser = () => {
    Swal.fire({
      icon: "info",
      title: "Cannot Save",
      text: "This is a static UI. Connect FastAPI backend to save books.",
    });
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] flex justify-center">

      <div className="bg-white border border-purple-200 p-8 rounded-2xl shadow-2xl w-full max-w-3xl">

        <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
          Add New Book
        </h2>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Book Title"
              className="px-4 py-3 border border-purple-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Author Name"
              className="px-4 py-3 border border-purple-300 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="ISBN"
              className="px-4 py-3 border border-purple-300 rounded-lg"
            />
            <select className="px-4 py-3 border border-purple-300 rounded-lg">
              <option>Fiction</option>
              <option>Science</option>
              <option>History</option>
            </select>
            <select className="px-4 py-3 border border-purple-300 rounded-lg">
              <option>Unread</option>
              <option>Reading</option>
              <option>Completed</option>
            </select>
          </div>

          <textarea
            rows={4}
            placeholder="Book Description"
            className="w-full px-4 py-3 border border-purple-300 rounded-lg"
          ></textarea>

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
              onClick={alertUser}
              className="px-4 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white rounded-lg shadow-md flex items-center hover:opacity-90"
            >
              <FaSave className="mr-2" /> Save Book
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default BookForm;
