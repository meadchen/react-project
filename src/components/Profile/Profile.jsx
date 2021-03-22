import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileBg from "./ProfileBg/ProfileBg";
import ProfileDescription from "./ProfileDescription/ProfileDescription";




const Profile = (props) => {
    return(
        <div>
             <div className={s.top}>
                <ProfileBg />
                <ProfileDescription />
            </div>
            <MyPosts postsData={props.state.postsData}
                     store={props.store}
                     dispatch={props.dispatch}
                     newPostText={props.state.newPostText}/>
        </div>
    );
}

export default Profile;