import React from 'react';
import {connect} from "react-redux";
import SideBar from "./SideBar";
import {AppRootStateType} from "../Redux/redux-store";
import {Dispatch} from "redux";
import {InitialStateType} from "../Redux/sideBarReducer";

export type SideBarPropsType = MapStatePropsType & MapDispatchPropsType;
export type MapStatePropsType = {
    sideBar: InitialStateType
}
export type MapDispatchPropsType = {

}
let mapStateToProps = (state : AppRootStateType)=>{
    return {
        sideBar: state.sideBar
    }
}
let mapDispatchToProps = (dispatch : Dispatch)=>{
    return {

    }
}
const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar)
export default SideBarContainer;