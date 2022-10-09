import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ selectedSort, onSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    const classNameSort = () => {
        if (selectedSort.order === "asc") {
            return "bi bi-caret-up-fill";
        } else if (selectedSort.order === "desc") {
            return "bi bi-caret-down-fill";
        } else if (selectedSort.order === "") {
            return " ";
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th key={column}
                        {...{ className: columns[column].path && classNameSort() }}
                        // className={classNameSort()}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        { columns[column].name }
                        {/* { columns[column].order === "asc" ? ad} */}
                    </th>
                ))}
                { /* <th scope="col">Качества</th> */ }
                { /* <th onClick={() => handleSort("profession.name")} scope="col">Профессия</th> */ }
                { /* <th onClick={() => handleSort("completedMeetings")} scope="col">Встретиться раз</th> */ }
                { /* <th onClick={() => handleSort("rate")} scope="col">Оценка</th> */ }
                { /* <th onClick={() => handleSort("bookmark")} scope="col">Избранное</th> */ }
                { /* <th scope="col"/> */ }
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
