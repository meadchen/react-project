import s from "./FriendItem.module.css";

export const FriendItem = (props) => {
    return (
        <div className={s.friend}>
            <img src={props.src} alt=""/>
            <p className={s.friendsName}>{props.name}</p>
        </div>
    )
}