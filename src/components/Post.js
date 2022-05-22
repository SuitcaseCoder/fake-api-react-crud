import React from "react";

const Post = ({title, body}) => {

    return (
        <div className="flex-container">
            <h2>Individual Post</h2>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}

export default Post;