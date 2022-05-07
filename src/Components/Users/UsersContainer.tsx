import Users from "./Users";
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUserAC, unfollowAC, UsersType} from "../Redux/usersReducer";
import {InitialStateType} from "../Redux/usersReducer";

type MapStateToPropsType ={
    usersPage: InitialStateType
}
type MapDispatchToPropsType ={
    follow: (userId: number)=> void
    unfollow: (userId: number)=> void
    setUsers: (users: Array<UsersType>)=> void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps=(state: AppRootStateType)=>{
    return{
    usersPage: state.usersPage
    }
}
let mapDispatchToProps =(dispatch: Dispatch)=>{
    return{
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer