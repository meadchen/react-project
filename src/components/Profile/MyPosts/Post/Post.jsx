import React from "react";
import s from './Post.module.css';
import {addLikeActionCreator} from "../../../../redux/likeReducer";

const Post = (props) => {
    let addLike = () => {
        newLike.current = props.likeCount;
        let likes = +newLike.current + 1;
        props.dispatch(addLikeActionCreator(likes));
        console.log(likes);
    }
    let newLike = React.createRef();
    return(
            <div className={s.item}>
                <img src="https://i.pinimg.com/236x/c3/94/de/c394de30177603f905dbb2b413e37875.jpg" alt="avatar"/>
                <div>
                    <p> {props.message} </p>
                <span onClick={ addLike }>like</span> <span ref={newLike}> {props.likeCount} </span>
                </div>
            </div>
    );
}

export default Post;