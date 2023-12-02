// SearchBar.js
import React, { useState } from 'react';
import SearchBar from 'material-ui-search-bar';

const CustomSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Call onSearch with the search term
    onSearch(searchTerm);
  };

  return (
    <SearchBar
      value={searchTerm}
      
      onChange={(newValue) => setSearchTerm(newValue)}
      onRequestSearch={handleSearch}
    />
  );
};

export default CustomSearchBar;
