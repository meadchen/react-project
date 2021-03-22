import s from './Friends.module.css';
import {FriendItem} from "./FriendItem/FriendItem";
import React from "react";

const Friends = (props) => {
    let navbarFriends = props.state.friends.map(friends => (<FriendItem name={friends.name} src={friends.src}/>));

    return(
        <div className={s.friendsBlock}>
            <h2>Friends</h2>
            <div className={s.friendsWrapper}>
                { navbarFriends }
            </div>
        </div>
    )
}

export default Friends;