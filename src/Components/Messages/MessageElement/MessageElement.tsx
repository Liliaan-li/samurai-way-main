import s from "./MessageElement.module.css";
import React from "react";

type messagesDataType = {
    message: string
}

export const MessageElement = (props: messagesDataType) => {

    return <div className={s.messages}>
                <div key={props.message} className={s.messageItem}>{props.message}</div>
                {/*Код стыбжен с телеги и немного подправлен)))*/}
                <div className={s.svg_appendix}>
                    <svg width="9" height="19.5">
                        <path
                            d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
                            fill="white" className={s.corner}>
                        </path>
                    </svg>
                </div>
        </div>
}
