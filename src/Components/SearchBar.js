import React from 'react';

const SearchBar = ({ handleSearchChange }) => {
    return (
        <div>
            <form className="m-3 text-center">
                <input className="shadow col-6" placeholder="Enter"
                    onChange={
                        e => handleSearchChange(e)
                    }
                />
            </form>
        </div>
    );
};

export default SearchBar;