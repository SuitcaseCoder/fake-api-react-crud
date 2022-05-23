import React from 'react';
import AddPost from '../components/AddPost';
import Post from '../components/Post';

const Posts = ({posts, setPosts}) => {

    return(
        <div className="flex-column">
            <h1>All Posts</h1>
            <div>
                <AddPost posts={posts} setPosts={setPosts}/>
            </div>
            <div>
            .... all posts here ....
                {posts.map((post) => 
                    <Post 
                        title={post.title}
                        body={post.body}
                    />
                )} 
            </div>
        </div>
    )
}
export default Posts;