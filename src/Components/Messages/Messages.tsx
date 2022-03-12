import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Messages.module.css'

type namesType = {
    message: Array<messageType>
}
const messages = [
    {message: "Hi"},
    {message: "How are you"},
    {message: "What's going on"},
]
type messageType = {
    message: string
}

type MassiveOfNamesType = {
    name: string
    id: number
}

function MassiveOfNames(props: MassiveOfNamesType) {
    return (
        <div className={s.nameItem + ' ' + s.active}>
            <NavLink to={'/Messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Messages: FC<namesType> = () => {
    const mappedMessages = messages.map(m => {
        return (
            <div key={m.message} className={s.messageItem}>{m.message}</div>
        )
    })
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <MassiveOfNames name={"Andrew"} id={1}/>
                    <MassiveOfNames name={"Marta"} id={2}/>
                    <MassiveOfNames name={"Sonhwa"} id={3}/>
                    <MassiveOfNames name={"Lola"} id={4}/>
                    <MassiveOfNames name={"Kirill"} id={5}/>
                    <MassiveOfNames name={"Miga"} id={6}/>
                </div>
                <div className={s.messages}>
                    {mappedMessages}
                </div>
            </div>
        </div>
    );
};

export default Messages;