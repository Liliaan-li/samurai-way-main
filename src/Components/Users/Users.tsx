import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import axios from "axios";

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        })
    }
    onClickHandler(pageNumber: number){
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        let pagesCount = Math.ceil(this.props.usersPage.totalUserCount/ this.props.usersPage.pageSize)
        let pages = []
        for( let i = 1; i<= pagesCount; i++){
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(p=><span
                        className={this.props.usersPage.currentPage === p ? styles.selected : ""}
                        onClick={()=>{this.onClickHandler(p)}}
                    >
                            {p}
                        </span>)
                    }
                </div>
                {this.props.usersPage.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img className={styles.img}
                             src={el.photos.small !== null ? el.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaS4-nTykccKruw9L20TuwO2mVWXX-DZ38EgUwlreUW6Om-ZGHtdDyoGMgGLkvZ-vAoI4&usqp=CAU'}
                             alt=""/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {
                                this.props.unfollow(el.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(el.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{"el.location.country"}</div>
                        <div>{"el.location.city"}</div>
                    </span>
                </span>
                </div>)}
            </div>
        )
    }
}

export default Users;