import React from 'react';
import SearchBar from './SearchBar'

const NavBar = ({ handleSearchChange }) => {
    return (
        <nav>
            <div>
                <SearchBar handleSearchChange={handleSearchChange} />
            </div>
        </nav>
    );
};

export default NavBar;