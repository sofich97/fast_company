import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));

        if (number > 4 && number < 15) {
            return `${length} человек тусанет`;
        }
        if ([2, 3, 4].indexOf(lastOne) >= 0) {
            return `${length} человека тусанут`;
        }
        if (lastOne === 1) {
            return `${length} человек тусанет`;
        }
        return `${length} человек тусанет`;
    };

    const getBadgeClasses = () => {
        let classes = "badge m-3 ";
        classes += length === 0 ? "bg-danger" : "bg-primary";
        return classes;
    };

    return (
        <>
            <h2>
                <span className={getBadgeClasses()}>
                    {length > 0
                        ? `${renderPhrase(length)} с тобой сегодня`
                        : "Никто с тобой не тусанет"}
                </span>
            </h2>
        </>
    );
};
SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
