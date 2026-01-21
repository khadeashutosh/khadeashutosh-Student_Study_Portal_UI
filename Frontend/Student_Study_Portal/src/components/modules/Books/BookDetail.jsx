import React from "react";
import Swal from "sweetalert2";
import { FaArrowLeft, FaEdit, FaTrash } from "react-icons/fa";

const BookDetail = ({ onBack }) => {
  const noAction = (msg) => {
    Swal.fire({
      icon: "info",
      title: msg,
      text: "Connect FastAPI backend to enable this action.",
    });
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] flex justify-center">

      <div className="bg-white border border-purple-200 p-8 rounded-2xl shadow-2xl w-full max-w-3xl">

        <div className="flex justify-between items-center mb-6">
          <button
            onClick={onBack}
            className="flex items-center text-purple-700 hover:text-purple-900 font-semibold"
          >
            <FaArrowLeft className="mr-2" /> Back to Books
          </button>

          <div className="flex space-x-2">
            <button
              onClick={() => noAction("Edit Disabled")}
              className="p-2 border border-purple-300 rounded-lg text-purple-700 hover:bg-purple-50"
            >
              <FaEdit />
            </button>

            <button
              onClick={() => noAction("Delete Disabled")}
              className="p-2 border border-pink-300 rounded-lg text-pink-700 hover:bg-pink-50"
            >
              <FaTrash />
            </button>
          </div>
        </div>

        <div className="text-center">
          <div className="w-32 h-48 bg-purple-100 border border-purple-300 rounded-lg mx-auto mb-4 flex items-center justify-center text-purple-600">
            Book Cover
          </div>

          <h1 className="text-2xl font-bold text-purple-800">Book Title</h1>
          <p className="text-gray-600">by Author Name</p>

          <div className="mt-4 text-gray-700">
            <p><strong>Genre:</strong> Fiction</p>
            <p><strong>ISBN:</strong> 1234567890</p>
            <p><strong>Status:</strong> Reading</p>
            <p><strong>Published:</strong> 2020</p>
          </div>

          <p className="text-gray-700 mt-6 whitespace-pre-line">
            This is a static book description preview.  
            Connect FastAPI backend to display real book data.
          </p>
        </div>

      </div>
    </div>
  );
};

export default BookDetail;
