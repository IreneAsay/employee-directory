import React from 'react';

const SearchBar = ({ onChange }) => {
    return (
        <div>
            <form className="m-3">
                <input className="shadow"
                    onChange={
                        e => onChange(e)
                    }
                />
            </form>
        </div>
    );
};

export default SearchBar;