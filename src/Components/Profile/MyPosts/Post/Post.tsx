import React from 'react';
import s from "./Post.module.css";

type PostType = {
    message: string;
    likes: string;
}
const Post = (props: PostType) => {
    return (
        <div>
            <div className={s.main}>
                <div className={s.imagePost}>
                    <img src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16ba7581-d40f-45a6-ad94-b1e783d22fb6/ddt7hb5-690e4d07-78fc-46f2-a2bb-d486725238df.jpg/v1/fill/w_800,h_1209,q_75,strp/fantasy_elf_by_gantzu_ddt7hb5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwOSIsInBhdGgiOiJcL2ZcLzE2YmE3NTgxLWQ0MGYtNDVhNi1hZDk0LWIxZTc4M2QyMmZiNlwvZGR0N2hiNS02OTBlNGQwNy03OGZjLTQ2ZjItYTJiYi1kNDg2NzI1MjM4ZGYuanBnIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._1PTiei4bGJMNlWaE3GvDmLMX-vMDBZhrzyMN8AanyE'}/>
                </div>

                <div className={`${s.item} ${s.active}`}>
                    {props.message}
                </div>
            </div>
            <div className={s.likes}>
                <span>Likes {props.likes}</span>
            </div>
        </div>
    );
};

export default Post;