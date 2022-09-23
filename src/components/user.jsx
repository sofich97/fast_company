import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import propTypes from "prop-types";

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    bookmark,
    onDelete,
    onToggleBookMark
}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                {qualities.map((quality) => (
                    <Qualitie key={quality._id} {...quality} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{`${rate}/5`}</td>
            <td>
                <BookMark
                    status={bookmark}
                    onClick={() => onToggleBookMark(_id)}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(_id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    _id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    qualities: propTypes.array.isRequired,
    profession: propTypes.object.isRequired,
    completedMeetings: propTypes.number.isRequired,
    rate: propTypes.number.isRequired,
    bookmark: propTypes.bool.isRequired,
    onDelete: propTypes.func.isRequired,
    onToggleBookMark: propTypes.func.isRequired
};

export default User;
