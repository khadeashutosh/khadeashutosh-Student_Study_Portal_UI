import React from "react";
import { FaPlay, FaHeart, FaShare, FaDownload } from "react-icons/fa";
import Swal from "sweetalert2";

const VideoList = ({ videos, onVideoSelect }) => {
  const alertMessage = (msg) => {
    Swal.fire({
      icon: "info",
      title: msg,
      text: "Backend integration required.",
    });
  };

  return (
    <div className="space-y-4 max-h-[500px] overflow-y-auto custom-scroll pr-2">

      {videos.map((video) => (
        <div
          key={video.id}
          className="bg-white border border-purple-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
        >
          <div className="flex gap-4">

            {/* Thumbnail */}
            <div className="relative flex-shrink-0">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-40 h-24 object-cover rounded-lg cursor-pointer"
                onClick={() => onVideoSelect(video)}
              />
              <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-2 py-0.5 rounded">
                {video.duration}
              </div>
            </div>

            {/* Details */}
            <div className="flex-1">
              <h3
                className="font-semibold text-purple-800 mb-1 cursor-pointer hover:text-purple-600"
                onClick={() => onVideoSelect(video)}
              >
                {video.title}
              </h3>
              <p className="text-sm text-gray-600">{video.channel}</p>

              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>{video.views}</span>
                <span>{video.published}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3 mt-3">

                <button className="text-red-600 hover:text-red-800" onClick={() => alertMessage("Liked")}>
                  <FaHeart size={14} />
                </button>

                <button className="text-purple-700 hover:text-purple-900" onClick={() => alertMessage("Shared")}>
                  <FaShare size={14} />
                </button>

                <button className="text-cyan-600 hover:text-cyan-800" onClick={() => alertMessage("Download Requested")}>
                  <FaDownload size={14} />
                </button>

              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default VideoList;
