import React from "react";
import s from './Profile.module.css';
import ProfileBg from "./ProfileBg/ProfileBg";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile = (props) => {
    return(
        <div>
             <div className={s.top}>
                <ProfileBg />
                <ProfileDescription />
            </div>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;