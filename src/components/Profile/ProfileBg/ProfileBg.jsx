import React from "react";
import s from './ProfileBg.module.css';

const ProfileBg = () => {
    return(
        <div>
            <img className={s.contentBg}
                 src="https://blount.as.ua.edu/wp-content/uploads/2020/02/Robert-Johnson-Pic-1536x864.jpg"
                 alt="bg"/>
        </div>
    );
}

export default ProfileBg;