import React from 'react';
import {InitialStateType, sendMessageCreator, updateNewMessageBodyCreator} from "../Redux/messagesReducer";
import {AppRootStateType} from "../Redux/redux-store";
import Messages from "./Messages";
import {connect} from "react-redux";
import {Dispatch} from "redux";

export type MapStatePropsType = {
    messagePage: InitialStateType
}
export type MapDispatchPropsType = {
    addMessage: () => void
    updateNewMessageBody: (text: string) => void
}
export type MessagesPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        messagePage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (text: string) => {
            dispatch(updateNewMessageBodyCreator(text))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;