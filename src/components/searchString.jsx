import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchString = ({ users }) => {
    const [searchName, setSearchName] = useState("");

    const usersNames = users.map((user) => user.name);

    const handleChange = ({ target }) => {
        setSearchName(target.value);
        console.log(target.value);
    };

    const filteredNames = usersNames.filter(name => {
        return name.toLowerCase().includes(searchName.toLowerCase());
    });

    console.log(filteredNames);

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                name="search"
                placeholder="Search..."
                onChange={handleChange}
                value={searchName}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                    Start search
                </button>
            </div>
        </div>
    );
};

SearchString.propTypes = {
    users: PropTypes.array.isRequired
};

export default SearchString;
