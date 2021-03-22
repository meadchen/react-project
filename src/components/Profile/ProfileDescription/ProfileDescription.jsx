import React from "react";
import s from './ProfileDescription.module.css';


const ProfileDescription = () => {
    return (
        <div className={s.contentMain}>
            <img src="https://sun9-27.userapi.com/c637829/v637829353/5707/2za2EbkuXFE.jpg" alt="avatar"
                 className="content-avatar"/>
            <div className={s.contentDescription}>
                <p className={s.name}>Anastasia P.</p>
                <p className={s.birthDate}>Date of Birth: <span>11.05</span></p>
                <p className={s.city}>City: <span>Nikolaev</span></p>
                <p className={s.site}> Web Site: <a href="https://let-date-new.date">https://let-date-new.date</a></p>
            </div>
        </div>
    );
}

export default ProfileDescription;