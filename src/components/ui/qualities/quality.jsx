import React from "react";
import propTypes from "prop-types";

const Quality = ({ color, name }) => {
    return <span className={`badge bg-${color} m-1`}>{name}</span>;
};

Quality.propTypes = {
    color: propTypes.string.isRequired,
    name: propTypes.string.isRequired
};

export default Quality;
