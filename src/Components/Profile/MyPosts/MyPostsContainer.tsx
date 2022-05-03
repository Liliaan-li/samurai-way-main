import React from 'react';
import {
    addPostActionCreator,
    InitialStateType,
    updateNewPostActionCreator
} from "../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import {AppRootStateType} from "../../Redux/redux-store";

export type MyPostsType = MapStatePropsType & MapDispatchPropsType;
export type MapStatePropsType = {
    profilePage: InitialStateType
}
export type MapDispatchPropsType = {
    addPost: () => void
    updateNewPost: (text: string) => void
}
let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPost: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;