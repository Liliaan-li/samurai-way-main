import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import state, {postsType} from "../../Redux/State";

type postsPropsType = {
    posts: Array<postsType>
    addPost: (message: string) => void
    newPostText: string
    updatePostText: (newText: string) => void
}
const MyPosts = (props: postsPropsType) => {
    let postElements = state.ProfilePage.posts.map(p => {
        return (<Post key={p.id} message={p.message} likes={p.likes}/>)
    })
    let addPost = () => {
        props.addPost(props.newPostText)
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText(e.currentTarget.value);
    }
    return (
        <div>
            <div className={s.post}>
                <h3>My posts</h3>
                <div>
                    <textarea onChange={onPostChange} onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            addPost()
                        }
                    }
                    } value={props.newPostText}/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;