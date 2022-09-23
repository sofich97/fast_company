import React from "react";
import propTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")} />
        </button>
    );
};

BookMark.propTypes = {
    status: propTypes.bool.isRequired
};

export default BookMark;
