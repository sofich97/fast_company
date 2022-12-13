import React from "react";
import Comment from "./comment";
import Proptypes from "prop-types";

const CommentsList = ({ onRemove, comments }) => {
    return comments.map((comment) => (
        <Comment key={comment._id} {...comment} onRemove={onRemove} />
    ));
};

CommentsList.propTypes = {
    comment: Proptypes.array,
    onRemove: Proptypes.func
};

export default CommentsList;
