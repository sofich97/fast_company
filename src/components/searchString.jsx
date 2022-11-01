import React from "react";
import PropTypes from "prop-types";

const SearchString = ({ onHandleSearch, value }) => {
    return (
        <div className="mb-3">
            <input
                type="text"
                className="form-control"
                name="search"
                placeholder="Search..."
                onChange={onHandleSearch}
                value={value}
            />
        </div>
    );
};

SearchString.propTypes = {
    onHandleSearch: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default SearchString;
