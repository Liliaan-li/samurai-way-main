import s from "./MessageElement.module.css";
import React from "react";

export type messagesDataType = {
    message: string
    id: number
}

export const MessageElement = (props: messagesDataType) => {

    return <div className={s.messages}>
                <div key={props.message} className={s.messageItem}>{props.message}</div>
        </div>
}
