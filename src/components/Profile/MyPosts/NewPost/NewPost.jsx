import React from "react";
import s from './NewPost.module.css';





const NewPost = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePost(text);

    }
    return (
        <div className={s.newPost}>
            <h2>My posts</h2>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={ addPost }>Add post</button>
            </div>
        </div>
    );
}

export default NewPost;