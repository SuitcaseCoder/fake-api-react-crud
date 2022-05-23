import React from "react";
import '../../src/styles.css'

const Post = ({title, body, id}) => {

    

    return (
        <div className="flex-container">
            <div className="card" key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={(id) => {handleEdit(id)}}>edit</button>
            <button>delete</button>
            </div>
        </div>
    )
}

export default Post;