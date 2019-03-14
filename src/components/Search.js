import React from 'react';
import PropTypes from "prop-types";
import TextField from '@material-ui/core/TextField';

const Search = ({ searchInput, searchHandleChange, setResultSearch, searchByEnter }) => {
    return (
        <div className="search-wrapper">
            <TextField
                className={"search-input"}
                value={searchInput}
                onChange={searchHandleChange}
                margin="dense"
                placeholder="Search name here"
            />
            <button
                className="search-btn"
                onClick={setResultSearch}
                onKeyPress={searchByEnter}
            >
                <i className="fas fa-search" />
            </button>
        </div>
    );
}

Search.propTypes = {
    searchInput: PropTypes.string,
    searchHandleChange: PropTypes.func,
    setResultSearch: PropTypes.func,
    searchByEnter: PropTypes.func
};

export default Search;