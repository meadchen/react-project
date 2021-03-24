import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePost(text);
    }
    let postsElements = props.profilePage.postsData.map( post => (<Post message={post.message} likeCount={post.likeCount} id={post.id}/>));
    return(
        <div className={s.content}>
            <div className={s.newPost}>
                <h2>My posts</h2>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.currentPosts}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;