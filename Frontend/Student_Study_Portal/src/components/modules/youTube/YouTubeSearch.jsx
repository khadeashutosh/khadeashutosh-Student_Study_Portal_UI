import React, { useState } from "react";
import Swal from "sweetalert2";
import SearchBar from "../../common/SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

const YouTubeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]); // STATIC → always empty until backend
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    Swal.fire({
      icon: "info",
      title: "Backend Required",
      text: "This feature is static. Connect FastAPI to fetch YouTube videos.",
    });

    setHasSearched(true);
    setVideos([]); // always empty (static)
  };

  if (selectedVideo) {
    return (
      <VideoPlayer video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    );
  }

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-gradient-to-br from-[#f7c6ff] via-[#f5b4d4] to-[#acd9ff] p-6 flex justify-center">

      {/* Main Container */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-purple-700 text-center mb-8">
          YouTube Educational Search
        </h1>

        {/* Search Box */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <SearchBar
            placeholder="Search educational videos..."
            value={searchTerm}
            onChange={setSearchTerm}
            onSearch={handleSearch}
          />
        </div>

        {/* Results */}
        {hasSearched && videos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-purple-700 font-medium">
              No videos found. Connect your FastAPI backend to load results.
            </p>
          </div>
        )}

        {hasSearched && videos.length > 0 && (
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
        )}
      </div>

      {/* Scrollbar */}
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

export default YouTubeSearch;
