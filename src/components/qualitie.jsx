import React from "react";
import propTypes from "prop-types";

const Qualitie = ({ color, name }) => {
    return <span className={`badge bg-${color} m-1`}>{name}</span>;
};

Qualitie.propTypes = {
    color: propTypes.string.isRequired,
    name: propTypes.string.isRequired
};

export default Qualitie;
