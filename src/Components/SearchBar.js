import React from 'react';

const SearchBar = ({ handleSearchChange }) => {
    return (
        <div className="row col-12 bg-dark">
            <h1 className="col-lg-5 col-md col-sm-12 text-info ">Employee Directory</h1>
            <div className="col-lg-3 col-md-4 col-sm-12 m-3 text-center">
                <input className="col-12 shadow" placeholder="Enter first and last name here..."
                    onChange={
                        e => handleSearchChange(e)
                    }
                />
            </div>
        </div>
    );
};

export default SearchBar;