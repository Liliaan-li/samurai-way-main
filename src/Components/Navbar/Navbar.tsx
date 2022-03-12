import React, {FC} from "react";
import s from './Navbar.module.css'
import {itemsType} from "../../App";
import { NavLink } from "react-router-dom";

type navbarType = {
    items: Array<itemsType>
}

export const Navbar: FC<navbarType> = ({items}) => {
    const mappedItems = items.map(i => {
        return (<div key={i.item} className={s.each}><NavLink to={i.item} className={s.item} activeClassName={s.active}>{i.item}</NavLink></div>)
    })
    return (<nav className={s.nav}>
            {mappedItems}
        </nav>

    )
}
