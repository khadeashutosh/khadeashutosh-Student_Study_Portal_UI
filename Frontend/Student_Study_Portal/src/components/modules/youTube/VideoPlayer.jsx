import React from "react";
import { FaTimes, FaPlay, FaVolumeUp, FaExpand } from "react-icons/fa";

const VideoPlayer = ({ video, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl w-full">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-purple-700">{video.title}</h2>
          <button
            onClick={onClose}
            className="p-2 text-purple-700 hover:text-purple-900 rounded-full hover:bg-purple-100"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Fake Player Box */}
        <div className="relative bg-black rounded-xl overflow-hidden">

          <div className="aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPlay className="text-white ml-1" size={28} />
              </div>
              <p>Video Player (Static Preview)</p>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4 flex justify-between">
            <div className="flex items-center space-x-4">
              <FaPlay className="text-white" />
              <FaVolumeUp className="text-white" />
            </div>
            <FaExpand className="text-white" />
          </div>
        </div>

        {/* Info */}
        <div className="mt-4">
          <p className="text-purple-700 font-semibold">{video.title}</p>
          <p className="text-gray-600 text-sm">{video.channel}</p>
          <p className="text-gray-500 text-sm mt-2">{video.description}</p>
        </div>

      </div>
    </div>
  );
};

export default VideoPlayer;
