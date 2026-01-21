import React from "react";
import Swal from "sweetalert2";
import { FaExternalLinkAlt, FaBookmark, FaShare } from "react-icons/fa";

const WikipediaResults = ({ results, query }) => {
  const alertMessage = (msg) => {
    Swal.fire({
      icon: "info",
      title: msg,
      text: "This is static. Connect backend for real functionality.",
    });
  };

  return (
    <div className="bg-white border border-purple-200 rounded-2xl shadow-xl p-6 custom-scroll max-h-[500px] overflow-y-auto">

      <h2 className="text-2xl font-bold text-purple-700 mb-4">
        Wikipedia Results for "{query}"
      </h2>

      <div className="space-y-6">
        {results.map((result, index) => (
          <div
            key={index}
            className="border-b border-purple-200 pb-4 last:border-b-0"
          >
            <div className="flex gap-4">

              {/* Thumbnail */}
              {result.thumbnail && (
                <img
                  src={result.thumbnail}
                  alt={result.title}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0 border border-purple-300"
                />
              )}

              {/* Info */}
              <div className="flex-1">
                <h3 className="font-semibold text-purple-800 mb-2">
                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-purple-600"
                  >
                    {result.title}
                    <FaExternalLinkAlt className="ml-2 text-xs" />
                  </a>
                </h3>

                <p className="text-gray-700 text-sm mb-3">{result.extract}</p>

                {/* Actions */}
                <div className="flex items-center space-x-6 text-sm">

                  <a
                    href={result.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-700 hover:text-purple-900 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Read Article
                  </a>

                  <button
                    className="text-pink-600 hover:text-pink-800 flex items-center"
                    onClick={() => alertMessage("Bookmarked")}
                  >
                    <FaBookmark className="mr-1" /> Bookmark
                  </button>

                  <button
                    className="text-cyan-600 hover:text-cyan-800 flex items-center"
                    onClick={() => alertMessage("Shared")}
                  >
                    <FaShare className="mr-1" /> Share
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default WikipediaResults;
