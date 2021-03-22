import React from "react";
import s from './NewPost.module.css';
import {addPostActionCreator, updatePostActionCreator} from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";



const NewPostContainer = (props) => {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        props.store.dispatch(updatePostActionCreator(text));
        debugger;
    }
    return (
        <NewPost updatePost={ onPostChange }
                 addPost={ addPost }
                 newPostText={props.store.getState().newPostText}/>
    );
}

export default NewPostContainer;