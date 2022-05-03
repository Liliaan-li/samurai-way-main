import React from "react";
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import SideBarContainer from "./SideBarContainer";

export const Navbar =() => {
    return (<nav className={s.nav}>
            <div className={s.each}><NavLink exact to="/" className={s.item} activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.each}><NavLink to="/Messages" className={s.item} activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.each}><NavLink to="/News" className={s.item} activeClassName={s.active}>News</NavLink></div>
            <div className={s.each}><NavLink to="/Music" className={s.item} activeClassName={s.active}>Music</NavLink></div>
            <div className={s.each}><NavLink to="/Settings" className={s.item} activeClassName={s.active}>Settings</NavLink></div>
            <div className={s.each}><NavLink to="/Users" className={s.item} activeClassName={s.active}>Users</NavLink></div>
            <SideBarContainer/>
        </nav>

    )
}
