import React, { useState } from "react";
import Swal from "sweetalert2";
import ConversionForm from "./ConversionForm";
import ConversionResults from "./ConversionResults";

const MathConversion = () => {
  const [showResults, setShowResults] = useState(false);

  const handleConvert = () => {
    Swal.fire({
      icon: "info",
      title: "Static UI",
      text: "Connect FastAPI backend later for real conversions.",
    });

    setShowResults(true);
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] flex justify-center">
      
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-purple-300 p-8">

        <h1 className="text-3xl font-bold text-purple-700 mb-6">Math Conversion</h1>

        {!showResults ? (
          <ConversionForm onConvert={handleConvert} />
        ) : (
          <ConversionResults onNewConversion={() => setShowResults(false)} />
        )}

      </div>
    </div>
  );
};

export default MathConversion;
