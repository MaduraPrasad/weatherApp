// src/components/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ handleCitySearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    handleCitySearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for cities"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
