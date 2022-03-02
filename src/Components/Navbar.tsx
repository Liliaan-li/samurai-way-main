import React from "react";
import s from './Navbar.module.css'

 export type NavigationType = {
    nav: string;
}
function Navigation(props: NavigationType){
    return (
        <div><a href='#' className={s.item}>{props.nav}</a></div>
    )
}
export default Navigation;