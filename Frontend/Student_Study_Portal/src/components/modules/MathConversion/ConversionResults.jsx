import React from "react";
import { FaCalculator } from "react-icons/fa";

const ConversionResults = ({ onNewConversion }) => {
  return (
    <div className="bg-white rounded-2xl border border-purple-200 p-8 shadow-lg">

      <div className="flex items-center mb-6">
        <FaCalculator className="text-purple-600 mr-3" size={30} />
        <h2 className="text-2xl font-bold text-purple-700">
          Conversion Result (Static)
        </h2>
      </div>

      {/* STATIC RESULT */}
      <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl shadow-sm mb-6">
        <p className="text-purple-800 font-semibold text-lg text-center">
          100 Celsius = 212 Fahrenheit
        </p>
      </div>

      {/* STATIC HISTORY */}
      <h3 className="text-xl font-semibold text-purple-700 mb-4">History (Static)</h3>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-purple-100">
          <p className="text-purple-800 font-medium">100 Celsius → 212 Fahrenheit</p>
          <p className="text-purple-500 text-sm">Date: 2025-11-27 5:35 PM</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-purple-100">
          <p className="text-purple-800 font-medium">50 Celsius → 122 Fahrenheit</p>
          <p className="text-purple-500 text-sm">Date: 2025-11-26 8:12 PM</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-purple-100">
          <p className="text-purple-800 font-medium">0 Celsius → 32 Fahrenheit</p>
          <p className="text-purple-500 text-sm">Date: 2025-11-25 2:00 PM</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={onNewConversion}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white rounded-lg shadow-md hover:opacity-90"
        >
          New Conversion
        </button>
      </div>
    </div>
  );
};

export default ConversionResults;
