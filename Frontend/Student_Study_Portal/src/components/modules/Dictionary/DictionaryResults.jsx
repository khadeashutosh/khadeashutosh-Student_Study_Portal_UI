import React from "react";
import { FaVolumeUp, FaCopy, FaBookmark } from "react-icons/fa";

const DictionaryResults = ({ results, word }) => {
  if (!results || results.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-purple-600 text-lg">
          No definitions found for "{word}"
        </p>
      </div>
    );
  }

  const entry = results[0];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-200">

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-extrabold text-purple-700">
          "{entry.word}"
        </h2>
        <div className="flex space-x-2">
          <button className="p-2 border border-purple-300 rounded-full text-purple-700 hover:bg-purple-50">
            <FaVolumeUp />
          </button>
          <button className="p-2 border border-purple-300 rounded-full text-purple-700 hover:bg-purple-50">
            <FaBookmark />
          </button>
          <button className="p-2 border border-purple-300 rounded-full text-purple-700 hover:bg-purple-50">
            <FaCopy />
          </button>
        </div>
      </div>

      {entry.phonetic && (
        <p className="text-purple-500 text-lg mb-4">/{entry.phonetic}/</p>
      )}

      <div className="space-y-6">
        {entry.meanings.map((meaning, index) => (
          <div key={index} className="border-t border-purple-200 pt-4">
            <h3 className="font-semibold text-pink-600 text-lg mb-3">
              {meaning.partOfSpeech}
            </h3>

            {meaning.definitions.map((definition, i) => (
              <div
                key={i}
                className="bg-purple-50 rounded-xl p-4 shadow-sm border border-purple-100"
              >
                <p className="text-purple-800 font-medium">
                  • {definition.definition}
                </p>
                {definition.example && (
                  <p className="text-purple-500 italic mt-1">
                    "{definition.example}"
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DictionaryResults;
