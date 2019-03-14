import React from 'react';
import PropTypes from "prop-types";

const ResultMessage = ({ message }) => {
    return (
        <p className="list-result-number">
            {message}
        </p>
    );
}

ResultMessage.propTypes = {
    message: PropTypes.string
};

export default ResultMessage;