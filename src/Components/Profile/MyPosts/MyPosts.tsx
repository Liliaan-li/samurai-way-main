import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {MyPostsType} from "./MyPostsContainer";

const MyPosts = (props: MyPostsType) => {
    let postElements = props.profilePage.posts.map(p => {
        return (<Post key={p.id} message={p.message} likes={p.likes}/>)
    })
    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPost(e.currentTarget.value)

    }
    return (
        <div>
            <div className={s.post}>
                <h3>My posts</h3>
                <div>
                    <textarea onChange={onPostChange} onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            onAddPost()
                        }
                    }
                    } value={props.profilePage.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;