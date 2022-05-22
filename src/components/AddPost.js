import React from "react";
import Form from "./Form";

const AddPost = ({posts, setPosts}) => {

    const handleSubmit = (post) => {
        console.log('post: ', post);
        console.log('posts: ', posts);
        setPosts([...posts, post]);
    }

return(
    <div className="flex-container">
        <h2>Add Post</h2>
        <Form posts={posts} setPosts={setPosts} handleSubmit={handleSubmit}/>
    </div>
)

}

export default AddPost