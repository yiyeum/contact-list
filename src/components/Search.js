import React from 'react';
import TextField from '@material-ui/core/TextField';

const Search = ({ searchInput, searchHandleChange }) => {
    return (
        <div className="search-wrapper">
            <TextField
                className={"search-input"}
                value={searchInput}
                onChange={searchHandleChange}
                margin="dense"
                placeholder="Search name here"
            />
            <button className="search-btn">
                <i className="fas fa-search" />
            </button>
        </div>
    );
}

export default Search;