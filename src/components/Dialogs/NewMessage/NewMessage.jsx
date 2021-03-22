import s from "./NewMessage.module.css";
import React from "react";

export const CreateMessage = (props) => {
    let addNewMessage = () =>{
        props.addMessage();
    }
    let onMesChange = (e) => {
        let textMessage = e.target.value;
        props.updateMessage(textMessage);
    }
    return (
        <div className={s.newMessage}>
            <textarea onChange={onMesChange} value={props.newMesText}></textarea>
            <button onClick={ addNewMessage }>Add message</button>
        </div>
    );
}

