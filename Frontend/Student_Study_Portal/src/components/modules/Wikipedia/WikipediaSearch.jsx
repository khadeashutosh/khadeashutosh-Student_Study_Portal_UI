import React, { useState } from "react";
import Swal from "sweetalert2";
import SearchBar from "../../common/SearchBar";
import WikipediaResults from "./WikipediaResults";

const WikipediaSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]); // STATIC
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    Swal.fire({
      icon: "info",
      title: "Backend Required",
      text: "This Wikipedia search is static. Connect FastAPI backend.",
    });

    setHasSearched(true);
    setResults([]); // always empty in static mode
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] p-6 flex justify-center">

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-purple-700 text-center mb-8">
          Wikipedia Search
        </h1>

        {/* Search Box */}
        <div className="bg-white border border-purple-200 rounded-xl shadow-sm p-6 mb-6">
          <SearchBar
            placeholder="Search Wikipedia..."
            value={searchTerm}
            onChange={setSearchTerm}
            onSearch={handleSearch}
          />
        </div>

        {/* If Searched */}
        {hasSearched && results.length === 0 && (
          <div className="text-center py-12">
            <p className="text-purple-700 font-medium">
              No results found. Connect FastAPI backend to process this search.
            </p>
          </div>
        )}

        {/* Results (static empty) */}
        {results.length > 0 && (
          <WikipediaResults results={results} query={searchTerm} />
        )}
      </div>

      {/* Scrollbar Style */}
      <style>
        {`
          .custom-scroll::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scroll::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #c084fc, #f472b6, #67e8f9);
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default WikipediaSearch;
