import React from 'react';
import s from "./SideBar.module.css";
import {SideBarPropsType} from "./SideBarContainer";


const SideBar = (props: SideBarPropsType) => {
    const mappedItems = props.sideBar.friendsNames.map(f => {
        return (
            <div key={f.friendName}>
                <div className={s.ava}><img src="http://img10.joyreactor.cc/pics/post/art-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0-art-Fantasy-elf-5982712.jpeg" alt="#"/></div>
                <div className={s.friends_name}>{f.friendName}</div>
            </div>
        )
    })
    return (<>
            <div className={s.item + ' ' + s.friends}>Friends</div>
            <div className={s.main_row}>
                {mappedItems}
            </div>
        </>
    );
};

export default SideBar;