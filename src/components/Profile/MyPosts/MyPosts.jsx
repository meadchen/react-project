import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import NewPostContainer from "./NewPost/NewPostsContainer";

const MyPosts = (props) => {


    let postsElements = props.postsData.map( post => (<Post dispatch={props.dispatch} message={post.message} likeCount={post.likeCount} id={post.id}/>));
    return(
        <div className={s.content}>
            <NewPostContainer store={props.store}/>
            <div className={s.currentPosts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;