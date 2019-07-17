import React from 'react';

const SearchBar = ({ searchQuery, handleChange }) => {
    return (
        <div>
            <input value={searchQuery} onChange={handleChange} />
        </div>
    );
}

export default SearchBar;