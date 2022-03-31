import React from 'react';
import s from './Messages.module.css'
import {MessageElement} from "./MessageElement/MessageElement";
import {NameElement} from "./NameElement/NameElement";
import state, {MessagePageType} from "../Redux/State";
type MessagesPropsType={
    messagesPage: MessagePageType
}


const Messages = (props:MessagesPropsType) => {
    const mappedMessages = state.MessagesPage.messages.map(m => {
        return (<MessageElement key={m.message} message={m.message}/>)
    })
    const mappedNames = state.MessagesPage.namesData.map(n => {
        return (<NameElement key={n.id} name={n.name} id={n.id}/>)
    })
    let newMessageText = React.createRef<HTMLTextAreaElement>()
    const addMessage = () =>{
        let newMessage = newMessageText.current?.value
        alert(newMessage)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {mappedNames}
                </div>
                 <div className={s.messages}>
                    {mappedMessages}
                     <div>
                         <textarea ref={newMessageText}></textarea>
                         <button onClick={addMessage}>Add message</button>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;