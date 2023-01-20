import React from "react";
import propTypes from "prop-types";
import { useQualities } from "../../../hooks/useQualities";

const Quality = ({ id }) => {
    const { getQuality } = useQualities();
    const { color, name } = getQuality(id);

    return <span className={`badge bg-${color} m-1`}>
        {name}
    </span>;
};

Quality.propTypes = {
    id: propTypes.string.isRequired
};

export default Quality;
