import React, { useState } from "react";
import { FaCalculator, FaExchangeAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ConversionForm = ({ onConvert }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (!value.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Enter a value",
        text: "Please enter a number before converting.",
      });
      return;
    }

    onConvert(); // Only switches UI
  };

  return (
    <div className="bg-white rounded-2xl border border-purple-200 p-8 shadow-lg">

      <div className="flex items-center mb-6">
        <FaCalculator className="text-purple-600 mr-3" size={28} />
        <h2 className="text-xl font-bold text-purple-700">Static Conversion Preview</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-purple-700 font-medium mb-2">Value</label>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-4 py-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400"
            placeholder="Enter value..."
          />
        </div>

        <div className="flex justify-center mb-2">
          <button className="p-3 border border-purple-300 rounded-full text-purple-700 hover:bg-purple-50">
            <FaExchangeAlt />
          </button>
        </div>

        <div className="text-center">
          <button
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 text-white font-semibold shadow-md hover:opacity-90"
            onClick={handleClick}
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConversionForm;
