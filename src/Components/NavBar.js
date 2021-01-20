import React from 'react';
import SearchBar from './SearchBar'

const NavBar = ({ onChange }) => {
    return (
        <nav>
            <div>
                <SearchBar onChange={onChange} />
            </div>
        </nav>
    );
};

export default NavBar;