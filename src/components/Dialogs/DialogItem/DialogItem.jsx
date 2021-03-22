import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


export const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.item}>
            <img src={props.src} alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}