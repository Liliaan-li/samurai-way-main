import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
    return (
        <div>
            <div className={s.post}>
                <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <Post message={"Hi, how are you?"}  likes={"20"}/>
            <Post message={"It's my first post"} likes={"10"}/>

        </div>
    );
};

export default MyPosts;