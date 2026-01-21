import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div
        className="
          h-8 w-8 rounded-full border-2 border-t-transparent
          animate-spin
          border-purple-500
        "
      ></div>

      <span className="ml-3 text-gray-700 font-medium">
        Loading...
      </span>
    </div>
  );
};

export default LoadingSpinner;
