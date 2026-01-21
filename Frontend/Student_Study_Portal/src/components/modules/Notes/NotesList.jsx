import React, { useState } from "react";
import Swal from "sweetalert2";
import SearchBar from "../../common/SearchBar";

const NotesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "Programming",
    "Mathematics",
    "Science",
    "Literature",
    "History",
    "Other",
  ];

  const showBackendAlert = () => {
    Swal.fire({
      icon: "info",
      title: "Backend Required",
      text: "This feature is static. Connect FastAPI backend to save notes.",
    });
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] p-6 flex justify-center">

      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
          Notes Manager
        </h1>

        {/* Search + Filters */}
        <div className="bg-white border border-purple-200 rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">

            <div className="flex-1">
              <SearchBar
                placeholder="Search notes..."
                value={searchTerm}
                onChange={setSearchTerm}
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === "all" ? "All Categories" : c}
                </option>
              ))}
            </select>

            <button
              onClick={showBackendAlert}
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white px-4 py-3 rounded-lg shadow-md hover:opacity-90"
            >
              Add Note
            </button>

          </div>
        </div>

        {/* No Notes */}
        <div className="text-center py-12">
          <p className="text-purple-700 font-medium">
            No notes available. Connect FastAPI to load notes.
          </p>
        </div>

      </div>
    </div>
  );
};

export default NotesList;
