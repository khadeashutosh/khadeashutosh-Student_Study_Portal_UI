import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({
  placeholder = "Search...",
  value,
  onChange,
  onSearch
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="
            w-full pl-10 pr-4 py-2
            rounded-xl
            bg-white/70
            border border-white/40
            shadow-sm
            backdrop-blur-md
            focus:ring-2 focus:ring-purple-400 focus:border-transparent
            text-gray-700
            placeholder-gray-500
            transition-all
          "
          style={{ 
            fontFamily: "'Red Hat Display', sans-serif" 
          }}
        />

        <FaSearch
          className="
            absolute left-3 top-2.5 text-gray-500
            transition-all
          "
          size={16}
        />
      </div>
    </form>
  );
};

export default SearchBar;
