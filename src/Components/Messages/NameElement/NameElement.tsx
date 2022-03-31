import s from "../Messages.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type namesDataType = {
    id: number
    name: string
}
export const NameElement = (props: namesDataType) => {
    return <div className={s.main} >
        <div className={s.imagePost}>
            <img alt={'ava'}
                src={'http://img10.joyreactor.cc/pics/post/art-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-art-Fantasy-elf-5982712.jpeg'}/>
        </div>
        <div className={s.nameItem + ' ' + s.active}>
            <NavLink to={'/Messages/' + props.id}>{props.name}</NavLink>
        </div>
    </div>
}