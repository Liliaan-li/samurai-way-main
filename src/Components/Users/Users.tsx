import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'

const Users = (props: UsersPropsType) => {
    if(props.usersPage.users.length ===0) {props.setUsers([
        {
            id: 1,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaS4-nTykccKruw9L20TuwO2mVWXX-DZ38EgUwlreUW6Om-ZGHtdDyoGMgGLkvZ-vAoI4&usqp=CAU',
            fullName: 'San',
            status: 'JN',
            followed: true,
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaS4-nTykccKruw9L20TuwO2mVWXX-DZ38EgUwlreUW6Om-ZGHtdDyoGMgGLkvZ-vAoI4&usqp=CAU',
            fullName: 'Sonhwa',
            status: 'JK',
            followed: false,
            location: {city: 'Minsk', country: 'Russia'}
        },
        {
            id: 3,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaS4-nTykccKruw9L20TuwO2mVWXX-DZ38EgUwlreUW6Om-ZGHtdDyoGMgGLkvZ-vAoI4&usqp=CAU',
            fullName: 'Minho',
            status: 'JL',
            followed: true,
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ])}

    return (
        <div>
            {props.usersPage.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img className={styles.img} src={el.photo} alt=""/>
                    </div>
                    <div>
                        {el.followed
                            ? <button onClick={() => {
                                props.unfollow(el.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(el.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.fullName}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>{el.location.country}</div>
                        <div>{el.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;