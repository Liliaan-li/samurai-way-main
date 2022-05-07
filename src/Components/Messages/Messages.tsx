import React, {ChangeEvent} from 'react';
import s from './Messages.module.css'
import {MessageElement} from "./MessageElement/MessageElement";
import {NameElement} from "./NameElement/NameElement";
import {MessagesPropsType} from "./MessagesContainer";


const Messages = (props: MessagesPropsType) => {
    const mappedMessages = props.messagePage.messages.map(m => {
        return (<MessageElement key={m.message} message={m.message} id={m.id}/>)
    })
    const mappedNames = props.messagePage.namesData.map(n => {
        return (<NameElement key={n.id} name={n.name} id={n.id}/>)
    })

    const onAddMessage = () => {
        props.addMessage()
    }
    const UpdateNewMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {mappedNames}
                </div>
                <div className={s.messages}>
                    <div>{mappedMessages}</div>
                    <div>
                        <div><textarea value={props.messagePage.newMessageBody} onChange={UpdateNewMessageBody} onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                onAddMessage()
                            }
                        }
                        } /></div>
                        <div>1
                            <button onClick={onAddMessage}>Add message</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Messages;