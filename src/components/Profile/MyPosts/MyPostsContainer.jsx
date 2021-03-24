import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";



let mapStateToProps = (state) =>{
    return{
        profilePage: state.profilePage,
        newPostText: state.profilePage.newPostText
    }

}
let mapDispatchToProps = (dispatch) =>{
    return{
        updatePost: (text) => {
            dispatch(updatePostActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;