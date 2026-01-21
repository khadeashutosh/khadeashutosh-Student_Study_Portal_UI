import React, { useState } from "react";
import Swal from "sweetalert2";
import SearchBar from "../../common/SearchBar";

const BookList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedGenre, setSelectedGenre] = useState("all");

  const statuses = ["all", "unread", "reading", "completed", "on-hold"];
  const genres = [
    "all",
    "Fiction",
    "Non-Fiction",
    "Science",
    "Mathematics",
    "History",
    "Biography",
    "Other",
  ];

  const backendAlert = () => {
    Swal.fire({
      icon: "info",
      title: "Backend Required",
      text: "This Books UI is static. Connect FastAPI backend for full functionality.",
    });
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] flex justify-center">

      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
          Book Library
        </h1>

        {/* Search + Filters */}
        <div className="bg-white border border-purple-200 rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">

            <div className="flex-1">
              <SearchBar
                placeholder="Search books..."
                value={searchTerm}
                onChange={setSearchTerm}
              />
            </div>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status === "all"
                    ? "All Status"
                    : status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>

            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400"
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre === "all" ? "All Genres" : genre}
                </option>
              ))}
            </select>

            <button
              onClick={backendAlert}
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white px-4 py-3 rounded-lg shadow-md hover:opacity-90"
            >
              Add Book
            </button>

          </div>
        </div>

        {/* No Books Display */}
        <div className="text-center py-12">
          <p className="text-purple-700 font-medium">
            No books found. Connect FastAPI to load books.
          </p>
        </div>

      </div>
    </div>
  );
};

export default BookList;
