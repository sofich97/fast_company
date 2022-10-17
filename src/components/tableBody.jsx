import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableReact = ({ data, columns }) => {
    // const userId = match.params.userId;
    const renderContent = (item, column) => {
        if (columns[column].component) {
            const component = columns[column].component;
            if (typeof component === "function") {
                return component(item);
            }
            return component;
        }
        return _.get(item, columns[column].path);
    };

    // const getUserInfoById = (id) => {
    //     return columns.find((column) => column.id === id);
    // };
    //
    // const userInfo = getUserInfoById(userId);
    // console.log("userInfo tableBody", userInfo);
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column) => (
                        <td key={column}>
                            { renderContent(item, column) }
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

TableReact.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableReact;
