import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state, {ProfilePageType} from "../Redux/State";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (message:string)=> void
    updatePostText:(newText:string)=>void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.ProfilePage.posts}
                     newPostText={state.ProfilePage.newPostText}
                     updatePostText={props.updatePostText}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile;