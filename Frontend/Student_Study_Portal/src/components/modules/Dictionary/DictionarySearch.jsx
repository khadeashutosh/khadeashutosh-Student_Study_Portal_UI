import React, { useState } from "react";
import Swal from "sweetalert2";
import SearchBar from "../../common/SearchBar";
import DictionaryResults from "./DictionaryResults";

const DictionarySearch = () => {
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    Swal.fire({
      icon: "info",
      title: "Static UI",
      text: "Connect FastAPI backend to fetch real dictionary meanings.",
    });
    setShowResults(true); // Always show static result
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] p-6 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-8 border border-purple-200">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-purple-700 mb-6">
          Dictionary Lookup
        </h1>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-purple-200 mb-6">
          <SearchBar
            placeholder="Search for a word..."
            onSearch={handleSearch}
          />
        </div>

        {/* Always static output */}
        {showResults && <DictionaryResults />}

        {!showResults && (
          <div className="text-center py-14">
            <p className="text-purple-600 text-lg">
              Search a word to view dictionary template.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DictionarySearch;
